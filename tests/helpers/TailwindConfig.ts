import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config'

export const TailwindConfig = resolveConfig(tailwindConfig as never)

export const Breakpoints = Object.entries(TailwindConfig.theme.screens)
  .map(([key, value]) => ({ [key]: +String(value).replace('px', '') }))
  //? Rebuild the object from the array of breakpoints
  .reduce((acc, cur) => ({ ...acc, ...cur }), {})
