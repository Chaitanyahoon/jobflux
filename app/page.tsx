import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BriefcaseBusiness, Search } from "lucide-react"
import {
  AIMatchingIcon,
  RealTimeIcon,
  DirectConnectionsIcon,
  AdvancedFilteringIcon,
  CareerInsightsIcon,
  ApplicationTrackingIcon,
  StepOneIcon,
  StepTwoIcon,
  StepThreeIcon,
  UserAvatar,
} from "@/components/ui/icons"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BriefcaseBusiness className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">JobFlux</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="hidden sm:flex">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="inline-block">Now in Beta</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Find Your Dream Job with AI-Powered Matching
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  JobFlux connects you with the perfect job opportunities based on your skills, experience, and
                  preferences. Get personalized job recommendations in real-time.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="gap-1.5">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-muted/50 p-4">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-muted/50"></div>
                <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-4 rounded-lg border bg-background/95 p-6 shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Find Jobs That Match Your Profile</h3>
                  <p className="text-center text-sm text-muted-foreground">
                    Create your profile and let our AI match you with the perfect job opportunities.
                  </p>
                  <div className="mt-4 w-full space-y-3">
                    <div className="rounded-lg border bg-card p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Senior Frontend Developer</h4>
                          <p className="text-xs text-muted-foreground">TechCorp Inc. • Bangalore</p>
                        </div>
                        <Badge>95% Match</Badge>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Full Stack Engineer</h4>
                          <p className="text-xs text-muted-foreground">InnovateSoft • Mumbai</p>
                        </div>
                        <Badge>92% Match</Badge>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">UX/UI Designer</h4>
                          <p className="text-xs text-muted-foreground">DesignHub • Hyderabad</p>
                        </div>
                        <Badge>88% Match</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="inline-block">Features</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Everything You Need to Find Your Dream Job
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                JobFlux provides a comprehensive set of tools to help you find the perfect job match.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-md bg-primary/10 p-2 flex items-center justify-center">
                    <AIMatchingIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">AI-Powered Matching</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our advanced AI algorithm matches your skills and preferences with the perfect job opportunities.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-md bg-primary/10 p-2 flex items-center justify-center">
                    <RealTimeIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Real-Time Updates</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Get notified instantly when new jobs matching your profile are posted.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-md bg-primary/10 p-2 flex items-center justify-center">
                    <DirectConnectionsIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Direct Connections</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Connect directly with employers and recruiters who are interested in your profile.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-md bg-primary/10 p-2 flex items-center justify-center">
                    <AdvancedFilteringIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Advanced Filtering</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Filter job opportunities by location, salary, industry, and more to find the perfect match.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-md bg-primary/10 p-2 flex items-center justify-center">
                    <CareerInsightsIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Career Insights</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Get valuable insights into industry trends, salary benchmarks, and in-demand skills.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-md bg-primary/10 p-2 flex items-center justify-center">
                    <ApplicationTrackingIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Application Tracking</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Track your job applications and interviews in one place for better organization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="inline-block">How It Works</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Find Your Dream Job in 3 Simple Steps
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                JobFlux makes it easy to find the perfect job match with our simple 3-step process.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <StepOneIcon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Create Your Profile</h3>
              <p className="text-sm text-muted-foreground">
                Sign up and create your profile with your skills, experience, and job preferences.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <StepTwoIcon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Get Matched</h3>
              <p className="text-sm text-muted-foreground">
                Our AI algorithm matches your profile with the most relevant job opportunities.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <StepThreeIcon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Apply and Connect</h3>
              <p className="text-sm text-muted-foreground">
                Apply to jobs and connect directly with employers who are interested in your profile.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/signup">
              <Button size="lg" className="gap-1.5">
                Get Started Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="inline-block">Testimonials</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from professionals who found their dream jobs using JobFlux.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <UserAvatar initials="PS" className="h-12 w-12" />
                  <div>
                    <h4 className="font-semibold">Priya Sharma</h4>
                    <p className="text-xs text-muted-foreground">Frontend Developer</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  "JobFlux helped me find my dream job in just 2 weeks! The AI matching is incredibly accurate and saved
                  me so much time."
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <UserAvatar initials="AP" className="h-12 w-12" />
                  <div>
                    <h4 className="font-semibold">Arjun Patel</h4>
                    <p className="text-xs text-muted-foreground">Data Scientist</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  "I was amazed by how well JobFlux understood my skills and matched me with relevant opportunities. I
                  found a job that perfectly matches my expertise."
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <UserAvatar initials="NG" className="h-12 w-12" />
                  <div>
                    <h4 className="font-semibold">Neha Gupta</h4>
                    <p className="text-xs text-muted-foreground">Product Manager</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  "The personalized job recommendations on JobFlux are spot on. I received notifications for jobs that
                  perfectly matched my career goals."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Find Your Dream Job?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of professionals who found their perfect job match with JobFlux.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" className="gap-1.5">
                  Get Started for Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BriefcaseBusiness className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">JobFlux</span>
              </div>
              <p className="text-sm text-muted-foreground">Find your dream job with AI-powered matching.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Career Advice
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} JobFlux. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
