"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Briefcase,
  Edit,
  FileText,
  GraduationCap,
  X,
  Upload,
  Download,
  PlusCircle,
  Languages,
  Award,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"

// Mock user profile data
const userProfile = {
  name: "",
  title: "",
  location: "",
  about: "",
  experience: [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp India",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      startDate: "Jan 2021",
      endDate: "Present",
      description:
        "Leading the frontend development team, implementing new features, and optimizing performance for a SaaS platform with over 100,000 users.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "WebSolutions",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      startDate: "Jun 2018",
      endDate: "Dec 2020",
      description:
        "Developed responsive web applications using React and Redux. Collaborated with designers and backend developers to implement new features.",
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "Digital Creations",
      location: "Pune, Maharashtra",
      type: "Full-time",
      startDate: "Aug 2016",
      endDate: "May 2018",
      description: "Built and maintained websites for clients using HTML, CSS, and JavaScript.",
    },
  ],
  education: [
    {
      id: 1,
      degree: "B.Tech in Computer Science",
      institution: "Indian Institute of Technology",
      location: "Mumbai, Maharashtra",
      startDate: "2012",
      endDate: "2016",
    },
  ],
  skills: [
    "React",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Redux",
    "GraphQL",
    "Node.js",
    "Git",
    "Responsive Design",
  ],
  languages: [
    { name: "English", proficiency: "Professional" },
    { name: "Hindi", proficiency: "Native" },
    { name: "Kannada", proficiency: "Basic" },
  ],
  certifications: [
    {
      id: 1,
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2022",
    },
    {
      id: 2,
      name: "React Advanced Concepts",
      issuer: "Frontend Masters",
      date: "2021",
    },
  ],
  projects: [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform with React, Node.js, and MongoDB.",
      url: "https://github.com/username/ecommerce-platform",
    },
    {
      id: 2,
      name: "Task Management App",
      description: "Developed a task management application with real-time updates using React and Firebase.",
      url: "https://github.com/username/task-manager",
    },
  ],
  jobPreferences: {
    title: "Senior Frontend Developer",
    types: ["Full-time", "Remote"],
    locations: ["Bangalore", "Remote"],
    industries: ["Technology", "E-commerce", "Finance"],
    salary: "₹20-30 LPA",
  },
  resume: null,
}

