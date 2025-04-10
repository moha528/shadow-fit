"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ProfileStatsPage() {
  // Données utilisateur fictives
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "Janvier 2023",
    level: 8,
    workouts: 24,
    achievements: 12,
    bio: "Passionné de fitness et de musculation. Je m'entraîne 4 fois par semaine et je suis toujours à la recherche de nouveaux défis.",
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Statistiques</h1>
        <p className="text-zinc-400">Vos performances et progression</p>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Statistiques d'entraînement</CardTitle>
          <CardDescription className="text-zinc-400">
            Résumé de vos performances et de votre progression
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-800 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-emerald-500 mb-2">{user.workouts}</div>
              <p className="text-zinc-400">Entraînements terminés</p>
            </div>
            <div className="bg-zinc-800 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-emerald-500 mb-2">{user.level}</div>
              <p className="text-zinc-400">Niveau actuel</p>
            </div>
            <div className="bg-zinc-800 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-emerald-500 mb-2">{user.achievements}</div>
              <p className="text-zinc-400">Badges débloqués</p>
            </div>
          </div>
          <div className="mt-6 bg-zinc-800 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Historique d'activité</h3>
            <div className="h-[200px] flex items-center justify-center">
              <p className="text-zinc-400">Graphique d'activité</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 