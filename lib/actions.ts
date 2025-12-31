"use server"

import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { revalidatePath } from "next/cache"

export async function applyForJob(jobId: string) {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
        throw new Error("You must be logged in to apply.")
    }

    // Get user ID
    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
    })

    if (!user) {
        throw new Error("User not found.")
    }

    // Check if already applied
    const existingApplication = await prisma.application.findFirst({
        where: {
            jobId,
            userId: user.id
        }
    })

    if (existingApplication) {
        return { success: false, message: "You have already applied for this job." }
    }

    // Create Application
    await prisma.application.create({
        data: {
            jobId,
            userId: user.id,
            status: "APPLIED"
        }
    })

    revalidatePath("/jobs")
    revalidatePath("/dashboard")
    return { success: true, message: "Application submitted successfully!" }
}
