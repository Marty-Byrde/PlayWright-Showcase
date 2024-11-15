import { HeroIconName } from '@/typings/icons/HeroIcons'

export default interface SideBarItemProps {
  title: string
  href?: string
  iconName: HeroIconName
  items?: Array<SideBarItemProps>
}
