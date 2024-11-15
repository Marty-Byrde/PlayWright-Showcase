import { HeroIconName } from '@/typings/icons/HeroIcons'
import SideBarItemProps from '@/typings/root/SideBarItemProps'

export default interface SideBarProps {
  title: string
  iconName: HeroIconName
  items: Array<SideBarItemProps>
}