export function ProfileView() {
  // User profile state
  const [profile, setProfile] = useState({
    name: "Chaitanya",
    title: "Senior Frontend Developer",
    location: "San Francisco, CA",
    about:
      "Passionate frontend developer with 2+ years of experience in building responsive web applications using React, Next.js, and TypeScript. Strong focus on user experience and performance optimization.",
    profileImage: "/placeholder.svg?height=100&width=100",
    bannerImage: "/placeholder.svg?height=300&width=1000",
    resume: null,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"],
    experience: [
      {
        id: 1,
        company: "Tech Solutions Inc.",
        position: " Frontend Developer",
        duration: "202 - Present",
        description:
          "Leading frontend development for enterprise applications. Implemented new features that increased user engagement by 35%.",
      },
      {
        id: 2,
        company: "Web Innovators",
        position: " Jr Frontend Developer",
        duration: "2023 - 2024",
        description:
          "Developed responsive web applications using React and Redux. Collaborated with UX designers to implement user-friendly interfaces.",
      },
    ],
    education: [
      {
        id: 1,
        institution: "Gujarat Technical University",
        degree: "Bachelor of Science in Iformation Technology",
        duration: "2021 - 2025",
        description: "Specialized in Human-Computer Interaction and Web Technologies.",
      },
    
    ],
    languages: [
      { id: 1, language: "English", proficiency: "Proffesional" },
      { id: 2, language: "Marathi", proficiency: "Native" },
      { id: 3, language: "Hindi", proficiency: "Native" },
    ],
    certifications: [
      {
        id: 1,
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        date: "2023",
        description: "Certification for developing applications on AWS.",
      },
      {
        id: 2,
        name: "Professional React Developer",
        issuer: "React Certification Board",
        date: "2024",
        description: "Advanced certification for React development practices.",
      },
    ],
  })

  const [activeTab, setActiveTab] = useState("overview")
  const [isEditing, setIsEditing] = useState<string | null>(null)
  const [editedProfile, setEditedProfile] = useState(userProfile)
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [bannerImage, setBannerImage] = useState<string | null>(null)
  const [newSkill, setNewSkill] = useState("")
  const [editingExperience, setEditingExperience] = useState<any>(null)
  const [editingEducation, setEditingEducation] = useState<any>(null)
  const [editingCertification, setEditingCertification] = useState<any>(null)
  const [editingLanguage, setEditingLanguage] = useState<any>(null)
  const [editingProject, setEditingProject] = useState<any>(null)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [resumeFileName, setResumeFileName] = useState<string | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const profileInputRef = useRef<HTMLInputElement>(null)
  const bannerInputRef = useRef<HTMLInputElement>(null)
  const resumeInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  // Add a new function to handle profile completion calculation
  // Add this function after the useState declarations:

  const calculateProfileCompletion = () => {
    let completedSections = 0
    const totalSections = 6 // Personal info, skills, experience, education, job preferences, resume

    // Check if personal info is complete
    if (profile.name && profile.title && profile.location) {
      completedSections++
    }

    // Check if skills are added
    if (profile.skills.length > 0) {
      completedSections++
    }

    // Check if experience is added
    if (profile.experience.length > 0) {
      completedSections++
    }

    // Check if education is added
    if (profile.education.length > 0) {
      completedSections++
    }

    // Check if job preferences are set (simplified check)
    if (profile.languages.length > 0 || profile.certifications.length > 0) {
      completedSections++
    }

    // Check if resume is uploaded
    if (resumeFileName) {
      completedSections++
    }

    const percentage = Math.round((completedSections / totalSections) * 100)
    return { percentage, completedSections, totalSections }
  }

  // Edit states
  const [isEditingAbout, setIsEditingAbout] = useState(false)
  const [isEditingSkills, setIsEditingSkills] = useState(false)
  const [editedAbout, setEditedAbout] = useState(profile.about)
  const [editedName, setEditedName] = useState(profile.name)
  const [editedTitle, setEditedTitle] = useState(profile.title)
  const [editedLocation, setEditedLocation] = useState(profile.location)
  const [isEditingHeader, setIsEditingHeader] = useState(false)

  // Experience editing
  const [isAddingExperience, setIsAddingExperience] = useState(false)
  const [isEditingExperience, setIsEditingExperience] = useState<number | null>(null)
  const [newExperience, setNewExperience] = useState({
    company: "",
    position: "",
    duration: "",
    description: "",
  })

  // Education editing
  const [isAddingEducation, setIsAddingEducation] = useState(false)
  const [isEditingEducation, setIsEditingEducation] = useState<number | null>(null)
  const [newEducation, setNewEducation] = useState({
    institution: "",
    degree: "",
    duration: "",
    description: "",
  })

  // Languages editing
  const [isAddingLanguage, setIsAddingLanguage] = useState(false)
  const [isEditingLanguage, setIsEditingLanguage] = useState<number | null>(null)
  const [newLanguage, setNewLanguage] = useState({
    language: "",
    proficiency: "",
  })

  // Certifications editing
  const [isAddingCertification, setIsAddingCertification] = useState(false)
  const [isEditingCertification, setIsEditingCertification] = useState<number | null>(null)
  const [newCertification, setNewCertification] = useState({
    name: "",
    issuer: "",
    date: "",
    description: "",
  })

  // Image editing
  const [isEditingProfileImage, setIsEditingProfileImage] = useState(false)
  const [isEditingBannerImage, setIsEditingBannerImage] = useState(false)
  const [tempProfileImage, setTempProfileImage] = useState(profile.profileImage)
  const [tempBannerImage, setTempBannerImage] = useState(profile.bannerImage)

  // Resume handling
  const [isEditingResume, setIsEditingResume] = useState(false)

  // Load profile image from localStorage if available
  useEffect(() => {
    const savedProfileImage = localStorage.getItem("profileImage")
    if (savedProfileImage) {
      setProfileImage(savedProfileImage)
    }

    const savedBannerImage = localStorage.getItem("bannerImage")
    if (savedBannerImage) {
      setBannerImage(savedBannerImage)
    }

    const savedResumeFileName = localStorage.getItem("resumeFileName")
    if (savedResumeFileName) {
      setResumeFileName(savedResumeFileName)
    }
  }, [])

  // Add this useEffect to update localStorage when resume is removed
  useEffect(() => {
    if (!resumeFileName) {
      localStorage.removeItem("resumeFileName")
    }
  }, [resumeFileName])

  const handleSaveEdit = (section: string) => {
    setIsEditing(null)
    setEditingExperience(null)
    setEditingEducation(null)
    setEditingCertification(null)
    setEditingLanguage(null)
    setEditingProject(null)

    // Save profile image to localStorage
    if (profileImage) {
      localStorage.setItem("profileImage", profileImage)
    }

    // Save banner image to localStorage
    if (bannerImage) {
      localStorage.setItem("bannerImage", bannerImage)
    }

    // In a real app, you would save the changes to the backend here
    toast({
      title: "Profile updated",
      description: `Your ${section} has been updated successfully.`,
    })
  }

  const handleCancelEdit = () => {
    setIsEditing(null)
    setEditingExperience(null)
    setEditingEducation(null)
    setEditingCertification(null)
    setEditingLanguage(null)
    setEditingProject(null)
    setEditedProfile(userProfile)
  }

  // Handle profile image change
  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setTempProfileImage(e.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle banner image change
  const handleBannerImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setTempBannerImage(e.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle resume upload
  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setResumeFileName(file.name)
      setResumeFile(file)
      setIsUploading(true)

      // Simulate upload progress
      let progress = 0
      const interval = setInterval(() => {
        progress += 10
        setUploadProgress(progress)
        if (progress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsUploading(false)
            setProfile({
              ...profile,
              resume: file,
            })
            localStorage.setItem("resumeFileName", file.name)
            toast({
              title: "Resume uploaded",
              description: "Your resume has been uploaded successfully.",
            })
            setIsEditingResume(false)
          }, 500)
        }
      }, 200)
    }
  }

  // Save profile image
  const saveProfileImage = () => {
    setProfile({
      ...profile,
      profileImage: tempProfileImage,
    })
    setIsEditingProfileImage(false)
  }

  // Save banner image
  const saveBannerImage = () => {
    setProfile({
      ...profile,
      bannerImage: tempBannerImage,
    })
    setIsEditingBannerImage(false)
  }

  // Save header info
  const saveHeaderInfo = () => {
    setProfile({
      ...profile,
      name: editedName,
      title: editedTitle,
      location: editedLocation,
    })
    setIsEditingHeader(false)
  }

  // Save about section
  const saveAbout = () => {
    setProfile({
      ...profile,
      about: editedAbout,
    })
    setIsEditingAbout(false)
  }

  // Add skill
  const addSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile({
        ...profile,
        skills: [...profile.skills, newSkill.trim()],
      })
      setNewSkill("")
    }
  }

  // Remove skill
  const removeSkill = (skillToRemove: string) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter((skill) => skill !== skillToRemove),
    })
  }

  // Add experience
  const addExperience = () => {
    const { company, position, duration, description } = newExperience
    if (company && position && duration) {
      const newId = profile.experience.length > 0 ? Math.max(...profile.experience.map((exp) => exp.id)) + 1 : 1

      setProfile({
        ...profile,
        experience: [...profile.experience, { id: newId, company, position, duration, description }],
      })

      setNewExperience({ company: "", position: "", duration: "", description: "" })
      setIsAddingExperience(false)
    }
  }

  // Update experience
  const updateExperience = (id: number) => {
    const { company, position, duration, description } = newExperience
    if (company && position && duration) {
      setProfile({
        ...profile,
        experience: profile.experience.map((exp) =>
          exp.id === id ? { ...exp, company, position, duration, description } : exp,
        ),
      })

      setNewExperience({ company: "", position: "", duration: "", description: "" })
      setIsEditingExperience(null)
    }
  }

  // Delete experience
  const deleteExperience = (id: number) => {
    setProfile({
      ...profile,
      experience: profile.experience.filter((exp) => exp.id !== id),
    })
  }

  // Start editing experience
  const startEditingExperience = (exp: any) => {
    setNewExperience({
      company: exp.company,
      position: exp.position,
      duration: exp.duration,
      description: exp.description,
    })
    setIsEditingExperience(exp.id)
  }

  // Add education
  const addEducation = () => {
    const { institution, degree, duration, description } = newEducation
    if (institution && degree && duration) {
      const newId = profile.education.length > 0 ? Math.max(...profile.education.map((edu) => edu.id)) + 1 : 1

      setProfile({
        ...profile,
        education: [...profile.education, { id: newId, institution, degree, duration, description }],
      })

      setNewEducation({ institution: "", degree: "", duration: "", description: "" })
      setIsAddingEducation(false)
    }
  }

  // Update education
  const updateEducation = (id: number) => {
    const { institution, degree, duration, description } = newEducation
    if (institution && degree && duration) {
      setProfile({
        ...profile,
        education: profile.education.map((edu) =>
          edu.id === id ? { ...edu, institution, degree, duration, description } : edu,
        ),
      })

      setNewEducation({ institution: "", degree: "", duration: "", description: "" })
      setIsEditingEducation(null)
    }
  }

  // Delete education
  const deleteEducation = (id: number) => {
    setProfile({
      ...profile,
      education: profile.education.filter((edu) => edu.id !== id),
    })
  }

  // Start editing education
  const startEditingEducation = (edu: any) => {
    setNewEducation({
      institution: edu.institution,
      degree: edu.degree,
      duration: edu.duration,
      description: edu.description,
    })
    setIsEditingEducation(edu.id)
  }

  // Add language
  const addLanguage = () => {
    const { language, proficiency } = newLanguage
    if (language && proficiency) {
      const newId = profile.languages.length > 0 ? Math.max(...profile.languages.map((lang) => lang.id)) + 1 : 1

      setProfile({
        ...profile,
        languages: [...profile.languages, { id: newId, language, proficiency }],
      })

      setNewLanguage({ language: "", proficiency: "" })
      setIsAddingLanguage(false)
    }
  }

  // Update language
  const updateLanguage = (id: number) => {
    const { language, proficiency } = newLanguage
    if (language && proficiency) {
      setProfile({
        ...profile,
        languages: profile.languages.map((lang) => (lang.id === id ? { ...lang, language, proficiency } : lang)),
      })

      setNewLanguage({ language: "", proficiency: "" })
      setIsEditingLanguage(null)
    }
  }

  // Delete language
  const deleteLanguage = (id: number) => {
    setProfile({
      ...profile,
      languages: profile.languages.filter((lang) => lang.id !== id),
    })
  }

  // Start editing language
  const startEditingLanguage = (lang: any) => {
    setNewLanguage({
      language: lang.language,
      proficiency: lang.proficiency,
    })
    setIsEditingLanguage(lang.id)
  }

  // Add certification
  const addCertification = () => {
    const { name, issuer, date, description } = newCertification
    if (name && issuer && date) {
      const newId =
        profile.certifications.length > 0 ? Math.max(...profile.certifications.map((cert) => cert.id)) + 1 : 1

      setProfile({
        ...profile,
        certifications: [...profile.certifications, { id: newId, name, issuer, date, description }],
      })

      setNewCertification({ name: "", issuer: "", date: "", description: "" })
      setIsAddingCertification(false)
    }
  }

  // Update certification
  const updateCertification = (id: number) => {
    const { name, issuer, date, description } = newCertification
    if (name && issuer && date) {
      setProfile({
        ...profile,
        certifications: profile.certifications.map((cert) =>
          cert.id === id ? { ...cert, name, issuer, date, description } : cert,
        ),
      })

      setNewCertification({ name: "", issuer: "", date: "", description: "" })
      setIsEditingCertification(null)
    }
  }

  // Delete certification
  const deleteCertification = (id: number) => {
    setProfile({
      ...profile,
      certifications: profile.certifications.filter((cert) => cert.id !== id),
    })
  }

  // Start editing certification
  const startEditingCertification = (cert: any) => {
    setNewCertification({
      name: cert.name,
      issuer: cert.issuer,
      date: cert.date,
      description: cert.description,
    })
    setIsEditingCertification(cert.id)
  }

  const handleRemoveProfileImage = () => {
    setProfileImage(null)
    localStorage.removeItem("profileImage")
    if (profileInputRef.current) {
      profileInputRef.current.value = ""
    }
  }

  const handleRemoveBannerImage = () => {
    setBannerImage(null)
    localStorage.removeItem("bannerImage")
    if (bannerInputRef.current) {
      bannerInputRef.current.value = ""
    }
  }

  const handleRemoveResume = () => {
    setResumeFile(null)
    setResumeFileName(null)
    localStorage.removeItem("resumeFileName")
    if (resumeInputRef.current) {
      resumeInputRef.current.value = ""
    }
    toast({
      title: "Resume removed",
      description: "Your resume has been removed successfully.",
      variant: "default",
    })

    // Update profile state
    setProfile({
      ...profile,
      resume: null,
    })
  }

  const handleAddSkill = () => {
    if (newSkill && !editedProfile.skills.includes(newSkill)) {
      setEditedProfile({
        ...editedProfile,
        skills: [...editedProfile.skills, newSkill],
      })
      setNewSkill("")
    }
  }

  const handleRemoveSkill = (skill: string) => {
    setEditedProfile({
      ...editedProfile,
      skills: editedProfile.skills.filter((s) => s !== skill),
    })
  }

  const handleAddExperience = () => {
    if (!editingExperience.title || !editingExperience.company) return

    const newExperience = {
      id: Date.now(),
      ...editingExperience,
    }

    setEditedProfile({
      ...editedProfile,
      experience: [...editedProfile.experience, newExperience],
    })

    setEditingExperience(null)
    setIsEditing(null)

    toast({
      title: "Experience added",
      description: "Your new experience has been added successfully.",
    })
  }

  const handleUpdateExperience = () => {
    if (!editingExperience) return

    const updatedExperiences = editedProfile.experience.map((exp) =>
      exp.id === editingExperience.id ? editingExperience : exp,
    )

    setEditedProfile({
      ...editedProfile,
      experience: updatedExperiences,
    })

    setEditingExperience(null)

    toast({
      title: "Experience updated",
      description: "Your experience has been updated successfully.",
    })
  }

  const handleDeleteExperience = (id: number) => {
    setEditedProfile({
      ...editedProfile,
      experience: editedProfile.experience.filter((exp) => exp.id !== id),
    })

    toast({
      title: "Experience deleted",
      description: "Your experience has been deleted successfully.",
    })
  }

  const handleAddEducation = () => {
    if (!editingEducation.degree || !editingEducation.institution) return

    const newEducation = {
      id: Date.now(),
      ...editingEducation,
    }

    setEditedProfile({
      ...editedProfile,
      education: [...editedProfile.education, newEducation],
    })

    setEditingEducation(null)
    setIsEditing(null)

    toast({
      title: "Education added",
      description: "Your new education has been added successfully.",
    })
  }

  const handleUpdateEducation = () => {
    if (!editingEducation) return

    const updatedEducation = editedProfile.education.map((edu) =>
      edu.id === editingEducation.id ? editingEducation : edu,
    )

    setEditedProfile({
      ...editedProfile,
      education: updatedEducation,
    })

    setEditingEducation(null)

    toast({
      title: "Education updated",
      description: "Your education has been updated successfully.",
    })
  }

  const handleDeleteEducation = (id: number) => {
    setEditedProfile({
      ...editedProfile,
      education: editedProfile.education.filter((edu) => edu.id !== id),
    })

    toast({
      title: "Education deleted",
      description: "Your education has been deleted successfully.",
    })
  }

  const handleAddCertification = () => {
    if (!editingCertification.name || !editingCertification.issuer) return

    const newCertification = {
      id: Date.now(),
      ...editingCertification,
    }

    setEditedProfile({
      ...editedProfile,
      certifications: [...editedProfile.certifications, newCertification],
    })

    setEditingCertification(null)
    setIsEditing(null)

    toast({
      title: "Certification added",
      description: "Your new certification has been added successfully.",
    })
  }

  const handleUpdateCertification = () => {
    if (!editingCertification) return

    const updatedCertifications = editedProfile.certifications.map((cert) =>
      cert.id === editingCertification.id ? editingCertification : cert,
    )

    setEditedProfile({
      ...editedProfile,
      certifications: updatedCertifications,
    })

    setEditingCertification(null)

    toast({
      title: "Certification updated",
      description: "Your certification has been updated successfully.",
    })
  }

  const handleDeleteCertification = (id: number) => {
    setEditedProfile({
      ...editedProfile,
      certifications: editedProfile.certifications.filter((cert) => cert.id !== id),
    })

    toast({
      title: "Certification deleted",
      description: "Your certification has been deleted successfully.",
    })
  }

  const handleAddLanguage = () => {
    if (!editingLanguage || !editingLanguage.name || !editingLanguage.proficiency) return

    setEditedProfile({
      ...editedProfile,
      languages: [...editedProfile.languages, editingLanguage],
    })

    setEditingLanguage(null)
    setIsEditing(null)

    toast({
      title: "Language added",
      description: "Your new language has been added successfully.",
    })
  }

  const handleUpdateLanguage = (index: number) => {
    if (!editingLanguage) return

    const updatedLanguages = [...editedProfile.languages]
    updatedLanguages[index] = editingLanguage

    setEditedProfile({
      ...editedProfile,
      languages: updatedLanguages,
    })

    setEditingLanguage(null)

    toast({
      title: "Language updated",
      description: "Your language has been updated successfully.",
    })
  }

  const handleDeleteLanguage = (index: number) => {
    const updatedLanguages = [...editedProfile.languages]
    updatedLanguages.splice(index, 1)

    setEditedProfile({
      ...editedProfile,
      languages: updatedLanguages,
    })

    toast({
      title: "Language deleted",
      description: "Your language has been deleted successfully.",
    })
  }

  const handleAddProject = () => {
    if (!editingProject.name || !editingProject.description) return

    const newProject = {
      id: Date.now(),
      ...editingProject,
    }

    setEditedProfile({
      ...editedProfile,
      projects: [...editedProfile.projects, newProject],
    })

    setEditingProject(null)
    setIsEditing(null)

    toast({
      title: "Project added",
      description: "Your new project has been added successfully.",
    })
  }

  const handleUpdateProject = () => {
    if (!editingProject) return

    const updatedProjects = editedProfile.projects.map((proj) =>
      proj.id === editingProject.id ? editingProject : proj,
    )

    setEditedProfile({
      ...editedProfile,
      projects: updatedProjects,
    })

    setEditingProject(null)

    toast({
      title: "Project updated",
      description: "Your project has been updated successfully.",
    })
  }

  const handleDeleteProject = (id: number) => {
    setEditedProfile({
      ...editedProfile,
      projects: editedProfile.projects.filter((proj) => proj.id !== id),
    })

    toast({
      title: "Project deleted",
      description: "Your project has been deleted successfully.",
    })
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      {/* Profile Header */}
      <div className="relative">
        {/* Banner Image */}
        <div className="relative h-48 md:h-64 rounded-lg overflow-hidden bg-gray-800">
          <img
            src={profile.bannerImage || "/placeholder.svg"}
            alt="Profile Banner"
            className="w-full h-full object-cover"
          />
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
            onClick={() => setIsEditingBannerImage(true)}
          >
            <Edit className="h-4 w-4 mr-1" /> Edit Banner
          </Button>
        </div>

        {/* Profile Image */}
        <div className="absolute -bottom-12 left-6">
          <div className="relative">
            <img
              src={profile.profileImage || "/placeholder.svg"}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-background"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute bottom-0 right-0 rounded-full bg-black/50 hover:bg-black/70 text-white h-8 w-8"
              onClick={() => setIsEditingProfileImage(true)}
            >
              <Edit className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-14 px-4">
        {isEditingHeader ? (
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input id="location" value={editedLocation} onChange={(e) => setEditedLocation(e.target.value)} />
            </div>
            <div className="flex gap-2">
              <Button onClick={saveHeaderInfo}>Save</Button>
              <Button variant="outline" onClick={() => setIsEditingHeader(false)}>
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">{profile.name}</h1>
              <p className="text-lg text-muted-foreground">{profile.title}</p>
              <p className="text-sm text-muted-foreground">{profile.location}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsEditingHeader(true)}>
              <Edit className="h-4 w-4 mr-1" /> Edit
            </Button>
          </div>
        )}
      </div>

      {/* Resume Section */}
      <Card className="card-neumorphic">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center">
            <FileText className="h-5 w-5 mr-2 text-primary" />
            <CardTitle>Resume</CardTitle>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setIsEditingResume(true)}>
            <Edit className="h-4 w-4 mr-1" /> {resumeFileName ? "Update" : "Add"} Resume
          </Button>
        </CardHeader>
        <CardContent>
          {resumeFileName ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-primary" />
                <span>{resumeFileName}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="button-glow">
                  <Download className="h-4 w-4 mr-1" /> Download
                </Button>
                <Button variant="outline" size="sm" onClick={handleRemoveResume}>
                  <X className="h-4 w-4 mr-1" /> Remove
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground">
              No resume uploaded yet. Add your resume to make it easier for employers to review your qualifications.
            </p>
          )}
        </CardContent>
      </Card>

      {/* About Section */}
      <Card className="card-neumorphic">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>About</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setIsEditingAbout(true)
              setEditedAbout(profile.about)
            }}
          >
            <Edit className="h-4 w-4 mr-1" /> Edit
          </Button>
        </CardHeader>
        <CardContent>
          {isEditingAbout ? (
            <div className="space-y-4">
              <Textarea value={editedAbout} onChange={(e) => setEditedAbout(e.target.value)} rows={5} />
              <div className="flex gap-2">
                <Button onClick={saveAbout}>Save</Button>
                <Button variant="outline" onClick={() => setIsEditingAbout(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <p>{profile.about}</p>
          )}
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card className="card-neumorphic">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Skills</CardTitle>
          <Button variant="ghost" size="sm" onClick={() => setIsEditingSkills(!isEditingSkills)}>
            <Edit className="h-4 w-4 mr-1" /> Edit
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="accent-glow">
                {skill}
                {isEditingSkills && (
                  <button
                    onClick={() => removeSkill(skill)}
                    className="ml-1 text-muted-foreground hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </Badge>
            ))}
            {isEditingSkills && (
              <div className="flex items-center gap-2 mt-2 w-full">
                <Input
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add a skill"
                  className="max-w-xs"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      addSkill()
                    }
                  }}
                />
                <Button size="sm" onClick={addSkill}>
                  Add
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Tabs for Experience, Education, Languages, Certifications */}
      <Tabs defaultValue="experience">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="experience" className="flex items-center gap-1">
            <Briefcase className="h-4 w-4" /> Experience
          </TabsTrigger>
          <TabsTrigger value="education" className="flex items-center gap-1">
            <GraduationCap className="h-4 w-4" /> Education
          </TabsTrigger>
          <TabsTrigger value="languages" className="flex items-center gap-1">
            <Languages className="h-4 w-4" /> Languages
          </TabsTrigger>
          <TabsTrigger value="certifications" className="flex items-center gap-1">
            <Award className="h-4 w-4" /> Certifications
          </TabsTrigger>
        </TabsList>

        {/* Experience Tab */}
        <TabsContent value="experience">
          <Card className="card-neumorphic">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Experience</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setIsAddingExperience(true)}>
                <PlusCircle className="h-4 w-4 mr-1" /> Add
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {profile.experience.map((exp) => (
                <div key={exp.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  {isEditingExperience === exp.id ? (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={newExperience.company}
                          onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="position">Position</Label>
                        <Input
                          id="position"
                          value={newExperience.position}
                          onChange={(e) => setNewExperience({ ...newExperience, position: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="duration">Duration</Label>
                        <Input
                          id="duration"
                          value={newExperience.duration}
                          onChange={(e) => setNewExperience({ ...newExperience, duration: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={newExperience.description}
                          onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
                          rows={3}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={() => updateExperience(exp.id)}>Save</Button>
                        <Button variant="outline" onClick={() => setIsEditingExperience(null)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{exp.position}</h3>
                          <p className="text-muted-foreground">
                            {exp.company} • {exp.duration}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon" onClick={() => startEditingExperience(exp)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => deleteExperience(exp.id)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="mt-2">{exp.description}</p>
                    </div>
                  )}
                </div>
              ))}

              {/* Add Experience Form */}
              {isAddingExperience && (
                <div className="space-y-4 border-t border-border pt-4 mt-4">
                  <h3 className="font-semibold">Add Experience</h3>
                  <div>
                    <Label htmlFor="new-company">Company</Label>
                    <Input
                      id="new-company"
                      value={newExperience.company}
                      onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-position">Position</Label>
                    <Input
                      id="new-position"
                      value={newExperience.position}
                      onChange={(e) => setNewExperience({ ...newExperience, position: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-duration">Duration</Label>
                    <Input
                      id="new-duration"
                      value={newExperience.duration}
                      onChange={(e) => setNewExperience({ ...newExperience, duration: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-description">Description</Label>
                    <Textarea
                      id="new-description"
                      value={newExperience.description}
                      onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={addExperience}>Add</Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsAddingExperience(false)
                        setNewExperience({ company: "", position: "", duration: "", description: "" })
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Education Tab */}
        <TabsContent value="education">
          <Card className="card-neumorphic">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Education</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setIsAddingEducation(true)}>
                <PlusCircle className="h-4 w-4 mr-1" /> Add
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {profile.education.map((edu) => (
                <div key={edu.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  {isEditingEducation === edu.id ? (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="institution">Institution</Label>
                        <Input
                          id="institution"
                          value={newEducation.institution}
                          onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="degree">Degree</Label>
                        <Input
                          id="degree"
                          value={newEducation.degree}
                          onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="edu-duration">Duration</Label>
                        <Input
                          id="edu-duration"
                          value={newEducation.duration}
                          onChange={(e) => setNewEducation({ ...newEducation, duration: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="edu-description">Description</Label>
                        <Textarea
                          id="edu-description"
                          value={newEducation.description}
                          onChange={(e) => setNewEducation({ ...newEducation, description: e.target.value })}
                          rows={3}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={() => updateEducation(edu.id)}>Save</Button>
                        <Button variant="outline" onClick={() => setIsEditingEducation(null)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{edu.degree}</h3>
                          <p className="text-muted-foreground">
                            {edu.institution} • {edu.duration}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon" onClick={() => startEditingEducation(edu)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => deleteEducation(edu.id)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="mt-2">{edu.description}</p>
                    </div>
                  )}
                </div>
              ))}

              {/* Add Education Form */}
              {isAddingEducation && (
                <div className="space-y-4 border-t border-border pt-4 mt-4">
                  <h3 className="font-semibold">Add Education</h3>
                  <div>
                    <Label htmlFor="new-institution">Institution</Label>
                    <Input
                      id="new-institution"
                      value={newEducation.institution}
                      onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-degree">Degree</Label>
                    <Input
                      id="new-degree"
                      value={newEducation.degree}
                      onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-edu-duration">Duration</Label>
                    <Input
                      id="new-edu-duration"
                      value={newEducation.duration}
                      onChange={(e) => setNewEducation({ ...newEducation, duration: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-edu-description">Description</Label>
                    <Textarea
                      id="new-edu-description"
                      value={newEducation.description}
                      onChange={(e) => setNewEducation({ ...newEducation, description: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={addEducation}>Add</Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsAddingEducation(false)
                        setNewEducation({ institution: "", degree: "", duration: "", description: "" })
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Languages Tab */}
        <TabsContent value="languages">
          <Card className="card-neumorphic">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Languages</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setIsAddingLanguage(true)}>
                <PlusCircle className="h-4 w-4 mr-1" /> Add
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {profile.languages.map((lang) => (
                <div
                  key={lang.id}
                  className="flex justify-between items-center border-b border-border pb-3 last:border-0 last:pb-0"
                >
                  {isEditingLanguage === lang.id ? (
                    <div className="flex gap-4 w-full">
                      <div className="flex-1">
                        <Label htmlFor="language">Language</Label>
                        <Input
                          id="language"
                          value={newLanguage.language}
                          onChange={(e) => setNewLanguage({ ...newLanguage, language: e.target.value })}
                        />
                      </div>
                      <div className="flex-1">
                        <Label htmlFor="proficiency">Proficiency</Label>
                        <Input
                          id="proficiency"
                          value={newLanguage.proficiency}
                          onChange={(e) => setNewLanguage({ ...newLanguage, proficiency: e.target.value })}
                        />
                      </div>
                      <div className="flex items-end gap-2">
                        <Button size="sm" onClick={() => updateLanguage(lang.id)}>
                          Save
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setIsEditingLanguage(null)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        <p className="font-medium">{lang.language}</p>
                        <p className="text-sm text-muted-foreground">{lang.proficiency}</p>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" onClick={() => startEditingLanguage(lang)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => deleteLanguage(lang.id)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              ))}

              {/* Add Language Form */}
              {isAddingLanguage && (
                <div className="space-y-4 border-t border-border pt-4 mt-4">
                  <h3 className="font-semibold">Add Language</h3>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Label htmlFor="new-language">Language</Label>
                      <Input
                        id="new-language"
                        value={newLanguage.language}
                        onChange={(e) => setNewLanguage({ ...newLanguage, language: e.target.value })}
                      />
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="new-proficiency">Proficiency</Label>
                      <Input
                        id="new-proficiency"
                        value={newLanguage.proficiency}
                        onChange={(e) => setNewLanguage({ ...newLanguage, proficiency: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={addLanguage}>Add</Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsAddingLanguage(false)
                        setNewLanguage({ language: "", proficiency: "" })
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Certifications Tab */}
        <TabsContent value="certifications">
          <Card className="card-neumorphic">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Certifications</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setIsAddingCertification(true)}>
                <PlusCircle className="h-4 w-4 mr-1" /> Add
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {profile.certifications.map((cert) => (
                <div key={cert.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  {isEditingCertification === cert.id ? (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cert-name">Name</Label>
                        <Input
                          id="cert-name"
                          value={newCertification.name}
                          onChange={(e) => setNewCertification({ ...newCertification, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="issuer">Issuer</Label>
                        <Input
                          id="issuer"
                          value={newCertification.issuer}
                          onChange={(e) => setNewCertification({ ...newCertification, issuer: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="date">Date</Label>
                        <Input
                          id="date"
                          value={newCertification.date}
                          onChange={(e) => setNewCertification({ ...newCertification, date: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cert-description">Description</Label>
                        <Textarea
                          id="cert-description"
                          value={newCertification.description}
                          onChange={(e) => setNewCertification({ ...newCertification, description: e.target.value })}
                          rows={3}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button onClick={() => updateCertification(cert.id)}>Save</Button>
                        <Button variant="outline" onClick={() => setIsEditingCertification(null)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{cert.name}</h3>
                          <p className="text-muted-foreground">
                            {cert.issuer} • {cert.date}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon" onClick={() => startEditingCertification(cert)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => deleteCertification(cert.id)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="mt-2">{cert.description}</p>
                    </div>
                  )}
                </div>
              ))}

              {/* Add Certification Form */}
              {isAddingCertification && (
                <div className="space-y-4 border-t border-border pt-4 mt-4">
                  <h3 className="font-semibold">Add Certification</h3>
                  <div>
                    <Label htmlFor="new-cert-name">Name</Label>
                    <Input
                      id="new-cert-name"
                      value={newCertification.name}
                      onChange={(e) => setNewCertification({ ...newCertification, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-issuer">Issuer</Label>
                    <Input
                      id="new-issuer"
                      value={newCertification.issuer}
                      onChange={(e) => setNewCertification({ ...newCertification, issuer: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-date">Date</Label>
                    <Input
                      id="new-date"
                      value={newCertification.date}
                      onChange={(e) => setNewCertification({ ...newCertification, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-cert-description">Description</Label>
                    <Textarea
                      id="new-cert-description"
                      value={newCertification.description}
                      onChange={(e) => setNewCertification({ ...newCertification, description: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={addCertification}>Add</Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsAddingCertification(false)
                        setNewCertification({ name: "", issuer: "", date: "", description: "" })
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Profile Image Dialog */}
      <Dialog open={isEditingProfileImage} onOpenChange={setIsEditingProfileImage}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Profile Picture</DialogTitle>
            <DialogDescription>Upload a new profile picture. Square images work best.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4">
            <img
              src={tempProfileImage || "/placeholder.svg"}
              alt="Profile Preview"
              className="w-32 h-32 rounded-full object-cover border"
            />
            <Label htmlFor="profile-image" className="cursor-pointer">
              <div className="flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors rounded-md px-4 py-2">
                <Upload className="h-4 w-4" />
                <span>Choose Image</span>
              </div>
              <Input
                id="profile-image"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfileImageChange}
              />
            </Label>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditingProfileImage(false)}>
              Cancel
            </Button>
            <Button onClick={saveProfileImage}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Banner Image Dialog */}
      <Dialog open={isEditingBannerImage} onOpenChange={setIsEditingBannerImage}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Banner Image</DialogTitle>
            <DialogDescription>Upload a new banner image. Wide images (1200x300) work best.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4">
            <div className="w-full h-32 rounded-md overflow-hidden">
              <img
                src={tempBannerImage || "/placeholder.svg"}
                alt="Banner Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <Label htmlFor="banner-image" className="cursor-pointer">
              <div className="flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors rounded-md px-4 py-2">
                <Upload className="h-4 w-4" />
                <span>Choose Image</span>
              </div>
              <Input
                id="banner-image"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleBannerImageChange}
              />
            </Label>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditingBannerImage(false)}>
              Cancel
            </Button>
            <Button onClick={saveBannerImage}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Resume Dialog */}
      <Dialog open={isEditingResume} onOpenChange={setIsEditingResume}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Resume</DialogTitle>
            <DialogDescription>
              Upload your resume in PDF format. This will be visible to potential employers.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4">
            {isUploading ? (
              <div className="w-full space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            ) : (
              <>
                <Label htmlFor="resume-file" className="cursor-pointer">
                  <div className="flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors rounded-md px-4 py-2">
                    <Upload className="h-4 w-4" />
                    <span>Choose File</span>
                  </div>
                  <Input
                    id="resume-file"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleResumeUpload}
                    ref={resumeInputRef}
                  />
                </Label>
                {resumeFileName && (
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="h-4 w-4" />
                    <span>{resumeFileName}</span>
                  </div>
                )}
              </>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditingResume(false)} disabled={isUploading}>
              Cancel
            </Button>
            <Button onClick={() => setIsEditingResume(false)} disabled={!resumeFileName || isUploading}>
              {resumeFileName ? "Save" : "Close"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
