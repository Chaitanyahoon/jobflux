import { JobDetails } from "@/components/job-details"
import { AppLayout } from "@/components/app-layout"

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  return (
    <AppLayout>
      <div className="py-6">
        <div className="container">
          <JobDetails id={params.id} />
        </div>
      </div>
    </AppLayout>
  )
}
