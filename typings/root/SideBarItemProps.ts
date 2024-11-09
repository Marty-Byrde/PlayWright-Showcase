import { HeroIconName } from '@/typings/icons/HeroIcons'

export default interface SideBarItemProps {
  title: string
  href: string
  icon: HeroIconName
  items?: Array<SideBarItemProps>
}
