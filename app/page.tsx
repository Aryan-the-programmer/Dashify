import { Sidebar } from "@/components/dashboard/sidebar"
import { Navbar } from "@/components/dashboard/navbar"
import { StatCards } from "@/components/dashboard/stat-cards"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { TrafficChart } from "@/components/dashboard/traffic-chart"
import { TransactionsTable } from "@/components/dashboard/transactions-table"
import { CampaignsProgress } from "@/components/dashboard/campaigns-progress"
import FocusedOverlay from "@/components/FocusedOverlay"
import { Suspense } from "react"

export default function DashboardPage() {


  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 pl-64">
        <Navbar />
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Welcome back! Here&apos;s an overview of your Matrices.
            </p>
          </div>

          <div className="space-y-6">
            <StatCards />

            <div >
              <div className="grid gap-6 lg:grid-cols-2">
                <RevenueChart />
                <TrafficChart />
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <TransactionsTable />
                <CampaignsProgress />
              </div>

            </div>


          </div>

          <Suspense fallback={<div>Loading search...</div>}>
            <FocusedOverlay componentId="revenue-chart">
              <RevenueChart />
            </FocusedOverlay>
          </Suspense>

          <Suspense fallback={<div>Loading search...</div>}>
            <FocusedOverlay componentId="campaigns-progress">
              <CampaignsProgress />
            </FocusedOverlay>
          </Suspense>

          <Suspense fallback={<div>Loading search...</div>}>
            <FocusedOverlay componentId="transactions-table">
              <TransactionsTable />
            </FocusedOverlay>
          </Suspense>

        </main>
      </div>
    </div>
  )
}
