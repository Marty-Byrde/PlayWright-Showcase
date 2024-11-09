export default interface SideBarProps {
  title: string
  icon: string

  items: Array<{
    title: string
    href: string
    icon: string
  }>
}
