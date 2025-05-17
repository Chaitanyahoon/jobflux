import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AppLayout } from "@/components/app-layout"

export default function SettingsPage() {
  return (
    <AppLayout>
      <div className="py-6">
        <div className="container max-w-4xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          </div>

          <Tabs defaultValue="account" className="mt-6">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              <TabsTrigger
                value="account"
                className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Account
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Notifications
              </TabsTrigger>
              <TabsTrigger
                value="privacy"
                className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Privacy
              </TabsTrigger>
              <TabsTrigger
                value="appearance"
                className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Appearance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="space-y-6 pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>Update your account details and contact information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue="{user.name}" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="chaitanya@gmail.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" defaultValue="+91 97XX XXXX XX" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="chaitanya" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Change your password.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Update Password</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Danger Zone</CardTitle>
                  <CardDescription>Permanently delete your account and all of your data.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Once you delete your account, there is no going back. This action cannot be undone.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="destructive">Delete Account</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6 pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Choose how and when you want to be notified.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Email Notifications</h3>
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="job-matches">Job Matches</Label>
                          <p className="text-xs text-muted-foreground">
                            Receive notifications when new jobs match your profile.
                          </p>
                        </div>
                        <Switch id="job-matches" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="application-updates">Application Updates</Label>
                          <p className="text-xs text-muted-foreground">Receive updates on your job applications.</p>
                        </div>
                        <Switch id="application-updates" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="profile-views">Profile Views</Label>
                          <p className="text-xs text-muted-foreground">
                            Receive notifications when employers view your profile.
                          </p>
                        </div>
                        <Switch id="profile-views" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="job-alerts">Job Alerts</Label>
                          <p className="text-xs text-muted-foreground">
                            Receive alerts for jobs that match your saved searches.
                          </p>
                        </div>
                        <Switch id="job-alerts" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="marketing">Marketing</Label>
                          <p className="text-xs text-muted-foreground">Receive marketing emails and newsletters.</p>
                        </div>
                        <Switch id="marketing" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Notification Frequency</h3>
                    <Separator />
                    <div className="space-y-2">
                      <Label htmlFor="frequency">Email Digest Frequency</Label>
                      <Select defaultValue="daily">
                        <SelectTrigger id="frequency">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="realtime">Real-time</SelectItem>
                          <SelectItem value="daily">Daily Digest</SelectItem>
                          <SelectItem value="weekly">Weekly Digest</SelectItem>
                          <SelectItem value="never">Never</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-6 pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>Control your privacy and visibility on JobFlux.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Profile Visibility</h3>
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="profile-public">Public Profile</Label>
                          <p className="text-xs text-muted-foreground">
                            Make your profile visible to all employers on JobFlux.
                          </p>
                        </div>
                        <Switch id="profile-public" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="show-salary">Show Salary Expectations</Label>
                          <p className="text-xs text-muted-foreground">
                            Display your salary expectations on your profile.
                          </p>
                        </div>
                        <Switch id="show-salary" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="show-contact">Show Contact Information</Label>
                          <p className="text-xs text-muted-foreground">
                            Display your contact information to employers who view your profile.
                          </p>
                        </div>
                        <Switch id="show-contact" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Data Sharing</h3>
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="data-analytics">Analytics</Label>
                          <p className="text-xs text-muted-foreground">
                            Allow JobFlux to use your data for analytics and service improvements.
                          </p>
                        </div>
                        <Switch id="data-analytics" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="data-personalization">Personalization</Label>
                          <p className="text-xs text-muted-foreground">
                            Allow JobFlux to use your data for personalized job recommendations.
                          </p>
                        </div>
                        <Switch id="data-personalization" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="data-third-party">Third-Party Sharing</Label>
                          <p className="text-xs text-muted-foreground">
                            Allow JobFlux to share your data with trusted third parties.
                          </p>
                        </div>
                        <Switch id="data-third-party" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Privacy Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="appearance" className="space-y-6 pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance</CardTitle>
                  <CardDescription>Customize the appearance of JobFlux.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Theme</h3>
                    <Separator />
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-primary bg-background">
                          <span className="text-2xl">A</span>
                        </div>
                        <Label className="text-xs">Light</Label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-muted bg-black text-white">
                          <span className="text-2xl">A</span>
                        </div>
                        <Label className="text-xs">Dark</Label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-muted bg-[linear-gradient(to_right,white_50%,black_50%)]">
                          <span className="text-2xl bg-clip-text text-transparent bg-[linear-gradient(to_right,black_50%,white_50%)]">
                            A
                          </span>
                        </div>
                        <Label className="text-xs">System</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Density</h3>
                    <Separator />
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-md border-2 border-muted p-1">
                          <div className="h-2 w-full rounded-sm bg-muted-foreground/30"></div>
                          <div className="my-1 h-2 w-full rounded-sm bg-muted-foreground/30"></div>
                          <div className="h-2 w-full rounded-sm bg-muted-foreground/30"></div>
                        </div>
                        <Label className="text-xs">Compact</Label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-md border-2 border-primary p-1">
                          <div className="h-3 w-full rounded-sm bg-muted-foreground/30"></div>
                          <div className="my-2 h-3 w-full rounded-sm bg-muted-foreground/30"></div>
                          <div className="h-3 w-full rounded-sm bg-muted-foreground/30"></div>
                        </div>
                        <Label className="text-xs">Default</Label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-md border-2 border-muted p-1">
                          <div className="h-4 w-full rounded-sm bg-muted-foreground/30"></div>
                          <div className="my-3 h-4 w-full rounded-sm bg-muted-foreground/30"></div>
                        </div>
                        <Label className="text-xs">Comfortable</Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Appearance</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AppLayout>
  )
}
