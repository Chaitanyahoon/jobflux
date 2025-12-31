"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Clock, DollarSign, ExternalLink, Heart, MapPin, Search, Star } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { CompanyLogo, ReactIcon, AIMLIcon, CloudComputingIcon, DataScienceIcon, PinIcon } from "@/components/ui/icons"

// Mock data for job listings
const jobListings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    logo: "TC",
    location: "Bangalore, Karnataka",
    remote: true,
    salary: "₹18,00,000 - ₹25,00,000",
    posted: "2 days ago",
    match: 95,
    skills: ["React", "TypeScript", "Next.js"],
    saved: false,
    source: "LinkedIn",
    applyUrl: "https://linkedin.com/jobs",
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "InnovateSoft",
    logo: "IS",
    location: "Mumbai, Maharashtra",
    remote: true,
    salary: "₹15,00,000 - ₹22,00,000",
    posted: "1 day ago",
    match: 92,
    skills: ["JavaScript", "Node.js", "MongoDB"],
    saved: true,
    source: "Glassdoor",
    applyUrl: "https://glassdoor.com/jobs",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "DesignHub",
    logo: "DH",
    location: "Hyderabad, Telangana",
    remote: false,
    salary: "₹12,00,000 - ₹18,00,000",
    posted: "3 days ago",
    match: 88,
    skills: ["Figma", "Adobe XD", "User Research"],
    saved: false,
    source: "Indeed",
    applyUrl: "https://indeed.com/jobs",
  },
  {
    id: 4,
    title: "Product Manager",
    company: "GrowthLabs",
    logo: "GL",
    location: "Gurgaon, Haryana",
    remote: true,
    salary: "₹20,00,000 - ₹30,00,000",
    posted: "5 days ago",
    match: 85,
    skills: ["Product Strategy", "Agile", "User Stories"],
    saved: false,
    source: "Naukri",
    applyUrl: "https://naukri.com/jobs",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudScale",
    logo: "CS",
    location: "Remote",
    remote: true,
    salary: "₹16,00,000 - ₹24,00,000",
    posted: "1 week ago",
    match: 82,
    skills: ["AWS", "Docker", "Kubernetes"],
    saved: false,
    source: "LinkedIn",
    applyUrl: "https://linkedin.com/jobs",
  },
]

interface JobRecommendationsProps {
  initialJobs?: any[]
}

