import type { ReactNode } from "react"
import { MainNav } from "@/components/navbar/main-nav"
import { ContextNav } from "@/components/navbar/context-nav"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <MainNav />
      <ContextNav />
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
