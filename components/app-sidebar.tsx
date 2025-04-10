"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart2, Calendar, Dumbbell, Home, LogOut, Settings, User } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const pathname = usePathname()

  const routes = [
    { href: "/dashboard", label: "Tableau de bord", icon: Home },
    { href: "/workouts", label: "Entraînements", icon: Dumbbell },
    { href: "/progress", label: "Progression", icon: BarChart2 },
    { href: "/calendar", label: "Calendrier", icon: Calendar },
    { href: "/profile", label: "Profil", icon: User },
    { href: "/settings", label: "Paramètres", icon: Settings },
  ]

  return (
    <Sidebar className="border-r border-zinc-800">
      <SidebarHeader className="py-4">
        <div className="flex items-center gap-2 px-4">
          <Dumbbell className="h-6 w-6 text-emerald-500" />
          <span className="font-bold text-xl">ShadowFit</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {routes.map((route) => (
            <SidebarMenuItem key={route.href}>
              <SidebarMenuButton asChild isActive={pathname === route.href} tooltip={route.label}>
                <Link href={route.href} className="flex items-center gap-2">
                  <route.icon className="h-5 w-5" />
                  <span>{route.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-red-500 hover:text-red-400 hover:bg-red-500/10">
              <LogOut className="h-5 w-5 mr-2" />
              <span>Déconnexion</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
