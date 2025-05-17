import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Send } from "lucide-react"

export default function MessagesPage() {
  return (
    <AppLayout>
      <div className="py-6">
        <div className="container">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Messages</h1>
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search messages..." className="w-full pl-8 sm:w-[300px]" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr]">
            <Card className="h-[calc(100vh-180px)]">
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Conversations</CardTitle>
                <CardDescription>Recent messages from your connections</CardDescription>
              </CardHeader>
              <Tabs defaultValue="all">
                <div className="px-4">
                  <TabsList className="w-full">
                    <TabsTrigger value="all" className="flex-1">
                      All
                    </TabsTrigger>
                    <TabsTrigger value="unread" className="flex-1">
                      Unread
                    </TabsTrigger>
                    <TabsTrigger value="archived" className="flex-1">
                      Archived
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="all" className="m-0">
                  <div className="h-[calc(100vh-280px)] overflow-auto">
                    {[
                      { name: "Priya Sharma", company: "TechCorp Inc.", unread: true, time: "2m ago" },
                      { name: "Vikram Mehta", company: "InnovateSoft", unread: false, time: "1h ago" },
                      { name: "Neha Gupta", company: "DesignHub", unread: false, time: "3h ago" },
                      { name: "Arjun Patel", company: "CloudScale", unread: false, time: "1d ago" },
                      { name: "Ananya Singh", company: "GrowthLabs", unread: false, time: "2d ago" },
                    ].map((contact, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 p-4 hover:bg-muted/50 cursor-pointer ${
                          index === 0 ? "bg-muted/50" : ""
                        }`}
                      >
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium truncate">{contact.name}</p>
                            <span className="text-xs text-muted-foreground">{contact.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{contact.company}</p>
                        </div>
                        {contact.unread && <Badge className="ml-auto">New</Badge>}
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="unread" className="m-0">
                  <div className="h-[calc(100vh-280px)] overflow-auto">
                    {[{ name: "Priya Sharma", company: "TechCorp Inc.", unread: true, time: "2m ago" }].map(
                      (contact, index) => (
                        <div
                          key={index}
                          className={`flex items-center gap-3 p-4 hover:bg-muted/50 cursor-pointer ${
                            index === 0 ? "bg-muted/50" : ""
                          }`}
                        >
                          <Avatar>
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="font-medium truncate">{contact.name}</p>
                              <span className="text-xs text-muted-foreground">{contact.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">{contact.company}</p>
                          </div>
                          {contact.unread && <Badge className="ml-auto">New</Badge>}
                        </div>
                      ),
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="archived" className="m-0">
                  <div className="flex h-[calc(100vh-280px)] items-center justify-center">
                    <p className="text-sm text-muted-foreground">No archived messages</p>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>

            <Card className="h-[calc(100vh-180px)] flex flex-col">
              <CardHeader className="p-4 border-b">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>PS</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Priya Sharma</CardTitle>
                    <CardDescription>TechCorp Inc. • Recruiter</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-0 overflow-auto">
                <div className="flex flex-col gap-4 p-4">
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>PS</AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">
                        Hi Rahul, I came across your profile and I'm impressed with your experience. We have an opening
                        for a Senior Frontend Developer role at TechCorp that might be a good fit for you. Would you be
                        interested in learning more?
                      </p>
                      <span className="text-xs text-muted-foreground mt-1 block">10:30 AM</span>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end">
                    <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">
                        Hello Priya, thank you for reaching out! I'd definitely be interested in learning more about the
                        role. Could you share some details about the responsibilities and requirements?
                      </p>
                      <span className="text-xs text-muted-foreground mt-1 block">10:45 AM</span>
                    </div>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>RS</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>PS</AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">
                        Great! The role involves leading our frontend development team, implementing new features, and
                        optimizing performance for our SaaS platform. We're looking for someone with strong experience
                        in React, TypeScript, and Next.js. The salary range is ₹18-25 LPA based on experience. Would you
                        be available for an initial call this week?
                      </p>
                      <span className="text-xs text-muted-foreground mt-1 block">11:02 AM</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="p-4 border-t mt-auto">
                <div className="flex gap-2">
                  <Input placeholder="Type your message..." className="flex-1" />
                  <Button size="icon">
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send message</span>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
