"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Bell, Smartphone, Mail } from "lucide-react"

export default function SettingsNotificationsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [marketingEmails, setMarketingEmails] = useState(false)
  const [workoutReminders, setWorkoutReminders] = useState(true)
  const [achievementAlerts, setAchievementAlerts] = useState(true)
  const [progressUpdates, setProgressUpdates] = useState(true)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
        <p className="text-zinc-400">Gérez vos préférences de notifications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-emerald-500" />
              Notifications par email
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Contrôlez les notifications que vous recevez par email
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Notifications générales</Label>
                    <p className="text-sm text-zinc-400">Recevoir des notifications par email</p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                    className="data-[state=checked]:bg-emerald-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="workout-reminders">Rappels d'entraînement</Label>
                    <p className="text-sm text-zinc-400">Rappels pour vos séances programmées</p>
                  </div>
                  <Switch
                    id="workout-reminders"
                    checked={workoutReminders}
                    onCheckedChange={setWorkoutReminders}
                    className="data-[state=checked]:bg-emerald-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="achievement-alerts">Alertes de réalisations</Label>
                    <p className="text-sm text-zinc-400">Notifications pour vos badges et objectifs</p>
                  </div>
                  <Switch
                    id="achievement-alerts"
                    checked={achievementAlerts}
                    onCheckedChange={setAchievementAlerts}
                    className="data-[state=checked]:bg-emerald-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="progress-updates">Mises à jour de progression</Label>
                    <p className="text-sm text-zinc-400">Résumés hebdomadaires de vos performances</p>
                  </div>
                  <Switch
                    id="progress-updates"
                    checked={progressUpdates}
                    onCheckedChange={setProgressUpdates}
                    className="data-[state=checked]:bg-emerald-500"
                  />
                </div>
              </div>

              <div className="border-t border-zinc-800 pt-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketing-emails">Emails marketing</Label>
                    <p className="text-sm text-zinc-400">Recevoir des offres et promotions</p>
                  </div>
                  <Switch
                    id="marketing-emails"
                    checked={marketingEmails}
                    onCheckedChange={setMarketingEmails}
                    className="data-[state=checked]:bg-emerald-500"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Smartphone className="h-5 w-5 mr-2 text-emerald-500" />
              Notifications push
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Contrôlez les notifications push sur votre appareil
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-notifications">Notifications push</Label>
                    <p className="text-sm text-zinc-400">Recevoir des notifications sur votre appareil</p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={pushNotifications}
                    onCheckedChange={setPushNotifications}
                    className="data-[state=checked]:bg-emerald-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-workout-reminders">Rappels d'entraînement</Label>
                    <p className="text-sm text-zinc-400">Rappels pour vos séances programmées</p>
                  </div>
                  <Switch
                    id="push-workout-reminders"
                    checked={workoutReminders}
                    onCheckedChange={setWorkoutReminders}
                    className="data-[state=checked]:bg-emerald-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-achievement-alerts">Alertes de réalisations</Label>
                    <p className="text-sm text-zinc-400">Notifications pour vos badges et objectifs</p>
                  </div>
                  <Switch
                    id="push-achievement-alerts"
                    checked={achievementAlerts}
                    onCheckedChange={setAchievementAlerts}
                    className="data-[state=checked]:bg-emerald-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-progress-updates">Mises à jour de progression</Label>
                    <p className="text-sm text-zinc-400">Résumés hebdomadaires de vos performances</p>
                  </div>
                  <Switch
                    id="push-progress-updates"
                    checked={progressUpdates}
                    onCheckedChange={setProgressUpdates}
                    className="data-[state=checked]:bg-emerald-500"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 