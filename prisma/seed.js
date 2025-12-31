const { PrismaClient } = require('@prisma/client')
const { hash } = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
    const password = await hash('password123', 10)

    // Create Demo User
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
                    bio: 'Passionate about building scalable web applications and AI integration.',
                    location: 'San Francisco, CA',
                    skills: {
                        create: [
                            { name: 'React' },
                            { name: 'Node.js' },
                            { name: 'TypeScript' },
                            { name: 'Next.js' },
                            { name: 'Prisma' }
                        ]
                    }
                }
            }
        },
    })

    console.log('Seeded User:', user.email)

    // Clear existing jobs to avoid duplicates on re-seed
    await prisma.job.deleteMany({})

    const companies = [
        { name: 'TechCorp', location: 'San Francisco, CA' },
        { name: 'InnovateSoft', location: 'Austin, TX' },
        { name: 'FutureSystems', location: 'New York, NY' },
        { name: 'CloudScale', location: 'Seattle, WA' },
        { name: 'DataMind', location: 'Boston, MA' }
    ]

    const jobPlease = [
        {
            title: 'Senior Frontend Developer',
            type: 'Full-time',
            salary: '$140k - $180k',
            description: 'Lead our frontend team building the next generation of our platform using React and Next.js.'
        },
        {
            title: 'Backend Engineer',
            type: 'Full-time',
            salary: '$130k - $160k',
            description: 'Design and implement scalable APIs and microservices using Node.js and PostgreSQL.'
        },
        {
            title: 'Product Designer',
            type: 'Contract',
            salary: '$90 - $120 / hr',
            description: 'Create intuitive and beautiful user experiences for our mobile and web products.'
        },
        {
            title: 'DevOps Engineer',
            type: 'Full-time',
            salary: '$120k - $150k',
            description: 'Manage our cloud infrastructure on AWS and improve our CI/CD pipelines.'
        },
        {
            title: 'Machine Learning Engineer',
            type: 'Full-time',
            salary: '$160k - $200k',
            description: 'Build and deploy machine learning models to solve complex business problems.'
        },
        {
            title: 'Product Manager',
            type: 'Full-time',
            salary: '$130k - $170k',
            description: 'Drive the product vision and roadmap, working closely with engineering and design teams.'
        },
        {
            title: 'Technical Writer',
            type: 'Part-time',
            salary: '$50 - $80 / hr',
            description: 'Create clear and concise documentation for our APIs and developer tools.'
        }
    ]

    const jobs = []

    // Generate 20 realistic jobs
    for (let i = 0; i < 20; i++) {
        const company = companies[Math.floor(Math.random() * companies.length)]
        const jobTemplate = jobPlease[Math.floor(Math.random() * jobPlease.length)]

        jobs.push({
            title: jobTemplate.title,
            company: company.name,
            location: Math.random() > 0.3 ? company.location : 'Remote',
            description: jobTemplate.description,
            type: jobTemplate.type,
            salary: jobTemplate.salary,
            postedAt: new Date(Date.now() - Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000)) // Random date in last 10 days
        })
    }

    for (const job of jobs) {
        await prisma.job.create({
            data: job
        })
    }

    console.log(`Seeded ${jobs.length} jobs`)
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
