"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Upload } from "lucide-react"

export default function ProfileInfoPage() {
  const [isEditing, setIsEditing] = useState(false)

  // Données utilisateur fictives
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "Janvier 2023",
    level: 8,
    workouts: 24,
    achievements: 12,
    bio: "Passionné de fitness et de musculation. Je m'entraîne 4 fois par semaine et je suis toujours à la recherche de nouveaux défis.",
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Informations du profil</h1>
        <p className="text-zinc-400">Gérez vos informations personnelles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-zinc-900 border-zinc-800 md:col-span-1">
          <CardHeader>
            <CardTitle>Photo de profil</CardTitle>
            <CardDescription className="text-zinc-400">
              Votre photo visible par les autres utilisateurs
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Avatar className="h-32 w-32 mb-4">
              <AvatarFallback className="bg-emerald-500/10 text-emerald-500 text-4xl">JD</AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
              <Upload className="h-4 w-4 mr-2" />
              Changer la photo
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800 md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Informations personnelles</CardTitle>
              <CardDescription className="text-zinc-400">Vos informations de profil</CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Annuler" : "Modifier"}
            </Button>
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
              </form>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-zinc-400">Nom</p>
                    <p>{user.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-400">Email</p>
                    <p>{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-400">Membre depuis</p>
                    <p>{user.joinDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-400">Niveau</p>
                    <p>{user.level}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-400">Biographie</p>
                  <p className="text-sm mt-1">{user.bio}</p>
                </div>
              </div>
            )}
          </CardContent>
          {isEditing && (
            <CardFooter>
              <Button
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => setIsEditing(false)}
              >
                Enregistrer les modifications
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  )
}