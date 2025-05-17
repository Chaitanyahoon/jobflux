"use client"

import { useState } from "react"
import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, Briefcase, Building, CheckCircle2, Eye } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import {
  CompanyLogo,
  NotificationIcon,
  TechCorpLogo,
  InnovateSoftLogo,
  DesignHubLogo,
  CloudScaleLogo,
  InterviewIcon,
} from "@/components/ui/icons"

// Mock notification data
const allNotifications = [
  {
    id: 1,
    type: "job_match",
    title: "New job match: Senior Frontend Developer",
    description: "TechCorp Inc. is looking for a Senior Frontend Developer in Bangalore, Karnataka",
    time: "2 hours ago",
    isNew: true,
    companyLogo: "TC",
    companyName: "TechCorp Inc.",
  },
  {
    id: 2,
    type: "profile_view",
    title: "Your profile was viewed by InnovateSoft",
    description: "A recruiter from InnovateSoft viewed your profile",
    time: "6 hours ago",
    isNew: true,
    companyLogo: "IS",
    companyName: "InnovateSoft",
  },
  {
    id: 3,
    type: "interview",
    title: "Interview scheduled with TechCorp Inc.",
    description: "Your interview for the Senior Frontend Developer role has been scheduled for tomorrow at 10:00 AM",
    time: "Yesterday at 2:30 PM",
    isNew: true,
    companyLogo: "TC",
    companyName: "TechCorp Inc.",
  },
  {
    id: 4,
    type: "application",
    title: "Application received by InnovateSoft",
    description: "Your application for the Full Stack Engineer role has been received",
    time: "Yesterday at 11:45 AM",
    isNew: false,
    companyLogo: "IS",
    companyName: "InnovateSoft",
  },
  {
    id: 5,
    type: "company_follow",
    title: "New company followed your profile",
    description: "DesignHub is now following your profile",
    time: "3 days ago",
    isNew: false,
    companyLogo: "DH",
    companyName: "DesignHub",
  },
  {
    id: 6,
    type: "job_match",
    title: "New job match: UX/UI Designer",
    description: "DesignHub is looking for a UX/UI Designer in Hyderabad, Telangana",
    time: "4 days ago",
    isNew: false,
    companyLogo: "DH",
    companyName: "DesignHub",
  },
  {
    id: 7,
    type: "application",
    title: "Application viewed by CloudScale",
    description: "Your application for the DevOps Engineer role has been viewed",
    time: "5 days ago",
    isNew: false,
    companyLogo: "CS",
    companyName: "CloudScale",
  },
]

