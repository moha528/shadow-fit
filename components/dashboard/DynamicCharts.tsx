"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

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

const workoutDistributionData = [
  { name: "Cardio", value: 35, color: "#10b981" },
  { name: "Force", value: 45, color: "#3b82f6" },
  { name: "Flexibilité", value: 20, color: "#8b5cf6" },
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

interface DynamicChartsProps {
  type: "weeklyProgress" | "workoutDistribution" | "bodyParts" | "heartRate"
}

export default function DynamicCharts({ type }: DynamicChartsProps) {
  try {
    switch (type) {
      case "weeklyProgress":
        return (
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyProgressData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#222", borderColor: "#444" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="calories"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#colorCalories)"
                  name="Calories brûlées"
                />
                <Line
                  type="monotone"
                  dataKey="intensity"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  name="Intensité (%)"
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )

      case "workoutDistribution":
        return (
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={workoutDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {workoutDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: "#222", borderColor: "#444" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )

      case "bodyParts":
        return (
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bodyPartsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#222", borderColor: "#444" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Legend />
                <Bar dataKey="trained" name="Séances effectuées" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="target" name="Objectif" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )

      case "heartRate":
        return (
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={heartRateData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="time" stroke="#666" />
                <YAxis stroke="#666" domain={[50, 100]} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#222", borderColor: "#444" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="rate"
                  name="Fréquence cardiaque (bpm)"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6, stroke: "#ef4444", strokeWidth: 2, fill: "#ef4444" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )

      default:
        return (
          <div className="w-full h-[200px] flex items-center justify-center bg-zinc-800 rounded-md">
            <div className="text-zinc-400">Type de graphique non reconnu</div>
          </div>
        )
    }
  } catch (error) {
    console.error("Erreur lors du rendu des graphiques:", error)
    return (
      <div className="w-full h-[200px] flex items-center justify-center bg-zinc-800 rounded-md">
        <div className="text-red-400">Erreur lors du chargement du graphique</div>
      </div>
    )
  }
}
