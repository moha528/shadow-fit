"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { User, Mail, UserCircle } from "lucide-react"

export default function SettingsAccountPage() {
  const [language, setLanguage] = useState("fr")
  const [units, setUnits] = useState("metric")
  const [isEditing, setIsEditing] = useState(false)

  // Données utilisateur fictives
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Passionné de fitness et de musculation. Je m'entraîne 4 fois par semaine et je suis toujours à la recherche de nouveaux défis.",
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Paramètres du compte</h1>
        <p className="text-zinc-400">Gérez les informations de base de votre compte</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserCircle className="h-5 w-5 mr-2 text-emerald-500" />
              Informations personnelles
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Modifiez vos informations personnelles
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isEditing ? (
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    defaultValue={user.name}
                    className="bg-zinc-800 border-zinc-700 focus-visible:ring-emerald-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue={user.email}
                    className="bg-zinc-800 border-zinc-700 focus-visible:ring-emerald-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Biographie</Label>
                  <textarea
                    id="bio"
                    rows={4}
                    defaultValue={user.bio}
                    className="w-full rounded-md bg-zinc-800 border border-zinc-700 p-2 text-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                    onClick={() => setIsEditing(false)}
                  >
                    Annuler
                  </Button>
                  <Button
                    type="submit"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                    onClick={() => setIsEditing(false)}
                  >
                    Enregistrer
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Nom complet</Label>
                  <p>{user.name}</p>
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <p>{user.email}</p>
                </div>
                <div className="space-y-2">
                  <Label>Biographie</Label>
                  <p className="text-sm text-zinc-400">{user.bio}</p>
                </div>
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                  onClick={() => setIsEditing(true)}
                >
                  Modifier
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-5 w-5 mr-2 text-emerald-500" />
              Préférences
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Gérez les préférences de votre compte
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language">Langue</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="bg-zinc-800 border-zinc-700">
                  <SelectValue placeholder="Sélectionnez une langue" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-zinc-800">
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="units">Système d'unités</Label>
              <Select value={units} onValueChange={setUnits}>
                <SelectTrigger className="bg-zinc-800 border-zinc-700">
                  <SelectValue placeholder="Sélectionnez un système d'unités" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-zinc-800">
                  <SelectItem value="metric">Métrique (kg, cm)</SelectItem>
                  <SelectItem value="imperial">Impérial (lb, in)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 