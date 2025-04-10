"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target } from "lucide-react"

export default function ProgressGoalsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Objectifs</h1>
        <p className="text-zinc-400">Définissez et suivez vos objectifs de progression</p>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="h-5 w-5 mr-2 text-emerald-500" />
            Mes objectifs
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Suivez votre progression vers vos objectifs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Ici, vous pouvez ajouter un composant de liste d'objectifs */}
            <p className="text-zinc-400">Aucun objectif défini pour le moment</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 