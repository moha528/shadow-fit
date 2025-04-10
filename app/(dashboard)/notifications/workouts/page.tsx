"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell } from "lucide-react"

export default function WorkoutNotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Notifications d'entraînement</h1>
        <p className="text-zinc-400">Consultez vos notifications liées aux entraînements</p>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Dumbbell className="h-5 w-5 mr-2 text-emerald-500" />
            Rappels et mises à jour
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Vos notifications d'entraînement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Ici, vous pouvez ajouter un composant de liste de notifications d'entraînement */}
            <p className="text-zinc-400">Aucune notification d'entraînement pour le moment</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 