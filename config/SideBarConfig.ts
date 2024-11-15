import SideBarProps from '@/typings/root/SideBarProps'

export const SideBarConfiguration: SideBarProps = {
  title: 'Power Plant Operations',
  iconName: 'PowerIcon',
  items: [
    {
      title: 'Dashboard',
      href: '/item1',
      iconName: 'ChartPieIcon',
      items: [
        {
          title: 'Power Consumption',
          href: '/subitem1',
          iconName: 'PowerIcon',
        },
        {
          title: 'RPM History',
          href: '/subitem1',
          iconName: 'LifebuoyIcon',
        },
        {
          title: 'Weather Data',
          href: '/subitem1',
          iconName: 'SparklesIcon',
        },
      ],
    },
    {
      title: 'Control Room',
      href: '/item2',
      iconName: 'WrenchScrewdriverIcon',
    },
  ],
}

export const DesktopSideBarVisibilityBreakpoints = 'hidden md:flex w-[300px]'

export const MobileSideBarVisibilityBreakpoints = 'flex md:hidden'

export const MainContentShiftBreakpoints = 'md:ml-[300px]'
