"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { BodyPart, BodyState } from "./Shadow"
import { motion } from "framer-motion"

interface TrainingStatsProps {
  bodyState: BodyState
  trainingCounts: Record<BodyPart, number>
}

// Fonction pour calculer le pourcentage d'entraînement
const calculateTrainingPercentage = (part: BodyPart, state: BodyState, counts: Record<BodyPart, number>): number => {
  if (state[part] === "untrained") return counts[part] * 10 // 10% par entraînement
  if (state[part] === "trained") return 100
  return 100 // Overtrained est aussi à 100%
}

// Fonction pour déterminer la couleur de la barre de progression
const getProgressColor = (state: TrainingStatsProps["bodyState"][BodyPart]): string => {
  switch (state) {
    case "untrained":
      return "bg-gray-400"
    case "trained":
      return "bg-emerald-500"
    case "overtrained":
      return "bg-red-500"
  }
}

export default function TrainingStats({ bodyState, trainingCounts }: TrainingStatsProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Training Statistics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {(Object.keys(bodyState) as BodyPart[]).map((part) => (
          <div key={part} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium capitalize">{part}</span>
              <span className="text-xs text-muted-foreground">{trainingCounts[part]} exercises</span>
            </div>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Progress
                value={calculateTrainingPercentage(part, bodyState, trainingCounts)}
                className={`h-2 ${getProgressColor(bodyState[part])}`}
              />
            </motion.div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
