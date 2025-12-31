import { getPosts, getCurrentUser } from "@/lib/data"
import { AppLayout } from "@/components/app-layout"
import { FeedView } from "@/components/feed-view"
import { redirect } from "next/navigation"

export default async function FeedPage() {
    const user = await getCurrentUser()

    if (!user) {
        redirect("/login")
    }

    const posts = await getPosts()

    return (
        <AppLayout>
            <div className="py-6">
                <div className="container max-w-2xl">
                    <h1 className="mb-6 text-2xl font-bold tracking-tight">Your Feed</h1>
                    <FeedView initialPosts={posts} currentUser={user} />
                </div>
            </div>
        </AppLayout>
    )
}
