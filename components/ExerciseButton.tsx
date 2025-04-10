"use client"

import { Button } from "@/components/ui/button"
import type { BodyPart } from "./Shadow"
import { motion } from "framer-motion"
import { Dumbbell, MonitorIcon as Running, StretchVerticalIcon as Stretching, SpaceIcon as Yoga } from "lucide-react"

interface ExerciseButtonProps {
  bodyPart: BodyPart
  onClick: () => void
  disabled?: boolean
}

// Mapping des icônes par partie du corps
const iconMap = {
  legs: Running,
  arms: Dumbbell,
  torso: Stretching,
  abs: Yoga,
}

// Mapping des noms d'exercices par partie du corps
const exerciseNames = {
  legs: "Squats",
  arms: "Biceps Curls",
  torso: "Push-ups",
  abs: "Crunches",
}

export default function ExerciseButton({ bodyPart, onClick, disabled = false }: ExerciseButtonProps) {
  const Icon = iconMap[bodyPart]

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button onClick={onClick} disabled={disabled} className="flex items-center gap-2 h-12 px-4" variant="outline">
        <Icon className="w-5 h-5" />
        <span>{exerciseNames[bodyPart]}</span>
      </Button>
    </motion.div>
  )
}
