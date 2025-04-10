"use client"

import * as React from "react"
import { type ChartConfig, ChartContext } from "./chart-context"

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ config, children, className, ...props }, ref) => {
    return (
      <ChartContext.Provider value={{ config }}>
        <div ref={ref} className={className} {...props}>
          {children}
        </div>
        <style jsx global>{`
          :root {
            ${Object.entries(config).map(
              ([key, value]) => `
              --color-${key}: ${value.color};
            `,
            )}
          }
        `}</style>
      </ChartContext.Provider>
    )
  },
)
ChartContainer.displayName = "ChartContainer"

interface ChartTooltipProps extends React.ComponentPropsWithoutRef<typeof Tooltip> {}

const ChartTooltip = React.forwardRef<React.ElementRef<typeof Tooltip>, ChartTooltipProps>(({ ...props }, ref) => (
  <Tooltip ref={ref} {...props} />
))
ChartTooltip.displayName = "ChartTooltip"

interface ChartTooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  ({ className, ...props }, ref) => {
    const { config } = React.useContext(ChartContext)

    return (
      <div ref={ref} className="rounded-lg border bg-background p-2 shadow-md" {...props}>
        {props.children ? (
          props.children
        ) : (
          <TooltipContentContext.Consumer>
            {(context) => {
              if (!context?.payload?.length) {
                return null
              }

              return (
                <div className="grid gap-2">
                  <div className="flex items-center gap-1 text-sm font-medium">{context.label}</div>
                  <div className="grid gap-1">
                    {context.payload.map((payload, i) => {
                      const color = config[payload.dataKey]?.color

                      return (
                        <div key={i} className="flex items-center justify-between gap-2 text-sm">
                          <div className="flex items-center gap-1">
                            <div
                              className="h-2 w-2 rounded-full"
                              style={{
                                backgroundColor: color,
                              }}
                            />
                            <span className="text-muted-foreground">
                              {config[payload.dataKey]?.label ?? payload.name}
                            </span>
                          </div>
                          <div className="font-medium">{payload.value}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            }}
          </TooltipContentContext.Consumer>
        )}
      </div>
    )
  },
)
ChartTooltipContent.displayName = "ChartTooltipContent"

// Tooltip context for recharts
const TooltipContentContext = React.createContext<{
  active?: boolean
  payload?: Array<{
    value: string
    name: string
    dataKey: string
  }>
  label?: string
} | null>(null)

// Re-export recharts components
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
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

export {
  Area,
  Bar,
  CartesianGrid,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  TooltipContentContext,
  Tooltip,
  XAxis,
  YAxis,
}
