"use client"

import { useState } from "react"
import { motion } from "framer-motion"

// Définition des zones corporelles et leurs états
export type BodyPart = "legs" | "arms" | "torso" | "abs"
export type TrainingLevel = "untrained" | "trained" | "overtrained"

export interface BodyState {
  legs: TrainingLevel
  arms: TrainingLevel
  torso: TrainingLevel
  abs: TrainingLevel
}

// Props du composant Shadow
interface ShadowProps {
  bodyState: BodyState
  onBodyPartClick?: (part: BodyPart) => void
  className?: string
}

// Fonction pour déterminer la couleur en fonction du niveau d'entraînement
const getColorForTrainingLevel = (level: TrainingLevel): string => {
  switch (level) {
    case "untrained":
      return "#6B7280" // Gris (gray-500)
    case "trained":
      return "#10B981" // Vert (emerald-500)
    case "overtrained":
      return "#EF4444" // Rouge (red-500)
  }
}

export default function Shadow({ bodyState, onBodyPartClick, className = "" }: ShadowProps) {
  // État pour suivre les parties du corps survolées
  const [hoveredPart, setHoveredPart] = useState<BodyPart | null>(null)

  // Fonction pour gérer le clic sur une partie du corps
  const handleClick = (part: BodyPart) => {
    if (onBodyPartClick) {
      onBodyPartClick(part)
    }
  }

  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Tête (statique) */}
        <circle cx="100" cy="50" r="30" fill="#4B5563" />

        {/* Torse */}
        <motion.path
          d="M70 80 L70 180 L130 180 L130 80 Z"
          fill={getColorForTrainingLevel(bodyState.torso)}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => handleClick("torso")}
          onMouseEnter={() => setHoveredPart("torso")}
          onMouseLeave={() => setHoveredPart(null)}
          style={{ cursor: "pointer" }}
        />

        {/* Abdominaux */}
        <motion.path
          d="M70 180 L70 230 L130 230 L130 180 Z"
          fill={getColorForTrainingLevel(bodyState.abs)}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => handleClick("abs")}
          onMouseEnter={() => setHoveredPart("abs")}
          onMouseLeave={() => setHoveredPart(null)}
          style={{ cursor: "pointer" }}
        />

        {/* Bras gauche */}
        <motion.path
          d="M70 80 L40 150 L55 160 L70 100 Z"
          fill={getColorForTrainingLevel(bodyState.arms)}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => handleClick("arms")}
          onMouseEnter={() => setHoveredPart("arms")}
          onMouseLeave={() => setHoveredPart(null)}
          style={{ cursor: "pointer" }}
        />

        {/* Bras droit */}
        <motion.path
          d="M130 80 L160 150 L145 160 L130 100 Z"
          fill={getColorForTrainingLevel(bodyState.arms)}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => handleClick("arms")}
          onMouseEnter={() => setHoveredPart("arms")}
          onMouseLeave={() => setHoveredPart(null)}
          style={{ cursor: "pointer" }}
        />

        {/* Jambe gauche */}
        <motion.path
          d="M70 230 L60 350 L90 350 L90 230 Z"
          fill={getColorForTrainingLevel(bodyState.legs)}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => handleClick("legs")}
          onMouseEnter={() => setHoveredPart("legs")}
          onMouseLeave={() => setHoveredPart(null)}
          style={{ cursor: "pointer" }}
        />

        {/* Jambe droite */}
        <motion.path
          d="M110 230 L110 350 L140 350 L130 230 Z"
          fill={getColorForTrainingLevel(bodyState.legs)}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => handleClick("legs")}
          onMouseEnter={() => setHoveredPart("legs")}
          onMouseLeave={() => setHoveredPart(null)}
          style={{ cursor: "pointer" }}
        />
      </svg>

      {/* Tooltip qui apparaît au survol */}
      {hoveredPart && (
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 bg-zinc-900 border border-zinc-800 text-white px-3 py-1 rounded-md text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {hoveredPart.charAt(0).toUpperCase() + hoveredPart.slice(1)}: {bodyState[hoveredPart]}
        </motion.div>
      )}
    </div>
  )
}
