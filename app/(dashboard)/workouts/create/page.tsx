"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"

export default function CreateWorkoutPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Créer un entraînement</h1>
        <p className="text-zinc-400">Créez un nouvel entraînement personnalisé</p>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Plus className="h-5 w-5 mr-2 text-emerald-500" />
            Nouvel entraînement
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Configurez votre entraînement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Ici, vous pouvez ajouter un formulaire de création d'entraînement */}
            <p className="text-zinc-400">Formulaire de création d'entraînement à venir</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 