import { getSuggestedConnections, getCurrentUser } from "@/lib/data"
import { AppLayout } from "@/components/app-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserPlus } from "lucide-react"
import { redirect } from "next/navigation"

export default async function NetworkPage() {
    const user = await getCurrentUser()

    if (!user) {
        redirect("/login")
    }

    const suggestions = await getSuggestedConnections(user.id)

    return (
        <AppLayout>
            <div className="py-6">
                <div className="container max-w-5xl">
                    <h1 className="mb-6 text-2xl font-bold tracking-tight">Grow Your Network</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {suggestions.map((suggestion: any) => (
                            <Card key={suggestion.id} className="card-neumorphic overflow-hidden">
                                <div className="h-20 bg-muted/50"></div>
                                <CardContent className="pt-0 relative px-6 pb-6">
                                    <div className="absolute -top-10 left-6">
                                        <Avatar className="h-20 w-20 border-4 border-background">
                                            <AvatarImage src={suggestion.image || ""} />
                                            <AvatarFallback>{suggestion.name?.[0]}</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="mt-12 space-y-2">
                                        <div>
                                            <h3 className="font-semibold text-lg">{suggestion.name}</h3>
                                            <p className="text-sm text-muted-foreground">{suggestion.profile?.headline || "No headline"}</p>
                                        </div>
                                        <Button className="w-full gap-2" variant="outline">
                                            <UserPlus className="h-4 w-4" /> Connect
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        {suggestions.length === 0 && (
                            <div className="col-span-full py-12 text-center text-muted-foreground">
                                No new suggestions right now.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
