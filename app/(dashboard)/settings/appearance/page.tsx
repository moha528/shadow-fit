"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Moon } from "lucide-react"

export default function SettingsAppearancePage() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Apparence</h1>
        <p className="text-zinc-400">Personnalisez l'apparence de l'application</p>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Moon className="h-5 w-5 mr-2 text-emerald-500" />
            Thème
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Personnalisez l'apparence de l'application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="dark-mode">Mode sombre</Label>
                <p className="text-sm text-zinc-400">Activer le mode sombre pour l'interface</p>
              </div>
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
                className="data-[state=checked]:bg-emerald-500"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 