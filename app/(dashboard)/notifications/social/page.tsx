"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"

export default function SocialNotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Notifications sociales</h1>
        <p className="text-zinc-400">Consultez vos notifications sociales</p>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="h-5 w-5 mr-2 text-emerald-500" />
            Interactions sociales
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Vos notifications sociales
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Ici, vous pouvez ajouter un composant de liste de notifications sociales */}
            <p className="text-zinc-400">Aucune notification sociale pour le moment</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 