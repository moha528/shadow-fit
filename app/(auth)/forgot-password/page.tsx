"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dumbbell } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique de récupération de mot de passe ici
    console.log({ email })
    setIsSubmitted(true)
  }

  return (
    <div className="flex min-h-screen">
      {/* Image de fond (côté gauche) */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-r from-emerald-500 to-emerald-700">
        <div className="absolute inset-0 flex flex-col justify-center items-center p-12">
          <div className="max-w-md text-white">
            <h1 className="text-4xl font-bold mb-6">Mot de passe oublié ?</h1>
            <p className="text-xl mb-8">Pas de panique ! Nous allons vous aider à récupérer l'accès à votre compte.</p>
          </div>
        </div>
      </div>

      {/* Formulaire de récupération de mot de passe (côté droit) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-2 font-bold text-2xl mb-2">
              <Dumbbell className="h-6 w-6 text-emerald-500" />
              <span>ShadowFit</span>
            </div>
            <h1 className="text-2xl font-bold">Réinitialiser votre mot de passe</h1>
            <p className="text-gray-500 mt-2">
              Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe
            </p>
          </div>

          {isSubmitted ? (
            <Alert className="bg-emerald-50 border-emerald-200">
              <AlertDescription>
                Si un compte existe avec l'adresse email <strong>{email}</strong>, vous recevrez un email avec les
                instructions pour réinitialiser votre mot de passe.
              </AlertDescription>
            </Alert>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="exemple@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
                Envoyer les instructions
              </Button>
            </form>
          )}

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              <Link href="/login" className="text-emerald-600 hover:underline">
                Retour à la connexion
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
