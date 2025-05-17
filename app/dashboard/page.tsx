import { AppLayout } from "@/components/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Bell, CheckCircle2, Clock, FileText, MapPin } from "lucide-react"
import Link from "next/link"
import {
  DashboardIcon,
  ReactIcon,
  TypeScriptIcon,
  NextJSIcon,
  AIMLIcon,
  CloudComputingIcon,
  TechCorpLogo,
  InnovateSoftLogo,
  DesignHubLogo,
  GrowthLabsLogo,
} from "@/components/ui/icons"

// Update the dashboard page to use the new icons
export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="py-6">
        <div className="container grid gap-6 md:grid-cols-[1fr_300px]">
          <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <DashboardIcon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex items-center gap-2">
                <Link href="/notifications">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Bell className="h-3.5 w-3.5" />
                    <span>Notifications</span>
                    <Badge className="ml-1 rounded-full px-1">3</Badge>
                  </Button>
                </Link>
                <Link href="/profile">
                  <Button size="sm" className="h-8 gap-1">
                    <FileText className="h-3.5 w-3.5" />
                    <span>Update Resume</span>
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="card-neumorphic">
              <CardHeader className="pb-3">
                <CardTitle>Profile Completion</CardTitle>
                <CardDescription>Complete your profile to increase your chances of getting hired.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">83% Complete</span>
                      <Badge variant="outline" className="text-xs">
                        5 of 6 sections
                      </Badge>
                    </div>
                    <Link href="/profile">
                      <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                        Complete Profile
                      </Button>
                    </Link>
                  </div>
                  <Progress value={83} className="h-2" />
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium">Personal Info</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium">Skills</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium">Experience</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium">Education</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium">Job Preferences</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                    </div>
                    <Link href="/profile" className="block">
                      <div className="flex items-start gap-2 p-2 rounded-md hover:bg-muted/50 transition-colors cursor-pointer">
                        <Clock className="mt-0.5 h-4 w-4 text-amber-500" />
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium">Resume</p>
                          <p className="text-xs text-muted-foreground">Upload your resume</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Job Matches</h2>
                <Link href="/jobs">
                  <Button variant="link" size="sm" className="h-auto p-0">
                    View All
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    id: 1,
                    title: "Senior Frontend Developer",
                    company: "TechCorp Inc.",
                    logo: <TechCorpLogo className="h-12 w-12" />,
                    location: "Bangalore, Karnataka",
                    match: 95,
                    skills: ["React", "TypeScript"],
                  },
                  {
                    id: 2,
                    title: "Full Stack Engineer",
                    company: "InnovateSoft",
                    logo: <InnovateSoftLogo className="h-12 w-12" />,
                    location: "Mumbai, Maharashtra",
                    match: 92,
                    skills: ["Node.js", "MongoDB"],
                  },
                  {
                    id: 3,
                    title: "UX/UI Designer",
                    company: "DesignHub",
                    logo: <DesignHubLogo className="h-12 w-12" />,
                    location: "Hyderabad, Telangana",
                    match: 88,
                    skills: ["Figma", "UI/UX"],
                  },
                  {
                    id: 4,
                    title: "Product Manager",
                    company: "GrowthLabs",
                    logo: <GrowthLabsLogo className="h-12 w-12" />,
                    location: "Remote",
                    match: 85,
                    skills: ["Product", "Agile"],
                  },
                ].map((job) => (
                  <Card key={job.id} className="card-neumorphic">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        {job.logo}
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium">{job.title}</h3>
                              <p className="text-sm text-muted-foreground">{job.company}</p>
                            </div>
                            <Badge className="bg-primary/10 text-primary">{job.match}% Match</Badge>
                          </div>
                          <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {job.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className="mt-3">
                            <a
                              href={`https://${job.id === 1 || job.id === 4 ? "linkedin" : job.id === 2 ? "glassdoor" : "indeed"}.com/jobs`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button size="sm" className="w-full button-glow">
                                Apply Now
                              </Button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="card-neumorphic">
              <CardHeader className="pb-3">
                <CardTitle>Job Search Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Jobs Applied</span>
                    <span className="font-medium">5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Interviews</span>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Saved Jobs</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Profile Views</span>
                    <span className="font-medium">32</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-neumorphic">
              <CardHeader className="pb-3">
                <CardTitle>Upcoming Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-3 bg-primary/5 border-primary/20">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <TechCorpLogo className="h-6 w-6" />
                          <h3 className="font-medium">TechCorp Inc.</h3>
                        </div>
                        <Badge>Tomorrow</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Senior Frontend Developer</p>
                      <p className="text-xs text-muted-foreground">10:00 AM - 11:00 AM</p>
                      <div className="flex gap-2 pt-2">
                        <a href="https://meet.google.com" target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button size="sm" className="h-7 text-xs w-full button-glow">
                            Join Call
                          </Button>
                        </a>
                        <Button variant="outline" size="sm" className="h-7 text-xs">
                          Reschedule
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <InnovateSoftLogo className="h-6 w-6" />
                          <h3 className="font-medium">InnovateSoft</h3>
                        </div>
                        <Badge variant="outline">Next Week</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Full Stack Engineer</p>
                      <p className="text-xs text-muted-foreground">Tuesday, 2:00 PM - 3:00 PM</p>
                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm" className="h-7 text-xs w-full">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-neumorphic">
              <CardHeader className="pb-3">
                <CardTitle>Trending Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <ReactIcon className="h-4 w-4 text-primary" />
                        <span>React</span>
                      </div>
                      <span className="font-medium text-accent">+24%</span>
                    </div>
                    <Progress value={85} className="h-1.5" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <TypeScriptIcon className="h-4 w-4 text-primary" />
                        <span>TypeScript</span>
                      </div>
                      <span className="font-medium text-accent">+18%</span>
                    </div>
                    <Progress value={75} className="h-1.5" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <NextJSIcon className="h-4 w-4 text-primary" />
                        <span>Next.js</span>
                      </div>
                      <span className="font-medium text-accent">+32%</span>
                    </div>
                    <Progress value={90} className="h-1.5" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <AIMLIcon className="h-4 w-4 text-primary" />
                        <span>AI/ML</span>
                      </div>
                      <span className="font-medium text-accent">+45%</span>
                    </div>
                    <Progress value={95} className="h-1.5" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <CloudComputingIcon className="h-4 w-4 text-primary" />
                        <span>Cloud Computing</span>
                      </div>
                      <span className="font-medium text-accent">+15%</span>
                    </div>
                    <Progress value={65} className="h-1.5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
