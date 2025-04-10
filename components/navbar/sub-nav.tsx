"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Search, Zap, Calendar, Dumbbell, LineChart, Settings, User, Bell, LucideIcon, LayoutDashboard, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SubRoute {
  name: string
  href: string
}

interface Section {
  name: string
  icon: LucideIcon
  subRoutes?: SubRoute[]
}

const sections: Record<string, Section> = {
  "/dashboard": {
    name: "Tableau de bord",
    icon: LayoutDashboard,
    subRoutes: []
  },
  "/workouts": {
    name: "Entraînements",
    icon: Dumbbell,
    subRoutes: [
      { name: "Mes entraînements", href: "/workouts" },
      { name: "Créer un entraînement", href: "/workouts/create" },
      { name: "Bibliothèque", href: "/workouts/library" }
    ]
  },
  "/progress": {
    name: "Progression",
    icon: TrendingUp,
    subRoutes: [
      { name: "Mes progrès", href: "/progress" },
      { name: "Historique", href: "/progress/history" },
      { name: "Objectifs", href: "/progress/goals" }
    ]
  },
  "/calendar": {
    name: "Calendrier",
    icon: Calendar,
    subRoutes: []
  },
  "/profile": {
    name: "Profil",
    icon: User,
    subRoutes: [
      { name: "Informations", href: "/profile/info" },
      { name: "Réalisations", href: "/profile/achievements" },
      { name: "Statistiques", href: "/profile/stats" }
    ]
  },
  "/settings": {
    name: "Paramètres",
    icon: Settings,
    subRoutes: [
      { name: "Compte", href: "/settings/account" },
      { name: "Apparence", href: "/settings/appearance" },
      { name: "Notifications", href: "/settings/notifications" },
      { name: "Sécurité", href: "/settings/security" }
    ]
  },
  "/notifications": {
    name: "Notifications",
    icon: Bell,
    subRoutes: [
      { name: "Toutes", href: "/notifications/all" },
      { name: "Entraînement", href: "/notifications/workouts" },
      { name: "Réalisations", href: "/notifications/achievements" },
      { name: "Social", href: "/notifications/social" },
      { name: "Système", href: "/notifications/system" }
    ]
  }
}

export function SubNav({ section }: { section: string }) {
  const pathname = usePathname()
  const currentSection = sections[section]

  if (!currentSection) return null

  return (
    <div className="border-b border-zinc-800 bg-zinc-950">
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        <nav className="flex items-center space-x-1">
          <div className="flex items-center space-x-4">
            <currentSection.icon className="h-5 w-5 text-zinc-400" />
            <span className="text-sm font-medium text-zinc-300 pr-3">{currentSection.name}</span>
          </div>
          {currentSection.subRoutes && (
            <div className="ml-8 flex items-center space-x-4">
              {currentSection.subRoutes.map((route: SubRoute) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-white",
                    pathname === route.href ? "text-white" : "text-zinc-400"
                  )}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          )}
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative max-w-md hidden md:flex">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
            <Input
              type="search"
              placeholder="Rechercher..."
              className="w-full bg-zinc-900 border-zinc-800 pl-9 h-9 focus-visible:ring-emerald-500 max-w-[200px]"
            />
          </div>

          {section === "/dashboard" && (
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white h-9">
              <Zap className="mr-2 h-4 w-4" />
              Nouvel entraînement
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
