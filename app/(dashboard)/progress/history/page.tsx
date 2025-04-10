"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { History } from "lucide-react"

export default function ProgressHistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Historique de progression</h1>
        <p className="text-zinc-400">Consultez l'historique détaillé de vos progrès</p>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="flex items-center">
            <History className="h-5 w-5 mr-2 text-emerald-500" />
            Évolution dans le temps
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Votre progression au fil des semaines
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Ici, vous pouvez ajouter un composant de graphique d'évolution */}
            <p className="text-zinc-400">Aucune donnée d'historique pour le moment</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 