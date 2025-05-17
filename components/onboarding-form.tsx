"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, Plus, X, Search } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

// Sample data for autocomplete
const skillSuggestions = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "REST API",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Redux",
  "Vue.js",
  "Angular",
  "Python",
  "Django",
  "Flask",
  "Java",
  "Spring Boot",
  "C#",
  ".NET",
  "PHP",
  "Laravel",
  "Ruby",
  "Ruby on Rails",
  "Swift",
  "Kotlin",
  "Flutter",
  "React Native",
  "Firebase",
  "Git",
  "CI/CD",
  "Agile",
  "Scrum",
  "Product Management",
  "UI/UX Design",
  "Figma",
  "Adobe XD",
]

const locationSuggestions = [
  "Mumbai, Maharashtra",
  "Delhi, Delhi",
  "Bangalore, Karnataka",
  "Hyderabad, Telangana",
  "Chennai, Tamil Nadu",
  "Kolkata, West Bengal",
  "Pune, Maharashtra",
  "Ahmedabad, Gujarat",
  "Jaipur, Rajasthan",
  "Lucknow, Uttar Pradesh",
  "Noida, Uttar Pradesh",
  "Gurgaon, Haryana",
  "Chandigarh",
  "Indore, Madhya Pradesh",
  "Kochi, Kerala",
  "Coimbatore, Tamil Nadu",
  "Bhubaneswar, Odisha",
  "Guwahati, Assam",
  "Remote, India",
  "Remote, Global",
]

// Technology industry sub-categories
const techSubCategories = [
  { value: "software-development", label: "Software Development" },
  { value: "data-science", label: "Data Science & Analytics" },
  { value: "cloud-computing", label: "Cloud Computing" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "ai-ml", label: "AI & Machine Learning" },
  { value: "devops", label: "DevOps & Infrastructure" },
  { value: "mobile-development", label: "Mobile App Development" },
  { value: "web-development", label: "Web Development" },
  { value: "blockchain", label: "Blockchain & Cryptocurrency" },
  { value: "iot", label: "Internet of Things (IoT)" },
  { value: "ar-vr", label: "AR/VR/XR" },
  { value: "game-development", label: "Game Development" },
  { value: "product-management", label: "Product Management" },
  { value: "ui-ux", label: "UI/UX Design" },
  { value: "qa-testing", label: "QA & Testing" },
]

