import Link from 'next/link'
import Image from 'next/image'
import PowerPlantImage from '@/public/images/power-plant-image.png'
import { twMerge } from 'tailwind-merge'
import MetricColorization from '@/components/power-plants/MetricColorization'
import TemperatureSvg from '@/icons/TemperatureSvg'
import RpmSvg from '@/icons/RpmSvg'
import WaterLevelSvg from '@/icons/WaterLevelSvg'
import React from 'react'
import IconProps from '@/typings/icons/IconProps'
import PowerPlantProps from '@/typings/Shared/PowerPlant'

export interface PowerPlantPreviewProps extends PowerPlantProps {
  previewHref?: string
}

/**
 * This component renders a preview of a power plant that shows its name and id and three of the most important metrics. When clicked it navigates to the power plant's detail page.
 */
export default function PowerPlantPreview({ id, name, capacity, metric3, metric2, previewHref }: PowerPlantPreviewProps) {
  return (
    <Link
      href={previewHref ?? `/power-plants/${id}`}
      role='listitem'
      className='p-4 dark:bg-neutral-700/50 shadow-neutral-900 shadow-md rounded-md flex flex-col gap-8 dark:hover:bg-neutral-700 hover:cursor-pointer'>
      <div className='flex justify-between items-center '>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <span className='w-12 text-center tabular-nums p-2 rounded-md rounded-bl-[40%] dark:bg-blue-600/30'>#{id}</span>
      </div>
      <PowerPlantPreviewIcon className='size-20' />
      <div className='flex justify-evenly mb-2'>
        <MetricColorization value={capacity}>
          <TemperatureSvg className='size-7 dark:fill-neutral-200' />
        </MetricColorization>
        <MetricColorization value={metric2}>
          <RpmSvg className='size-7 dark:fill-neutral-300' />
        </MetricColorization>
        <MetricColorization value={metric3}>
          <WaterLevelSvg className='size-7 dark:fill-neutral-300' />
        </MetricColorization>
      </div>
    </Link>
  )
}

function PowerPlantPreviewIcon({ className }: IconProps) {
  const colorOptions = ['dark:bg-orange-400/30', 'dark:bg-blue-400/30', 'dark:bg-green-400/30', 'dark:bg-red-400/30', 'dark:bg-yellow-400/30']
  const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)]

  return <Image src={PowerPlantImage} alt='power-plant-image' className={twMerge('mx-auto p-4 object-contain rounded-tl-3xl rounded-br-3xl', className, randomColor)} />
}
