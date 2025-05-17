import { OnboardingForm } from "@/components/onboarding-form"
import { AppLayout } from "@/components/app-layout"

export default function OnboardingPage() {
  return (
    <AppLayout>
      <div className="py-6">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight">Complete Your Profile</h1>
            <p className="text-muted-foreground">Tell us about yourself so we can find the best job matches for you.</p>
          </div>
          <OnboardingForm />
        </div>
      </div>
    </AppLayout>
  )
}
