"use client"

import { useState } from "react"

interface MuscleMapProps {
  className?: string
  onMuscleClick?: (muscle: string) => void
}

export function MuscleMap({ className, onMuscleClick }: MuscleMapProps) {
  const [hoveredMuscle, setHoveredMuscle] = useState<string | null>(null)

  const handleMouseEnter = (muscle: string) => {
    setHoveredMuscle(muscle)
  }

  const handleMouseLeave = () => {
    setHoveredMuscle(null)
  }

  const handleClick = (muscle: string) => {
    onMuscleClick?.(muscle)
  }

  return (
    <svg
      viewBox="0 0 400 800"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tête et cou */}
      <path
        d="M200,50 C220,50 230,80 230,100 C230,120 220,150 200,150 C180,150 170,120 170,100 C170,80 180,50 200,50 Z"
        fill="url(#headGradient)"
        stroke="#4A5568"
        strokeWidth="2"
        onMouseEnter={() => handleMouseEnter("head")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick("head")}
        className="cursor-pointer transition-all hover:opacity-80"
      />

      {/* Épaules et trapèzes */}
      <path
        d="M150,150 L250,150 L240,200 L160,200 Z"
        fill="url(#shouldersGradient)"
        stroke="#4A5568"
        strokeWidth="2"
        onMouseEnter={() => handleMouseEnter("shoulders")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick("shoulders")}
        className="cursor-pointer transition-all hover:opacity-80"
      />

      {/* Pectoraux */}
      <path
        d="M160,200 C180,220 220,220 240,200 L240,250 C220,270 180,270 160,250 Z"
        fill="url(#chestGradient)"
        stroke="#4A5568"
        strokeWidth="2"
        onMouseEnter={() => handleMouseEnter("chest")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick("chest")}
        className="cursor-pointer transition-all hover:opacity-80"
      />

      {/* Abdominaux */}
      <path
        d="M160,250 L240,250 L240,300 C220,320 180,320 160,300 Z"
        fill="url(#absGradient)"
        stroke="#4A5568"
        strokeWidth="2"
        onMouseEnter={() => handleMouseEnter("abs")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick("abs")}
        className="cursor-pointer transition-all hover:opacity-80"
      />

      {/* Biceps */}
      <path
        d="M150,200 L130,250 L140,300 L160,250 Z"
        fill="url(#bicepsGradient)"
        stroke="#4A5568"
        strokeWidth="2"
        onMouseEnter={() => handleMouseEnter("biceps")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick("biceps")}
        className="cursor-pointer transition-all hover:opacity-80"
      />

      {/* Triceps */}
      <path
        d="M250,200 L270,250 L260,300 L240,250 Z"
        fill="url(#tricepsGradient)"
        stroke="#4A5568"
        strokeWidth="2"
        onMouseEnter={() => handleMouseEnter("triceps")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick("triceps")}
        className="cursor-pointer transition-all hover:opacity-80"
      />

      {/* Quadriceps */}
      <path
        d="M160,300 L240,300 L240,400 C220,420 180,420 160,400 Z"
        fill="url(#quadsGradient)"
        stroke="#4A5568"
        strokeWidth="2"
        onMouseEnter={() => handleMouseEnter("quads")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick("quads")}
        className="cursor-pointer transition-all hover:opacity-80"
      />

      {/* Ischio-jambiers */}
      <path
        d="M160,400 L240,400 L240,500 C220,520 180,520 160,500 Z"
        fill="url(#hamstringsGradient)"
        stroke="#4A5568"
        strokeWidth="2"
        onMouseEnter={() => handleMouseEnter("hamstrings")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick("hamstrings")}
        className="cursor-pointer transition-all hover:opacity-80"
      />

      {/* Mollets */}
      <path
        d="M160,500 L240,500 L240,550 C220,570 180,570 160,550 Z"
        fill="url(#calvesGradient)"
        stroke="#4A5568"
        strokeWidth="2"
        onMouseEnter={() => handleMouseEnter("calves")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick("calves")}
        className="cursor-pointer transition-all hover:opacity-80"
      />

      {/* Dos */}
      <path
        d="M150,150 L130,200 L130,300 L150,350 L250,350 L270,300 L270,200 L250,150 Z"
        fill="url(#backGradient)"
        stroke="#4A5568"
        strokeWidth="2"
        onMouseEnter={() => handleMouseEnter("back")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick("back")}
        className="cursor-pointer transition-all hover:opacity-80"
      />

      {/* Définitions des dégradés */}
      <defs>
        <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E0" />
        </linearGradient>
        <linearGradient id="shouldersGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6AD55" />
          <stop offset="100%" stopColor="#ED8936" />
        </linearGradient>
        <linearGradient id="chestGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F687B3" />
          <stop offset="100%" stopColor="#ED64A6" />
        </linearGradient>
        <linearGradient id="absGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#68D391" />
          <stop offset="100%" stopColor="#48BB78" />
        </linearGradient>
        <linearGradient id="bicepsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#63B3ED" />
          <stop offset="100%" stopColor="#4299E1" />
        </linearGradient>
        <linearGradient id="tricepsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#63B3ED" />
          <stop offset="100%" stopColor="#4299E1" />
        </linearGradient>
        <linearGradient id="quadsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6AD55" />
          <stop offset="100%" stopColor="#ED8936" />
        </linearGradient>
        <linearGradient id="hamstringsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F687B3" />
          <stop offset="100%" stopColor="#ED64A6" />
        </linearGradient>
        <linearGradient id="calvesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#68D391" />
          <stop offset="100%" stopColor="#48BB78" />
        </linearGradient>
        <linearGradient id="backGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9F7AEA" />
          <stop offset="100%" stopColor="#805AD5" />
        </linearGradient>
      </defs>

      {/* Légende */}
      {hoveredMuscle && (
        <text
          x="200"
          y="600"
          textAnchor="middle"
          fill="#E2E8F0"
          fontSize="14"
          className="font-medium"
        >
          {hoveredMuscle}
        </text>
      )}
    </svg>
  )
} 