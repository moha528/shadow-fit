"use client"

import * as React from "react"

export interface ChartConfig {
  [key: string]: {
    label: string
    color: string
  }
}

export const ChartContext = React.createContext<{
  config: ChartConfig
}>({
  config: {},
})
