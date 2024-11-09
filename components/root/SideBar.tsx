import React from 'react'
import SideBarProps from '@/typings/root/SideBarProps'
import PowerIcon from '@/icons/PowerIcon'
import { twMerge } from 'tailwind-merge'
import { DesktopSideBarVisibilityBreakpoints, MobileSideBarVisibilityBreakpoints, SideBarConfiguration } from '@/config/SideBarConfig'
import { randomUUID } from 'node:crypto'
import SideBarItemProps from '@/typings/root/SideBarItemProps'
import { HeroIconName } from '@/typings/icons/HeroIcons'
import useHeroIcon from '@/hooks/useHeroIcon'
import Link from 'next/link'

export default async function SideBar() {
  return (
    <>
      <MobileSideBar {...SideBarConfiguration} />
      <DesktopSideBar {...SideBarConfiguration} />
    </>
  )
}

function MobileSideBar(props: SideBarProps) {
  return (
    <div className={twMerge('bg-gray-50 dark:bg-neutral-900 p-4 border-b-2 justify-between', MobileSideBarVisibilityBreakpoints)}>
      <div id={'sidebar-header'} className='flex gap-4 items-center justify-center'>
        <PowerIcon />
        <h3 className='text-xl'>{props.title}</h3>
      </div>

      <>Hamburger</>
    </div>
  )
}

function DesktopSideBar(props: SideBarProps) {
  return (
    <div className={twMerge('fixed dark:bg-neutral-900/50 bg-gray-200 h-full flex-col p-3 pl-2', DesktopSideBarVisibilityBreakpoints)}>
      <div id={'sidebar-header'} className='flex gap-4 items-center pl-6 pb-3 border-b-2 dark:border-neutral-300 border-gray-600'>
        <PowerIcon />
        <h3 className='text-xl dark:text-gray-300 text-gray-700'>{props.title}</h3>
      </div>

      <div className='h-full dark:text-gray-300/90 text-gray-600 py-4'>
        <RenderSideBarItems items={props.items} />
      </div>

      <div className='pt-3 mx-auto'>Sidebar Footer</div>
    </div>
  )
}

/**
 * Renders a set of SideBarItems. This component may be used recursively to render subitems of an item.
 * @param items The items to render
 * @param className Additional classes to apply to the container, e.g. to reduce spacing between subitems or indentation
 */
function RenderSideBarItems({ items, className }: { items: SideBarProps['items']; className?: string }) {
  return (
    <ul className={twMerge('pl-2 flex flex-col gap-3', className)}>
      {items.map((item, index) => (
        <RenderSideBarItem key={randomUUID() + item.title} {...item} isLast={items.length - 1 === index} />
      ))}
    </ul>
  )
}

/**
 * Renders a single SideBarItem. Given that an item may have subitems, this component will render these subitems recursively using the <RenderSideBarItems> component.
 * @param item The item to render
 * @param isLast Whether this item is the last item of its parent list. This is used to apply additional spacing between the last item and the next item-tree.
 */
function RenderSideBarItem(item: SideBarItemProps & { isLast?: boolean }) {
  const HeroIcon = useHeroIcon({ iconName: item.icon as HeroIconName })
  return (
    <>
      <li
        className={twMerge(
          'flex gap-4 items-center rounded-md p-3 dark:hover:bg-neutral-700/80 dark:hover:text-gray-200 hover:bg-gray-300 hover:text-gray-900 dark:bg-neutral-700/30',
          item.isLast ? 'mb-2' : '',
        )}>
        <HeroIcon className='size-6' />
        <Link href={item.href}>{item.title}</Link>
      </li>
      {item.items && <RenderSideBarItems items={item.items} className='pl-10 -mt-0' />}
    </>
  )
}
