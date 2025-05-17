"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Calendar, Clock, DollarSign, ExternalLink, Heart, MapPin, Share2, Star, Users } from "lucide-react"
import {
  TechCorpLogo,
  InnovateSoftLogo,
  DesignHubLogo,
  ReactIcon,
  TypeScriptIcon,
  NextJSIcon,
  NodeJSIcon,
  FigmaIcon,
} from "@/components/ui/icons"

// Mock job data
const jobData = {
  id: "1",
  title: "Senior Frontend Developer",
  company: "TechCorp Inc.",
  logo: "TC",
  companyDescription:
    "TechCorp is a leading technology company specializing in innovative software solutions for businesses of all sizes. With a focus on cutting-edge technologies and user-centric design, we help our clients transform their digital presence and operational efficiency.",
  location: "Bangalore, Karnataka",
  remote: true,
  salary: "₹18,00,000 - ₹25,00,000",
  posted: "2 days ago",
  match: 95,
  skills: ["React", "TypeScript", "Next.js", "CSS", "HTML", "Redux"],
  description:
    "We are looking for a Senior Frontend Developer to join our growing team. The ideal candidate will have strong experience with modern JavaScript frameworks, particularly React, and a passion for building responsive, user-friendly web applications.",
  responsibilities: [
    "Develop and maintain responsive web applications using React and Next.js",
    "Collaborate with designers to implement UI/UX designs",
    "Write clean, maintainable, and efficient code",
    "Optimize applications for maximum speed and scalability",
    "Participate in code reviews and mentor junior developers",
  ],
  requirements: [
    "5+ years of experience in frontend development",
    "Strong proficiency in React, TypeScript, and Next.js",
    "Experience with state management solutions (Redux, Context API)",
    "Knowledge of modern CSS techniques and responsive design",
    "Understanding of web performance optimization",
    "Excellent problem-solving and communication skills",
  ],
  benefits: [
    "Competitive salary and equity options",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements",
    "Professional development budget",
    "Generous PTO policy",
    "401(k) matching",
  ],
  source: "LinkedIn",
  saved: false,
  applyUrl: "https://linkedin.com/jobs/view/senior-frontend-developer",
  companyWebsite: "https://techcorp-example.com",
  companySize: "100-500 employees",
  founded: "2015",
  companyImages: [
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
  ],
}

