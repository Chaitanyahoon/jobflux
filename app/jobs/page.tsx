import { JobsFilter } from "@/components/jobs-filter"
import { JobRecommendations } from "@/components/job-recommendations"
import { AppLayout } from "@/components/app-layout"

export default function JobsPage() {
  return (
    <AppLayout>
      <div className="py-6">
        <div className="container">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Browse Jobs</h1>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr]">
            <aside className="md:block">
              <JobsFilter />
            </aside>
            <div>
              <JobRecommendations />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
