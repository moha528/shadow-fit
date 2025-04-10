"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

export default function AchievementNotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Notifications de réalisations</h1>
        <p className="text-zinc-400">Consultez vos notifications de badges et objectifs</p>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="h-5 w-5 mr-2 text-emerald-500" />
            Badges et objectifs
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Vos notifications de réalisations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Ici, vous pouvez ajouter un composant de liste de notifications de réalisations */}
            <p className="text-zinc-400">Aucune notification de réalisation pour le moment</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 