export function JobDetails({ id }: { id: string }) {
  const [job, setJob] = useState(jobData)

  const toggleSaved = () => {
    setJob({ ...job, saved: !job.saved })
  }

  // Function to get the appropriate company logo
  const getCompanyLogo = (company: string) => {
    switch (company) {
      case "TechCorp Inc.":
        return <TechCorpLogo className="h-16 w-16" />
      case "InnovateSoft":
        return <InnovateSoftLogo className="h-16 w-16" />
      case "DesignHub":
        return <DesignHubLogo className="h-16 w-16" />
      default:
        return <TechCorpLogo className="h-16 w-16" />
    }
  }

  // Function to get the appropriate skill icon
  const getSkillIcon = (skill: string) => {
    switch (skill) {
      case "React":
        return <ReactIcon className="h-4 w-4 mr-1" />
      case "TypeScript":
        return <TypeScriptIcon className="h-4 w-4 mr-1" />
      case "Next.js":
        return <NextJSIcon className="h-4 w-4 mr-1" />
      case "Node.js":
        return <NodeJSIcon className="h-4 w-4 mr-1" />
      case "Figma":
        return <FigmaIcon className="h-4 w-4 mr-1" />
      default:
        return null
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
      <div className="space-y-6">
        <Card className="card-neumorphic">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    {getCompanyLogo(job.company)}
                    <div>
                      <h1 className="text-2xl font-bold">{job.title}</h1>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="h-4 w-4" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{job.match}% Match</Badge>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Posted {job.posted}</span>
                  </div>
                  {job.remote && <Badge variant="outline">Remote</Badge>}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {job.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="flex items-center">
                    {getSkillIcon(skill)}
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full button-glow">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Apply Now
                  </Button>
                </a>
                <Button variant="outline" size="icon" onClick={toggleSaved}>
                  {job.saved ? <Heart className="h-5 w-5 fill-primary text-primary" /> : <Heart className="h-5 w-5" />}
                  <span className="sr-only">{job.saved ? "Unsave job" : "Save job"}</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Share job</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-neumorphic">
          <CardContent className="p-0">
            <Tabs defaultValue="description">
              <TabsList className="w-full rounded-none border-b bg-transparent p-0">
                <TabsTrigger
                  value="description"
                  className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="company"
                  className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                >
                  Company
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold">About the Role</h3>
                    <p className="mt-2 text-muted-foreground">{job.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Responsibilities</h3>
                    <ul className="mt-2 space-y-2">
                      {job.responsibilities.map((item, index) => (
                        <li key={index} className="flex gap-2 text-muted-foreground">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Requirements</h3>
                    <ul className="mt-2 space-y-2">
                      {job.requirements.map((item, index) => (
                        <li key={index} className="flex gap-2 text-muted-foreground">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Benefits</h3>
                    <ul className="mt-2 space-y-2">
                      {job.benefits.map((item, index) => (
                        <li key={index} className="flex gap-2 text-muted-foreground">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="company" className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold">About {job.company}</h3>
                    <p className="mt-2 text-muted-foreground">{job.companyDescription}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((index) => (
                      <div key={index} className="rounded-lg overflow-hidden border">
                        <div className="h-32 bg-primary/5 flex items-center justify-center">
                          <TechCorpLogo className="h-16 w-16 opacity-50" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm font-medium">Company Size</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{job.companySize}</p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm font-medium">Founded</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{job.founded}</p>
                    </div>
                  </div>

                  <a href={job.companyWebsite} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2 w-full">
                      <ExternalLink className="h-4 w-4" />
                      Visit Company Website
                    </Button>
                  </a>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="border-t bg-muted/50 px-6 py-3">
            <div className="flex items-center justify-between w-full">
              <div className="text-sm text-muted-foreground">
                <Star className="mr-1 inline-block h-3.5 w-3.5" />
                <span>Matched based on your profile • Via {job.source}</span>
              </div>
              <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
                <Button className="button-glow">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Apply Now
                </Button>
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="card-neumorphic">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Similar Jobs</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Frontend Developer",
                  company: "WebTech Solutions",
                  logo: <InnovateSoftLogo className="h-8 w-8" />,
                },
                {
                  title: "React Developer",
                  company: "Digital Innovations",
                  logo: <DesignHubLogo className="h-8 w-8" />,
                },
                { title: "UI Engineer", company: "UX Masters", logo: <TechCorpLogo className="h-8 w-8" /> },
              ].map((similarJob, i) => (
                <div key={i} className="flex flex-col space-y-2 pb-4 border-b last:border-0 last:pb-0">
                  <div className="flex items-center gap-2">
                    {similarJob.logo}
                    <h4 className="font-medium hover:underline cursor-pointer">{similarJob.title}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building className="h-3.5 w-3.5" />
                    <span>{similarJob.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{i === 0 ? "Remote" : i === 1 ? "Mumbai, Maharashtra" : "Bangalore, Karnataka"}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      <span>{i === 0 ? "₹12-18 LPA" : i === 1 ? "₹15-20 LPA" : "₹18-25 LPA"}</span>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <Badge variant="secondary" className="text-xs flex items-center">
                      {i === 0 ? (
                        <ReactIcon className="h-3 w-3 mr-1" />
                      ) : i === 1 ? (
                        <TypeScriptIcon className="h-3 w-3 mr-1" />
                      ) : (
                        <FigmaIcon className="h-3 w-3 mr-1" />
                      )}
                      {i === 0 ? "React" : i === 1 ? "TypeScript" : "UI/UX"}
                    </Badge>
                    <Badge variant="secondary" className="text-xs flex items-center">
                      {i === 0 ? (
                        <NodeJSIcon className="h-3 w-3 mr-1" />
                      ) : i === 1 ? (
                        <NextJSIcon className="h-3 w-3 mr-1" />
                      ) : (
                        <ReactIcon className="h-3 w-3 mr-1" />
                      )}
                      {i === 0 ? "Vue" : i === 1 ? "Next.js" : "Figma"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-3">
            <Button variant="outline" className="w-full">
              View More Similar Jobs
            </Button>
          </CardFooter>
        </Card>

        <Card className="card-neumorphic">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Job Insights</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Skills Match</span>
                <div className="flex items-center gap-1">
                  <span className="font-medium">{job.match}%</span>
                  <div className="h-2 w-16 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${job.match}%` }}></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Salary Range</span>
                <span className="font-medium">{job.salary}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Job Type</span>
                <span className="font-medium">Full-time</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Experience Level</span>
                <span className="font-medium">Senior</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-neumorphic">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Technology Trends</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Top Skills in This Field</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-primary/5 flex items-center gap-1">
                    <ReactIcon className="h-4 w-4" />
                    React 🔥
                  </Badge>
                  <Badge variant="outline" className="bg-primary/5 flex items-center gap-1">
                    <TypeScriptIcon className="h-4 w-4" />
                    TypeScript 🔥
                  </Badge>
                  <Badge variant="outline" className="bg-primary/5 flex items-center gap-1">
                    <NextJSIcon className="h-4 w-4" />
                    Next.js 🔥
                  </Badge>
                  <Badge variant="outline">Redux</Badge>
                  <Badge variant="outline">GraphQL</Badge>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Emerging Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-primary/5 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M2 12h2" />
                      <path d="M6 12h2" />
                      <path d="M10 12h2" />
                      <path d="M18 12h2" />
                      <path d="M14 12h2" />
                      <path d="M6 8v8" />
                      <path d="M14 8v8" />
                      <path d="M10 8v8" />
                      <path d="M18 8v8" />
                    </svg>
                    Web3 🔥
                  </Badge>
                  <Badge variant="outline">WebAssembly</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
