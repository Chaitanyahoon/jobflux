import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    const password = await hash('password123', 10)

    const user = await prisma.user.upsert({
        where: { email: 'test@example.com' },
        update: {},
        create: {
            email: 'test@example.com',
            name: 'Test User',
            password,
            profile: {
                create: {
                    headline: 'Full Stack Developer',
                    bio: 'Passionate about building scalable web applications.',
                    location: 'Remote',
                    skills: {
                        create: [
                            { name: 'React' },
                            { name: 'Node.js' },
                            { name: 'TypeScript' }
                        ]
                    }
                }
            }
        },
    })

    console.log({ user })

    const jobs = [
        {
            title: 'Senior Frontend Developer',
            company: 'TechCorp',
            location: 'Remote',
            description: 'We are looking for an experienced React developer...',
            type: 'Full-time',
            salary: '$120k - $150k'
        },
        {
            title: 'Backend Engineer',
            company: 'DataSystems',
            location: 'New York, NY',
            description: 'Join our backend team building high-performance APIs...',
            type: 'Full-time',
            salary: '$130k - $160k'
        },
        {
            title: 'Product Designer',
            company: 'CreativeStudio',
            location: 'London, UK',
            description: 'Design beautiful interfaces for our global clients...',
            type: 'Contract',
            salary: '$80 - $100 / hr'
        }
    ]

    for (const job of jobs) {
        await prisma.job.create({
            data: job
        })
    }

    console.log('Seeded database with jobs')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
