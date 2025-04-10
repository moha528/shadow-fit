"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, History } from "lucide-react"

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Mes progrès</h1>
        <p className="text-zinc-400">Suivez votre évolution et vos performances</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-emerald-500" />
              Résumé de progression
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Vue d'ensemble de vos progrès
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Ici, vous pouvez ajouter un composant de résumé des progrès */}
              <p className="text-zinc-400">Aucune donnée de progression pour le moment</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2 text-emerald-500" />
              Objectifs en cours
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Vos objectifs actifs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Ici, vous pouvez ajouter un composant de liste d'objectifs en cours */}
              <p className="text-zinc-400">Aucun objectif en cours pour le moment</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <History className="h-5 w-5 mr-2 text-emerald-500" />
              Dernières activités
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Vos activités récentes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Ici, vous pouvez ajouter un composant de liste des dernières activités */}
              <p className="text-zinc-400">Aucune activité récente pour le moment</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
