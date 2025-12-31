"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BriefcaseBusiness, Search, CheckCircle, Zap, Shield, Users } from "lucide-react"
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
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
              {/* Placeholder for the Logo - In production this would be <Image /> */}
              <span className="text-xl font-bold text-primary">J</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">JobFlux</span>
          </div>
          <nav className="hidden gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="hidden sm:flex hover:bg-primary/10 hover:text-primary">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="button-glow bg-primary hover:bg-primary/90">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-glow delay-1000" />
        </div>

        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit border-primary/50 bg-primary/10 text-primary px-4 py-1">
                  <Zap className="w-3 h-3 mr-2 fill-primary" /> v1.0 Now Live
                </Badge>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Find Your <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Dream Job</span>
                  <br /> with AI Precision
                </h1>
                <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl leading-relaxed">
                  Stop scrolling through endless listings. JobFlux uses advanced AI to match your unique skills with companies looking for exactly you.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="h-12 px-8 text-base button-glow bg-primary hover:bg-primary/90">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary/20 hover:bg-primary/5">
                    See How It Works
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Verified Companies</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="relative z-10 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl p-2 shadow-2xl animate-float">
                <div className="rounded-xl bg-background/90 p-6 border border-border/30">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Search className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Match Found!</h3>
                        <p className="text-xs text-muted-foreground">Based on your generic profile</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500/10 text-green-500 border-green-500/20">98% Match</Badge>
                  </div>

                  <div className="space-y-4">
                    {[
                      { role: "Senior Frontend Dev", company: "TechCorp", loc: "Remote", color: "bg-blue-500" },
                      { role: "Product Designer", company: "Creative Studios", loc: "New York", color: "bg-purple-500" },
                      { role: "Backend Engineer", company: "DataFlow", loc: "London", color: "bg-orange-500" }
                    ].map((job, i) => (
                      <div key={i} className="group flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer border border-transparent hover:border-primary/10">
                        <div className="flex items-center gap-4">
                          <div className={`h-10 w-10 rounded-lg ${job.color}/20 flex items-center justify-center`}>
                            <BriefcaseBusiness className={`h-5 w-5 ${job.color}`} />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{job.role}</h4>
                            <p className="text-xs text-muted-foreground">{job.company} • {job.loc}</p>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 h-72 w-72 bg-primary/30 rounded-full blur-[80px]" />
              <div className="absolute -bottom-10 -left-10 h-72 w-72 bg-purple-600/30 rounded-full blur-[80px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="w-full bg-muted/30 py-24 border-t border-border/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary">Key Features</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Engineered for Your Career Growth
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              We've stripped away the noise to focus on what matters: connecting you with oppurtunities that fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: AIMatchingIcon, title: "AI-Powered Matching", desc: "Our neural engine analyzes thousands of data points to find roles that match your skills, not just keywords." },
              { icon: RealTimeIcon, title: "Real-Time Alerts", desc: "Be the first to apply. Get instant notifications via email or push the moment a matching job goes live." },
              { icon: DirectConnectionsIcon, title: "Direct Connect", desc: "Skip the ATS black hole. Message hiring managers directly once you match with a role." },
              { icon: AdvancedFilteringIcon, title: "Granular Filtering", desc: "Filter by tech stack, company culture, funding stage, and remote policy to find your niche." },
              { icon: CareerInsightsIcon, title: "Market Insights", desc: "Real-time salary data and skill gap analysis to help you negotiate better and grow faster." },
              { icon: ApplicationTrackingIcon, title: "Kanban Tracking", desc: "Visualize your entire application pipeline from 'Applied' to 'Offer' in one intuitive dashboard." }
            ].map((feature, i) => (
              <Card key={i} className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Upgrade Your Career?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join 50,000+ developers, designers, and product pros who found their next big role on JobFlux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-base button-glow bg-primary hover:bg-primary/90">
                  Create Free Profile
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 h-12 text-base">
                  Log In
                </Button>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Free for job seekers forever. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-border/40 bg-background py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">JobFlux</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The next-generation job platform for the modern workforce. seamless, smart, and human-centric.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    <Users className="h-4 w-4" />
                  </div>
                ))}
              </div>
            </div>

            {["Product", "Resources", "Company"].map((col, i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-sm font-semibold">{col}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[1, 2, 3].map((_, j) => (
                    <li key={j}>
                      <Link href="#" className="hover:text-primary transition-colors">
                        Link Item {j + 1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} JobFlux Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <Link href="#" className="hover:text-primary">Privacy</Link>
              <Link href="#" className="hover:text-primary">Terms</Link>
              <Link href="#" className="hover:text-primary">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
