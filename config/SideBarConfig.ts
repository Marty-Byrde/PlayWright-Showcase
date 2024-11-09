import SideBarProps from '@/typings/root/SideBarProps'

export const SideBarConfiguration: SideBarProps = {
  title: 'Power Plant Operations',
  icon: 'icon',
  items: [
    {
      title: 'Item 1',
      href: '/item1',
      icon: 'icon',
    },
    {
      title: 'Item 2',
      href: '/item2',
      icon: 'icon',
    },
  ],
}

export const DesktopSideBarVisibilityBreakpoints = 'hidden md:flex w-[350px]'

export const MobileSideBarVisibilityBreakpoints = 'flex md:hidden'

export const MainContentShiftBreakpoints = 'md:ml-[350px]'
