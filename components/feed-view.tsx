"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MessageSquare, Share2, Send } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface FeedViewProps {
    initialPosts: any[]
    currentUser: any
}

export function FeedView({ initialPosts, currentUser }: FeedViewProps) {
    const [posts, setPosts] = useState(initialPosts)
    const [newPostContent, setNewPostContent] = useState("")

    const handlePost = async () => {
        if (!newPostContent.trim()) return

        // Optimistic update (real app should call server action)
        const newPost = {
            id: "temp-" + Date.now(),
            content: newPostContent,
            createdAt: new Date(),
            author: {
                name: currentUser.name,
                image: currentUser.image,
                profile: { headline: "You" }
            },
            _count: { likes: 0, comments: 0 }
        }

        setPosts([newPost, ...posts])
        setNewPostContent("")
    }

    return (
        <div className="space-y-6">
            <Card className="card-neumorphic">
                <CardContent className="pt-6">
                    <div className="flex gap-4">
                        <Avatar>
                            <AvatarImage src={currentUser.image || ""} />
                            <AvatarFallback>{currentUser.name?.[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-4">
                            <Textarea
                                placeholder="Start a post..."
                                value={newPostContent}
                                onChange={(e) => setNewPostContent(e.target.value)}
                                className="min-h-[100px]"
                            />
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                    {/* Media buttons could go here */}
                                </div>
                                <Button onClick={handlePost} disabled={!newPostContent.trim()}>
                                    <Send className="mr-2 h-4 w-4" /> Post
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-4">
                {posts.map((post) => (
                    <Card key={post.id} className="card-neumorphic">
                        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                            <Avatar>
                                <AvatarImage src={post.author.image || ""} />
                                <AvatarFallback>{post.author.name?.[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">{post.author.name}</h3>
                                        <p className="text-sm text-muted-foreground">{post.author.profile?.headline}</p>
                                    </div>
                                    <span className="text-xs text-muted-foreground">
                                        {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                                    </span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="whitespace-pre-wrap">{post.content}</p>
                        </CardContent>
                        <CardFooter className="border-t bg-muted/50 p-2 px-6">
                            <div className="flex w-full gap-4">
                                <Button variant="ghost" size="sm" className="flex-1 gap-2">
                                    <Heart className="h-4 w-4" />
                                    Like {post._count.likes > 0 && `(${post._count.likes})`}
                                </Button>
                                <Button variant="ghost" size="sm" className="flex-1 gap-2">
                                    <MessageSquare className="h-4 w-4" />
                                    Comment {post._count.comments > 0 && `(${post._count.comments})`}
                                </Button>
                                <Button variant="ghost" size="sm" className="flex-1 gap-2">
                                    <Share2 className="h-4 w-4" />
                                    Share
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