export function JobRecommendations({ initialJobs }: JobRecommendationsProps) {
  const [jobs, setJobs] = useState(initialJobs ? initialJobs.map(job => ({
    id: job.id, // String vs Number mismatch handling needed if not fixed
    title: job.title,
    company: job.company,
    logo: "TC", // Mock
    location: job.location,
    remote: job.location.toLowerCase().includes("remote"),
    salary: job.salary || "Not specified",
    posted: new Date(job.postedAt).toLocaleDateString(),
    match: 85, // Mock
    skills: ["React", "TypeScript"], // Mock
    saved: false,
    source: "JobFlux",
    applyUrl: "#"
  })) : jobListings)
  const { toast } = useToast()

  const toggleSaved = (id: number) => {
    setJobs(
      jobs.map((job) => {
        if (job.id === id) {
          const newSavedState = !job.saved

          toast({
            title: newSavedState ? "Job saved" : "Job removed from saved",
            description: newSavedState
              ? `${job.title} at ${job.company} has been saved to your list.`
              : `${job.title} at ${job.company} has been removed from your saved jobs.`,
          })

          return { ...job, saved: newSavedState }
        }
        return job
      }),
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">Recommended Jobs</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
        </div>
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search jobs..." className="w-full pl-8 sm:w-[300px]" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge variant="outline" className="bg-primary/5 flex items-center gap-1">
          <ReactIcon className="h-4 w-4 text-primary" />
          Trending: React
        </Badge>
        <Badge variant="outline" className="bg-primary/5 flex items-center gap-1">
          <DataScienceIcon className="h-4 w-4 text-primary" />
          Trending: Data Science
        </Badge>
        <Badge variant="outline" className="bg-primary/5 flex items-center gap-1">
          <AIMLIcon className="h-4 w-4 text-primary" />
          Trending: AI/ML
        </Badge>
        <Badge variant="outline" className="bg-primary/5 flex items-center gap-1">
          <CloudComputingIcon className="h-4 w-4 text-primary" />
          Trending: Cloud Computing
        </Badge>
      </div>

      <Tabs defaultValue="best-matches">
        <TabsList>
          <TabsTrigger value="best-matches">Best Matches</TabsTrigger>
          <TabsTrigger value="recent">Most Recent</TabsTrigger>
          <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
        </TabsList>
        <TabsContent value="best-matches" className="space-y-4 mt-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onToggleSaved={toggleSaved} />
          ))}
          <div className="flex justify-center">
            <Button variant="outline">Load More Jobs</Button>
          </div>
        </TabsContent>
        <TabsContent value="recent" className="space-y-4 mt-4">
          {jobs
            .sort((a, b) => {
              // Sort by most recent (based on "posted" field)
              const aTime = a.posted.includes("day")
                ? Number.parseInt(a.posted.split(" ")[0])
                : Number.parseInt(a.posted.split(" ")[0]) * 7
              const bTime = b.posted.includes("day")
                ? Number.parseInt(b.posted.split(" ")[0])
                : Number.parseInt(b.posted.split(" ")[0]) * 7
              return aTime - bTime
            })
            .map((job) => (
              <JobCard key={job.id} job={job} onToggleSaved={toggleSaved} />
            ))}
          <div className="flex justify-center">
            <Button variant="outline">Load More Jobs</Button>
          </div>
        </TabsContent>
        <TabsContent value="saved" className="space-y-4 mt-4">
          {jobs.filter((job) => job.saved).length > 0 ? (
            <>
              {jobs
                .filter((job) => job.saved)
                .map((job) => (
                  <JobCard key={job.id} job={job} onToggleSaved={toggleSaved} />
                ))}
              <div className="flex justify-center">
                <Button variant="outline">Load More Jobs</Button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Heart className="h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-medium">No saved jobs yet</h3>
              <p className="mt-2 text-sm text-muted-foreground">Save jobs you're interested in to view them later</p>
              <PinIcon className="mt-4 h-24 w-24 text-muted-foreground/50" />
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function JobCard({
  job,
  onToggleSaved,
}: {
  job: (typeof jobListings)[0]
  onToggleSaved: (id: number) => void
}) {
  return (
    <Card className="overflow-hidden card-neumorphic">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="relative flex-1 p-6">
            <div className="absolute right-4 top-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => onToggleSaved(job.id)}
              >
                {job.saved ? <Heart className="h-5 w-5 fill-primary text-primary" /> : <Heart className="h-5 w-5" />}
                <span className="sr-only">{job.saved ? "Unsave job" : "Save job"}</span>
              </Button>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="mr-4">
                    <CompanyLogo initials={job.logo} size={48} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      <Link href={`/jobs/${job.id}`} className="hover:underline">
                        {job.title}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building className="h-3.5 w-3.5" />
                      <span>{job.company}</span>
                    </div>
                  </div>
                  <Badge className="ml-auto bg-primary/10 text-primary hover:bg-primary/20">{job.match}% Match</Badge>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-3.5 w-3.5" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{job.posted}</span>
                  </div>
                  {job.remote && <Badge variant="outline">Remote</Badge>}
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {job.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-muted/50 px-6 py-3">
        <div className="text-sm text-muted-foreground">
          <Star className="mr-1 inline-block h-3.5 w-3.5" />
          <span>Matched based on your profile • Via {job.source}</span>
        </div>
        <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
          <Button size="sm" className="button-glow">
            <ExternalLink className="mr-1 h-3.5 w-3.5" />
            Apply Now
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}
