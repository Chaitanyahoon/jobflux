import { ProfileView } from "@/components/profile-view"
import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { getProfile } from "@/lib/data"
import { redirect } from "next/navigation"

export default async function ProfilePage() {

  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect("/login")
  }

  const profile = await getProfile(session.user.id)

  return (
    <AppLayout>
      <div className="py-6">
        <div className="container max-w-5xl">
          <div className="mb-6">
            <Card className="card-neumorphic">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Your Profile</CardTitle>
                    <CardDescription>Complete your profile to increase your chances of getting hired</CardDescription>
                  </div>
                  <Badge variant="outline" className="px-3 py-1">
                    {/* Calculate completion based on real data if possible, or keep mock for now */}
                    83% Complete
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Progress value={83} className="h-2" />
                <p className="mt-2 text-sm text-muted-foreground">
                  Upload your resume to complete your profile and increase your visibility to employers.
                </p>
              </CardContent>
            </Card>
          </div>
          <ProfileView initialData={profile || undefined} user={session.user} />
        </div>
      </div>
    </AppLayout>
  )
}
