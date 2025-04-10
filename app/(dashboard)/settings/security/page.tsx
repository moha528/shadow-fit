"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Shield } from "lucide-react"

export default function SettingsSecurityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Sécurité</h1>
        <p className="text-zinc-400">Gérez la sécurité de votre compte</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="h-5 w-5 mr-2 text-emerald-500" />
              Mot de passe
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Modifiez votre mot de passe
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
              Changer le mot de passe
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-emerald-500" />
              Sécurité
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Options de sécurité avancées
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                Activer l'authentification à deux facteurs
              </Button>
              <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                Gérer les appareils connectés
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 