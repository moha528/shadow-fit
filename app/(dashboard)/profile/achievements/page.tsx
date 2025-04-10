"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Medal, Trophy } from "lucide-react"

export default function ProfileAchievementsPage() {
  // Badges fictifs
  const badges = [
    { name: "Premier pas", description: "A complété son premier entraînement", icon: Dumbbell, date: "15 Jan 2023" },
    { name: "Persévérant", description: "10 entraînements consécutifs", icon: Medal, date: "28 Fév 2023" },
    { name: "Expert", description: "A atteint le niveau 5", icon: Trophy, date: "10 Mar 2023" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Réalisations</h1>
        <p className="text-zinc-400">Vos badges et réalisations</p>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Badges et réalisations</CardTitle>
          <CardDescription className="text-zinc-400">
            Vous avez débloqué {badges.length} badges sur 20 disponibles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {badges.map((badge, index) => (
              <div key={index} className="bg-zinc-800 rounded-lg p-4 flex items-start gap-3">
                <div className="bg-emerald-500/20 p-3 rounded-full">
                  <badge.icon className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-medium">{badge.name}</h4>
                  <p className="text-sm text-zinc-400">{badge.description}</p>
                  <p className="text-xs text-zinc-500 mt-1">Obtenu le {badge.date}</p>
                </div>
              </div>
            ))}
            {/* Badge verrouillé */}
            <div className="bg-zinc-800 rounded-lg p-4 flex items-start gap-3 opacity-50">
              <div className="bg-zinc-700 p-3 rounded-full">
                <Trophy className="h-6 w-6 text-zinc-500" />
              </div>
              <div>
                <h4 className="font-medium">Champion</h4>
                <p className="text-sm text-zinc-400">Atteindre le niveau 10</p>
                <p className="text-xs text-zinc-500 mt-1">Non débloqué</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 