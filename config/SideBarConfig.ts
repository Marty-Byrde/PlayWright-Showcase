import SideBarProps from '@/typings/root/SideBarProps'

export const SideBarConfiguration: SideBarProps = {
  title: 'Power Plant Operations',
  icon: 'PowerIcon',
  items: [
    {
      title: 'Dashboard',
      href: '/item1',
      icon: 'ChartBarIcon',
    },
    {
      title: 'Control Room',
      href: '/item2',
      icon: 'WrenchScrewdriverIcon',
    },
  ],
}

export const DesktopSideBarVisibilityBreakpoints = 'hidden md:flex w-[350px]'

export const MobileSideBarVisibilityBreakpoints = 'flex md:hidden'

export const MainContentShiftBreakpoints = 'md:ml-[350px]'
