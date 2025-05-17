import { ProfileView } from "@/components/profile-view"
import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
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
          <ProfileView />
        </div>
      </div>
    </AppLayout>
  )
}
