import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface MetricColorizationProps {
  value: number
  children: React.ReactNode
  thresholdCritical?: number
  thresholdWarning?: number
}

/**
 * This component renders a container that wraps a given metric's icon. The container is colorized based on the metric's value and thresholds.
 * @param value The value of the metric that is used to determine the color of the container (red, yellow, green).
 * @param children The icon that represents the metric.
 * @param thresholdCritical The value that is used to determine if the metric is critical (red).
 * @param thresholdWarning The value that is used to determine if the metric is in a warning state (yellow).
 */
export default function MetricColorization({ value, children, thresholdCritical, thresholdWarning }: MetricColorizationProps) {
  /**
   * This function determines the color of the container based on the given metric value.
   */
  const getColor = () => {
    if (value <= (thresholdCritical ?? 0.5)) return 'ring-red-700/40 bg-red-600/10 dark:ring-red-400/80 dark:bg-red-400/15'
    if (value <= (thresholdWarning ?? 0.75)) return 'ring-yellow-700/40 bg-yellow-600/10 dark:ring-yellow-400/80 dark:bg-yellow-400/15'
    return 'ring-green-700/40 bg-green-600/10 dark:ring-green-400/80 dark:bg-green-400/15'
  }

  return <div className={twMerge('p-2 rounded-full ring-2 size-11 flex justify-center items-center', getColor())}>{children}</div>
}