export default function NotificationsPage() {
  const { toast } = useToast()
  const [notifications, setNotifications] = useState(allNotifications)

  const unreadNotifications = notifications.filter((notification) => notification.isNew)
  const jobNotifications = notifications.filter((notification) =>
    ["job_match", "application", "interview"].includes(notification.type),
  )

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isNew: false,
      })),
    )

    toast({
      title: "All notifications marked as read",
      description: `${unreadNotifications.length} notifications have been marked as read.`,
    })
  }

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, isNew: false } : notification)),
    )

    toast({
      title: "Notification marked as read",
      description: "The notification has been marked as read.",
    })
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))

    toast({
      title: "Notification deleted",
      description: "The notification has been deleted.",
    })
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "job_match":
        return <Briefcase className="h-5 w-5 text-primary" />
      case "profile_view":
        return <Eye className="h-5 w-5 text-primary" />
      case "interview":
        return <InterviewIcon className="h-5 w-5 text-primary" />
      case "application":
        return <CheckCircle2 className="h-5 w-5 text-primary" />
      case "company_follow":
        return <Building className="h-5 w-5 text-primary" />
      default:
        return <Bell className="h-5 w-5 text-primary" />
    }
  }

  const getCompanyLogo = (logoCode: string) => {
    switch (logoCode) {
      case "TC":
        return <TechCorpLogo className="h-10 w-10" />
      case "IS":
        return <InnovateSoftLogo className="h-10 w-10" />
      case "DH":
        return <DesignHubLogo className="h-10 w-10" />
      case "CS":
        return <CloudScaleLogo className="h-10 w-10" />
      default:
        return <CompanyLogo initials={logoCode} size={40} />
    }
  }

  return (
    <AppLayout>
      <div className="py-6">
        <div className="container max-w-4xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
              <NotificationIcon className="h-6 w-6 text-primary" />
            </div>
            <Button variant="outline" size="sm" onClick={markAllAsRead} disabled={unreadNotifications.length === 0}>
              Mark all as read
            </Button>
          </div>

          <Tabs defaultValue="all" className="mt-6">
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="all" className="flex-1 sm:flex-none">
                All
                <Badge className="ml-2 bg-primary/20 text-primary" variant="secondary">
                  {notifications.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="unread" className="flex-1 sm:flex-none">
                Unread
                <Badge className="ml-2 bg-primary/20 text-primary" variant="secondary">
                  {unreadNotifications.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="jobs" className="flex-1 sm:flex-none">
                Jobs
                <Badge className="ml-2 bg-primary/20 text-primary" variant="secondary">
                  {jobNotifications.length}
                </Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-4 space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">All Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start gap-4 p-3 rounded-lg ${notification.isNew ? "bg-primary/5 border border-primary/20" : "border"}`}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden">
                          {getCompanyLogo(notification.companyLogo)}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{notification.title}</p>
                            {notification.isNew && <Badge>New</Badge>}
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.description}</p>
                          <p className="text-xs text-muted-foreground">{notification.time}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          {notification.isNew && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 px-2"
                              onClick={() => markAsRead(notification.id)}
                            >
                              Mark as read
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2 text-destructive hover:text-destructive"
                            onClick={() => deleteNotification(notification.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <Bell className="h-12 w-12 text-muted-foreground/50" />
                      <h3 className="mt-4 text-lg font-medium">No notifications</h3>
                      <p className="mt-2 text-sm text-muted-foreground">You don't have any notifications yet.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="unread" className="mt-4 space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Unread Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {unreadNotifications.length > 0 ? (
                    unreadNotifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="flex items-start gap-4 p-3 rounded-lg bg-primary/5 border border-primary/20"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden">
                          {getCompanyLogo(notification.companyLogo)}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{notification.title}</p>
                            <Badge>New</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.description}</p>
                          <p className="text-xs text-muted-foreground">{notification.time}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2"
                            onClick={() => markAsRead(notification.id)}
                          >
                            Mark as read
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2 text-destructive hover:text-destructive"
                            onClick={() => deleteNotification(notification.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <CheckCircle2 className="h-12 w-12 text-muted-foreground/50" />
                      <h3 className="mt-4 text-lg font-medium">All caught up!</h3>
                      <p className="mt-2 text-sm text-muted-foreground">You have no unread notifications.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="jobs" className="mt-4 space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Job Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {jobNotifications.length > 0 ? (
                    jobNotifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start gap-4 p-3 rounded-lg ${notification.isNew ? "bg-primary/5 border border-primary/20" : "border"}`}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden">
                          {getCompanyLogo(notification.companyLogo)}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{notification.title}</p>
                            {notification.isNew && <Badge>New</Badge>}
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.description}</p>
                          <p className="text-xs text-muted-foreground">{notification.time}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          {notification.isNew && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 px-2"
                              onClick={() => markAsRead(notification.id)}
                            >
                              Mark as read
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2 text-destructive hover:text-destructive"
                            onClick={() => deleteNotification(notification.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <Briefcase className="h-12 w-12 text-muted-foreground/50" />
                      <h3 className="mt-4 text-lg font-medium">No job notifications</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        You don't have any job-related notifications yet.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AppLayout>
  )
}
