import DashboardSidebar from '@/components/DashboardSidebar'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto ml-0 lg:ml-64">
        <div className="sticky top-0 z-10 bg-background p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold"> </h1>
          <ThemeToggle />
        </div>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}

