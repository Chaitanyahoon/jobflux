"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { X } from "lucide-react"

export function JobsFilter() {
  const [salaryRange, setSalaryRange] = useState([1500000])
  const [remoteOnly, setRemoteOnly] = useState(false)
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([])
  const [selectedExperience, setSelectedExperience] = useState<string[]>([])
  const [selectedTechCategories, setSelectedTechCategories] = useState<string[]>([])

  const locations = [
    "Bangalore, Karnataka",
    "Mumbai, Maharashtra",
    "Delhi, NCR",
    "Hyderabad, Telangana",
    "Chennai, Tamil Nadu",
    "Pune, Maharashtra",
    "Kolkata, West Bengal",
    "Remote, India",
  ]

  const jobTypes = ["Full-time", "Part-time", "Contract", "Freelance", "Internship"]

  const experienceLevels = [
    "Entry Level (0-2 years)",
    "Mid Level (2-5 years)",
    "Senior Level (5-8 years)",
    "Manager (8+ years)",
    "Director (10+ years)",
  ]

  const techCategories = [
    "Software Development",
    "Data Science & Analytics",
    "Cloud Computing",
    "Cybersecurity",
    "AI & Machine Learning",
    "DevOps & Infrastructure",
    "Mobile App Development",
    "Web Development",
    "Blockchain & Cryptocurrency",
    "Internet of Things (IoT)",
    "AR/VR/XR",
    "Game Development",
    "Product Management",
    "UI/UX Design",
    "QA & Testing",
  ]

  const toggleLocation = (location: string) => {
    setSelectedLocations(
      selectedLocations.includes(location)
        ? selectedLocations.filter((l) => l !== location)
        : [...selectedLocations, location],
    )
  }

  const toggleJobType = (type: string) => {
    setSelectedJobTypes(
      selectedJobTypes.includes(type) ? selectedJobTypes.filter((t) => t !== type) : [...selectedJobTypes, type],
    )
  }

  const toggleExperience = (level: string) => {
    setSelectedExperience(
      selectedExperience.includes(level)
        ? selectedExperience.filter((e) => e !== level)
        : [...selectedExperience, level],
    )
  }

  const toggleTechCategory = (category: string) => {
    setSelectedTechCategories(
      selectedTechCategories.includes(category)
        ? selectedTechCategories.filter((c) => c !== category)
        : [...selectedTechCategories, category],
    )
  }

  const clearAllFilters = () => {
    setSalaryRange([1500000])
    setRemoteOnly(false)
    setSelectedLocations([])
    setSelectedJobTypes([])
    setSelectedExperience([])
    setSelectedTechCategories([])
  }

  const hasActiveFilters = () => {
    return (
      salaryRange[0] !== 1500000 ||
      remoteOnly ||
      selectedLocations.length > 0 ||
      selectedJobTypes.length > 0 ||
      selectedExperience.length > 0 ||
      selectedTechCategories.length > 0
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        {hasActiveFilters() && (
          <Button variant="ghost" size="sm" onClick={clearAllFilters} className="h-7 text-xs">
            Clear All
          </Button>
        )}
      </div>

      {hasActiveFilters() && (
        <div className="flex flex-wrap gap-1.5">
          {remoteOnly && (
            <Badge variant="secondary" className="gap-1">
              Remote Only
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setRemoteOnly(false)}
                className="h-3.5 w-3.5 rounded-full p-0"
              >
                <X className="h-2.5 w-2.5" />
                <span className="sr-only">Remove remote filter</span>
              </Button>
            </Badge>
          )}

          {salaryRange[0] !== 1500000 && (
            <Badge variant="secondary" className="gap-1">
              ₹{(salaryRange[0] / 100000).toFixed(1)} LPA+
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSalaryRange([1500000])}
                className="h-3.5 w-3.5 rounded-full p-0"
              >
                <X className="h-2.5 w-2.5" />
                <span className="sr-only">Remove salary filter</span>
              </Button>
            </Badge>
          )}

          {selectedLocations.map((location) => (
            <Badge key={location} variant="secondary" className="gap-1">
              {location}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleLocation(location)}
                className="h-3.5 w-3.5 rounded-full p-0"
              >
                <X className="h-2.5 w-2.5" />
                <span className="sr-only">Remove {location} filter</span>
              </Button>
            </Badge>
          ))}

          {selectedJobTypes.map((type) => (
            <Badge key={type} variant="secondary" className="gap-1">
              {type}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleJobType(type)}
                className="h-3.5 w-3.5 rounded-full p-0"
              >
                <X className="h-2.5 w-2.5" />
                <span className="sr-only">Remove {type} filter</span>
              </Button>
            </Badge>
          ))}

          {selectedExperience.map((level) => (
            <Badge key={level} variant="secondary" className="gap-1">
              {level}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleExperience(level)}
                className="h-3.5 w-3.5 rounded-full p-0"
              >
                <X className="h-2.5 w-2.5" />
                <span className="sr-only">Remove {level} filter</span>
              </Button>
            </Badge>
          ))}

          {selectedTechCategories.map((category) => (
            <Badge key={category} variant="secondary" className="gap-1">
              {category}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleTechCategory(category)}
                className="h-3.5 w-3.5 rounded-full p-0"
              >
                <X className="h-2.5 w-2.5" />
                <span className="sr-only">Remove {category} filter</span>
              </Button>
            </Badge>
          ))}
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch id="remote-only" checked={remoteOnly} onCheckedChange={setRemoteOnly} />
          <Label htmlFor="remote-only">Remote Only</Label>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Minimum Salary (₹)</Label>
            <span className="text-sm font-medium">₹{(salaryRange[0] / 100000).toFixed(1)} LPA</span>
          </div>
          <Slider value={salaryRange} min={300000} max={10000000} step={100000} onValueChange={setSalaryRange} />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>₹3 LPA</span>
            <span>₹100 LPA+</span>
          </div>
        </div>
      </div>

      <Accordion
        type="multiple"
        defaultValue={["tech-category", "location", "job-type", "experience"]}
        className="w-full"
      >
        <AccordionItem value="tech-category">
          <AccordionTrigger className="text-sm font-medium">Technology Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {techCategories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`tech-category-${category}`}
                    checked={selectedTechCategories.includes(category)}
                    onCheckedChange={() => toggleTechCategory(category)}
                  />
                  <Label htmlFor={`tech-category-${category}`} className="text-sm font-normal">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location">
          <AccordionTrigger className="text-sm font-medium">Location</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {locations.map((location) => (
                <div key={location} className="flex items-center space-x-2">
                  <Checkbox
                    id={`location-${location}`}
                    checked={selectedLocations.includes(location)}
                    onCheckedChange={() => toggleLocation(location)}
                  />
                  <Label htmlFor={`location-${location}`} className="text-sm font-normal">
                    {location}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="job-type">
          <AccordionTrigger className="text-sm font-medium">Job Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {jobTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={`job-type-${type}`}
                    checked={selectedJobTypes.includes(type)}
                    onCheckedChange={() => toggleJobType(type)}
                  />
                  <Label htmlFor={`job-type-${type}`} className="text-sm font-normal">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="experience">
          <AccordionTrigger className="text-sm font-medium">Experience Level</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {experienceLevels.map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <Checkbox
                    id={`experience-${level}`}
                    checked={selectedExperience.includes(level)}
                    onCheckedChange={() => toggleExperience(level)}
                  />
                  <Label htmlFor={`experience-${level}`} className="text-sm font-normal">
                    {level}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full">Apply Filters</Button>
    </div>
  )
}
