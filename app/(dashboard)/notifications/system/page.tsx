"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings } from "lucide-react"

export default function SystemNotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Notifications système</h1>
        <p className="text-zinc-400">Consultez vos notifications système</p>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="h-5 w-5 mr-2 text-emerald-500" />
            Alertes système
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Vos notifications système
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Ici, vous pouvez ajouter un composant de liste de notifications système */}
            <p className="text-zinc-400">Aucune notification système pour le moment</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 