import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { generateEmbedding, computeSimilarity } from "@/lib/ai"

export async function getCurrentUser() {
    const session = await getServerSession(authOptions)
    return session?.user
}

export async function getProfile(userId: string) {
    return await prisma.profile.findUnique({
        where: { userId },
        include: {
            experience: true,
            education: true,
            skills: true,
            user: {
                select: {
                    name: true,
                    email: true,
                    image: true,
                }
            }
        }
    })
}

export async function getJobs() {
    return await prisma.job.findMany({
        orderBy: { postedAt: 'desc' },
        include: {
            _count: {
                select: { applications: true }
            }
        }
    })
}

export async function getPosts() {
    return await prisma.post.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
            author: {
                select: {
                    name: true,
                    image: true,
                    profile: {
                        select: { headline: true }
                    }
                }
            },
            _count: {
                select: { likes: true, comments: true }
            }
        }
    })
}

export async function getSuggestedConnections(userId: string) {
    // 1. Get Current User's Profile Data for "Context"
    const currentUser = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            profile: {
                include: { skills: true }
            }
        }
    })

    if (!currentUser?.profile) return []

    // Create a text representation of the user for embedding
    // e.g. "Senior React Developer. Skills: React, TypeScript, Node.js"
    const userText = `
        ${currentUser.profile.headline || ''} 
        ${currentUser.profile.bio || ''} 
        ${currentUser.profile.skills.map(s => s.name).join(', ')}
    `.trim()

    // 2. Generate Vector for Current User
    const userVector = await generateEmbedding(userText)

    // 3. Fetch Candidates (filtering out existing connections)
    const candidates = await prisma.user.findMany({
        where: {
            id: { not: userId },
            AND: [
                { connectedTo: { none: { userId } } },
                { connections: { none: { targetId: userId } } }
            ]
        },
        take: 50, // Fetch a pool to rank
        select: {
            id: true,
            name: true,
            image: true,
            profile: {
                select: {
                    headline: true,
                    bio: true,
                    skills: true
                }
            }
        }
    })

    // 4. Score and Rank Candidates
    const scoredCandidates = await Promise.all(candidates.map(async (candidate) => {
        const candidateText = `
            ${candidate.profile?.headline || ''} 
            ${candidate.profile?.bio || ''} 
            ${candidate.profile?.skills.map((s: { name: string }) => s.name).join(', ') || ''}
        `.trim()

        const candidateVector = await generateEmbedding(candidateText)
        const score = computeSimilarity(userVector, candidateVector)

        return { ...candidate, score }
    }))

    // Sort by highest similarity
    scoredCandidates.sort((a, b) => b.score - a.score)

    // Return Top 10
    return scoredCandidates.slice(0, 10)
}

