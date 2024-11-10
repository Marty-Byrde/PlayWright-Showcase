import * as heroicons_outline from '@heroicons/react/24/outline'

export type HeroIconName = keyof typeof heroicons_outline

export interface HeroIconProps {
  iconName: HeroIconName
  type?: 'outline'
}
