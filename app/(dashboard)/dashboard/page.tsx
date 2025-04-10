"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, ChevronRight, Dumbbell, Flame, Heart, Trophy, TrendingUp, Clock, BarChart3 } from "lucide-react"
import Shadow, { type BodyState } from "@/components/Shadow"
import { motion } from "framer-motion"
import {
  Bar,
  CartesianGrid,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

export default function DashboardPage() {
  // État du corps pour la silhouette
  const [bodyState, setBodyState] = useState<BodyState>({
    legs: "trained",
    arms: "untrained",
    torso: "trained",
    abs: "overtrained",
  })

  // Statistiques d'entraînement
  const stats = [
    { label: "Séances", value: "24", icon: Dumbbell, change: "+3", changeType: "positive" },
    { label: "Calories", value: "12,450", icon: Flame, change: "+8%", changeType: "positive" },
    { label: "Minutes", value: "840", icon: Calendar, change: "+12%", changeType: "positive" },
    { label: "Niveau", value: "8", icon: Trophy, change: "+1", changeType: "positive" },
  ]

  // Entraînements récents
  const recentWorkouts = [
    { name: "Full Body", date: "Aujourd'hui", duration: "45 min", intensity: "Élevée" },
    { name: "Haut du corps", date: "Hier", duration: "30 min", intensity: "Moyenne" },
    { name: "Cardio", date: "Il y a 3 jours", duration: "20 min", intensity: "Élevée" },
  ]

  // Objectifs
  const goals = [
    { name: "Perte de poids", progress: 65, target: "5kg", current: "3.2kg" },
    { name: "Musculation", progress: 40, target: "3 séances/sem", current: "2 séances/sem" },
    { name: "Cardio", progress: 80, target: "150 min/sem", current: "120 min/sem" },
  ]

  // Données pour les graphiques
  const weeklyProgressData = [
    { name: "Lun", calories: 450, minutes: 30, intensity: 65 },
    { name: "Mar", calories: 520, minutes: 45, intensity: 75 },
    { name: "Mer", calories: 0, minutes: 0, intensity: 0 },
    { name: "Jeu", calories: 680, minutes: 60, intensity: 85 },
    { name: "Ven", calories: 410, minutes: 35, intensity: 60 },
    { name: "Sam", calories: 720, minutes: 65, intensity: 90 },
    { name: "Dim", calories: 350, minutes: 25, intensity: 50 },
  ]

  const bodyPartsData = [
    { name: "Jambes", trained: 8, target: 10 },
    { name: "Bras", trained: 5, target: 8 },
    { name: "Torse", trained: 7, target: 8 },
    { name: "Abdos", trained: 6, target: 6 },
    { name: "Dos", trained: 4, target: 7 },
  ]

  const heartRateData = [
    { time: "00:00", rate: 62 },
    { time: "04:00", rate: 58 },
    { time: "08:00", rate: 75 },
    { time: "12:00", rate: 85 },
    { time: "16:00", rate: 78 },
    { time: "20:00", rate: 72 },
    { time: "23:59", rate: 65 },
  ]

  const workoutDistributionData = [
    { name: "Cardio", value: 35 },
    { name: "Force", value: 45 },
    { name: "Flexibilité", value: 20 },
  ]

  return (
    <div className="space-y-6">
      {/* En-tête de la page */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Tableau de bord</h1>
          <p className="text-zinc-400">
            Bienvenue, John ! Voici un aperçu de votre progression et de vos activités récentes.
          </p>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-zinc-400">{stat.label}</p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                  </div>
                  <div className="bg-emerald-500/20 p-2 rounded-full">
                    <stat.icon className="h-5 w-5 text-emerald-500" />
                  </div>
                </div>
                <div className="mt-4">
                  <p
                    className={`text-xs flex items-center ${
                      stat.changeType === "positive" ? "text-emerald-500" : "text-red-500"
                    }`}
                  >
                    {stat.changeType === "positive" ? (
                      <TrendingUp className="mr-1 h-3 w-3" />
                    ) : (
                      <TrendingUp className="mr-1 h-3 w-3 transform rotate-180" />
                    )}
                    {stat.change} depuis la semaine dernière
                  </p>
                </div>
                {/* Mini graphique stylisé manuellement */}
                <div className="mt-4 h-8 w-full">
                  <div className="relative h-full w-full">
                    <div className="absolute bottom-0 left-0 w-1/7 h-3 bg-emerald-500/30 rounded-sm"></div>
                    <div className="absolute bottom-0 left-1/7 w-1/7 h-5 bg-emerald-500/40 rounded-sm"></div>
                    <div className="absolute bottom-0 left-2/7 w-1/7 h-2 bg-emerald-500/20 rounded-sm"></div>
                    <div className="absolute bottom-0 left-3/7 w-1/7 h-6 bg-emerald-500/50 rounded-sm"></div>
                    <div className="absolute bottom-0 left-4/7 w-1/7 h-4 bg-emerald-500/35 rounded-sm"></div>
                    <div className="absolute bottom-0 left-5/7 w-1/7 h-7 bg-emerald-500/60 rounded-sm"></div>
                    <div className="absolute bottom-0 left-6/7 w-1/7 h-3 bg-emerald-500/30 rounded-sm"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Contenu principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Colonne gauche */}
        <div className="lg:col-span-2 space-y-6">
          {/* Onglets */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4 bg-zinc-900 border border-zinc-800">
              <TabsTrigger value="overview" className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white">
                Aperçu
              </TabsTrigger>
              <TabsTrigger value="workouts" className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white">
                Entraînements
              </TabsTrigger>
              <TabsTrigger value="goals" className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white">
                Objectifs
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle>Progression hebdomadaire</CardTitle>
                  <CardDescription className="text-zinc-400">Votre activité des 7 derniers jours</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    className="h-[300px]"
                    config={{
                      calories: {
                        label: "Calories brûlées",
                        color: "hsl(var(--chart-1))",
                      },
                      intensity: {
                        label: "Intensité (%)",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={weeklyProgressData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Line type="monotone" dataKey="calories" stroke="var(--color-calories)" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="intensity" stroke="var(--color-intensity)" />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="workouts">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle>Entraînements récents</CardTitle>
                  <CardDescription className="text-zinc-400">Vos dernières séances d'entraînement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentWorkouts.map((workout, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-emerald-500/20 p-2 rounded-full">
                            <Dumbbell className="h-5 w-5 text-emerald-500" />
                          </div>
                          <div>
                            <h4 className="font-medium">{workout.name}</h4>
                            <p className="text-sm text-zinc-400">{workout.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{workout.duration}</p>
                          <p className="text-sm text-zinc-400">Intensité: {workout.intensity}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <ChartContainer
                      className="h-[250px]"
                      config={{
                        trained: {
                          label: "Séances effectuées",
                          color: "hsl(var(--chart-1))",
                        },
                        target: {
                          label: "Objectif",
                          color: "hsl(var(--chart-2))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={bodyPartsData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Bar dataKey="trained" fill="var(--color-trained)" />
                          <Bar dataKey="target" fill="var(--color-target)" />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                      Voir tous les entraînements
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="goals">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle>Vos objectifs</CardTitle>
                  <CardDescription className="text-zinc-400">Progression vers vos objectifs actuels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {goals.map((goal, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100%" }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">{goal.name}</h4>
                          <p className="text-sm">
                            {goal.current} / {goal.target}
                          </p>
                        </div>
                        <Progress
                          value={goal.progress}
                          className="h-2 bg-zinc-800"
                          indicatorClassName="bg-emerald-500"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <ChartContainer
                      className="h-[250px]"
                      config={{
                        value: {
                          label: "Distribution",
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={workoutDistributionData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="var(--color-value)"
                            label
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                      Gérer mes objectifs
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Statistiques de santé */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>Statistiques de santé</CardTitle>
              <CardDescription className="text-zinc-400">Suivi de vos indicateurs de santé</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center p-4 bg-zinc-800 rounded-lg"
                >
                  <div className="bg-red-500/20 p-2 rounded-full mb-2">
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                  <h4 className="font-medium">Fréquence cardiaque</h4>
                  <p className="text-2xl font-bold">72 bpm</p>
                  <p className="text-xs text-zinc-400">Moyenne au repos</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex flex-col items-center p-4 bg-zinc-800 rounded-lg"
                >
                  <div className="bg-blue-500/20 p-2 rounded-full mb-2">
                    <BarChart3 className="h-5 w-5 text-blue-500" />
                  </div>
                  <h4 className="font-medium">Poids</h4>
                  <p className="text-2xl font-bold">78 kg</p>
                  <p className="text-xs text-zinc-400">-2kg ce mois-ci</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex flex-col items-center p-4 bg-zinc-800 rounded-lg"
                >
                  <div className="bg-purple-500/20 p-2 rounded-full mb-2">
                    <Clock className="h-5 w-5 text-purple-500" />
                  </div>
                  <h4 className="font-medium">Sommeil</h4>
                  <p className="text-2xl font-bold">7.2 h</p>
                  <p className="text-xs text-zinc-400">Moyenne quotidienne</p>
                </motion.div>
              </div>
              <div className="mt-6">
                <ChartContainer
                  className="h-[200px]"
                  config={{
                    rate: {
                      label: "Fréquence cardiaque (bpm)",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={heartRateData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis domain={[50, 100]} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="rate"
                        stroke="var(--color-rate)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Colonne droite */}
        <div className="space-y-6">
          {/* Shadow */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Votre Shadow</CardTitle>
                <CardDescription className="text-zinc-400">État actuel de votre corps</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Shadow bodyState={bodyState} className="h-[350px] w-[175px]" />
              </CardContent>
            </Card>
          </motion.div>

          {/* Prochains entraînements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Prochains entraînements</CardTitle>
                <CardDescription className="text-zinc-400">Vos séances planifiées</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-3 bg-emerald-900/20 border border-emerald-800/30 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-500/20 p-2 rounded-full">
                        <Dumbbell className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Jambes</h4>
                        <p className="text-sm text-zinc-400">Demain, 18:00</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                      Détails
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-500/20 p-2 rounded-full">
                        <Dumbbell className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Haut du corps</h4>
                        <p className="text-sm text-zinc-400">Jeudi, 19:30</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                      Détails
                    </Button>
                  </motion.div>
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    Voir le calendrier
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Conseils */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Conseils personnalisés</CardTitle>
                <CardDescription className="text-zinc-400">Basés sur votre activité récente</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-3 bg-red-900/20 border border-red-800/30 rounded-lg"
                  >
                    <h4 className="font-medium text-red-400 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 mr-1"
                      >
                        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                      Attention
                    </h4>
                    <p className="text-sm mt-1 text-zinc-300">
                      Vos abdominaux sont surentraînés. Prenez 2-3 jours de repos pour cette zone.
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-3 bg-emerald-900/20 border border-emerald-800/30 rounded-lg"
                  >
                    <h4 className="font-medium text-emerald-400 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 mr-1"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      Bon travail
                    </h4>
                    <p className="text-sm mt-1 text-zinc-300">
                      Vos jambes et votre torse sont parfaitement entraînés. Continuez comme ça !
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg"
                  >
                    <h4 className="font-medium text-blue-400 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 mr-1"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                      Conseil
                    </h4>
                    <p className="text-sm mt-1 text-zinc-300">
                      Vos bras pourraient bénéficier d'un entraînement supplémentaire cette semaine.
                    </p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
