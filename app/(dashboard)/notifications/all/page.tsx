"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell } from "lucide-react"

export default function AllNotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Toutes les notifications</h1>
        <p className="text-zinc-400">Consultez toutes vos notifications</p>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="h-5 w-5 mr-2 text-emerald-500" />
            Notifications récentes
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Vos dernières notifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Ici, vous pouvez ajouter un composant de liste de notifications */}
            <p className="text-zinc-400">Aucune notification pour le moment</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 