export function OnboardingForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [skills, setSkills] = useState<string[]>([])
  const [newSkill, setNewSkill] = useState("")
  const [openSkillPopover, setOpenSkillPopover] = useState(false)
  const [openLocationPopover, setOpenLocationPopover] = useState(false)
  const [location, setLocation] = useState("")
  const [techSubCategory, setTechSubCategory] = useState<string[]>([])
  const [salaryRange, setSalaryRange] = useState([1500000])

  const addSkill = (skill: string = newSkill) => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill])
      setNewSkill("")
      setOpenSkillPopover(false)
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  const toggleTechSubCategory = (value: string) => {
    if (techSubCategory.includes(value)) {
      setTechSubCategory(techSubCategory.filter((item) => item !== value))
    } else {
      setTechSubCategory([...techSubCategory, value])
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Profile completed!",
        description: "Your profile has been set up. We're finding job matches for you.",
      })
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Tell us about yourself so employers can get to know you better.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Popover open={openLocationPopover} onOpenChange={setOpenLocationPopover}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openLocationPopover}
                    className="justify-between w-full font-normal"
                  >
                    {location ? location : "Select location..."}
                    <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                  <Command>
                    <CommandInput placeholder="Search location..." />
                    <CommandEmpty>No location found.</CommandEmpty>
                    <CommandGroup>
                      <CommandList>
                        {locationSuggestions.map((loc) => (
                          <CommandItem
                            key={loc}
                            value={loc}
                            onSelect={(currentValue) => {
                              setLocation(currentValue)
                              setOpenLocationPopover(false)
                            }}
                          >
                            {loc}
                          </CommandItem>
                        ))}
                      </CommandList>
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="remote-preference">Remote Preference</Label>
              <Select defaultValue="hybrid">
                <SelectTrigger id="remote-preference">
                  <SelectValue placeholder="Select preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote Only</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                  <SelectItem value="onsite">On-site</SelectItem>
                  <SelectItem value="any">No Preference</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bio">Professional Summary</Label>
            <Textarea
              id="bio"
              placeholder="Write a short professional summary about yourself"
              className="min-h-[100px]"
              disabled={isLoading}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills & Experience</CardTitle>
          <CardDescription>Add your skills and experience level to help us find relevant job matches.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="experience-level">Experience Level</Label>
            <Select defaultValue="mid">
              <SelectTrigger id="experience-level">
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                <SelectItem value="senior">Senior Level (5-8 years)</SelectItem>
                <SelectItem value="lead">Lead / Manager (8+ years)</SelectItem>
                <SelectItem value="executive">Executive (10+ years)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label>Skills</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="gap-1">
                  {skill}
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 rounded-full p-0"
                    onClick={() => removeSkill(skill)}
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove {skill}</span>
                  </Button>
                </Badge>
              ))}
            </div>
            <Popover open={openSkillPopover} onOpenChange={setOpenSkillPopover}>
              <PopoverTrigger asChild>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a skill (e.g., JavaScript, Project Management)"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        addSkill()
                      }
                    }}
                    onClick={() => setOpenSkillPopover(true)}
                    disabled={isLoading}
                  />
                  <Button type="button" size="icon" onClick={() => addSkill()} disabled={!newSkill || isLoading}>
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Add skill</span>
                  </Button>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0" align="start">
                <Command>
                  <CommandInput placeholder="Search skills..." value={newSkill} onValueChange={setNewSkill} />
                  <CommandList>
                    <CommandEmpty>No skills found. Type to add a custom skill.</CommandEmpty>
                    <CommandGroup heading="Popular Skills">
                      {skillSuggestions
                        .filter(
                          (skill) => skill.toLowerCase().includes(newSkill.toLowerCase()) && !skills.includes(skill),
                        )
                        .slice(0, 10)
                        .map((skill) => (
                          <CommandItem
                            key={skill}
                            value={skill}
                            onSelect={(value) => {
                              addSkill(value)
                            }}
                          >
                            {skill}
                          </CommandItem>
                        ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            <div className="mt-4">
              <Label className="mb-2 block">Trending Skills in Tech</Label>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Next.js", "AI/ML", "Cloud Computing"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={cn(
                      "cursor-pointer hover:bg-primary/10",
                      skills.includes(skill) && "bg-primary/10 text-primary",
                    )}
                    onClick={() => {
                      if (!skills.includes(skill)) {
                        setSkills([...skills, skill])
                      }
                    }}
                  >
                    {skill} 🔥
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Job Preferences</CardTitle>
          <CardDescription>Tell us what you're looking for in your next role.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="job-type">Job Type</Label>
              <Select defaultValue="full-time">
                <SelectTrigger id="job-type">
                  <SelectValue placeholder="Select job type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="freelance">Freelance</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="industry">Preferred Industry</Label>
              <Select defaultValue="technology">
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label>Technology Sub-Categories</Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {techSubCategory.map((category) => {
                const label = techSubCategories.find((c) => c.value === category)?.label || category
                return (
                  <Badge key={category} variant="secondary" className="gap-1">
                    {label}
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 rounded-full p-0"
                      onClick={() => toggleTechSubCategory(category)}
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove {label}</span>
                    </Button>
                  </Badge>
                )
              })}
            </div>
            <Select onValueChange={(value) => toggleTechSubCategory(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select tech categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Technology Categories</SelectLabel>
                  {techSubCategories.map((category) => (
                    <SelectItem
                      key={category.value}
                      value={category.value}
                      disabled={techSubCategory.includes(category.value)}
                    >
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label>Salary Expectations (Annual in ₹)</Label>
            <div className="pt-4 pb-2">
              <Slider
                defaultValue={[1500000]}
                min={300000}
                max={10000000}
                step={100000}
                value={salaryRange}
                onValueChange={setSalaryRange}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>₹3 LPA</span>
              <span>₹{(salaryRange[0] / 100000).toFixed(1)} LPA</span>
              <span>₹100 LPA+</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled={isLoading} type="submit" className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving profile...
              </>
            ) : (
              "Complete Profile"
            )}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
