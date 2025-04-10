"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Book } from "lucide-react"

export default function WorkoutLibraryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Bibliothèque d'entraînements</h1>
        <p className="text-zinc-400">Explorez les entraînements disponibles</p>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Book className="h-5 w-5 mr-2 text-emerald-500" />
            Entraînements disponibles
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Parcourez notre collection d'entraînements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Ici, vous pouvez ajouter un composant de grille d'entraînements */}
            <p className="text-zinc-400">Aucun entraînement disponible pour le moment</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 