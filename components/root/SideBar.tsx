import React from 'react'
import SideBarProps from '@/typings/root/SideBarProps'
import PowerIcon from '@/icons/PowerIcon'
import { twMerge } from 'tailwind-merge'
import { MobileSideBarVisibilityBreakpoints, SideBarConfiguration } from '@/config/SideBarConfig'
import DesktopSideBar from '@/components/root/SideBar-Variants/DesktopSideBar'
import { randomUUID } from 'node:crypto'
import SideBarItemProps from '@/typings/root/SideBarItemProps'
import useHeroIcon from '@/hooks/useHeroIcon'
import { HeroIconName } from '@/typings/icons/HeroIcons'
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

/**
 * Renders a set of SideBarItems. This component may be used recursively to render subitems of an item.
 * @param items The items to render
 * @param className Additional classes to apply to the container, e.g. to reduce spacing between subitems or indentation
 */
export function RenderSideBarItems({ items, className }: { items: SideBarProps['items']; className?: string }) {
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
      <li>
        <Link
          href={item.href}
          className={twMerge(
            'flex gap-4 items-center rounded-md p-3 dark:hover:bg-neutral-700/80 dark:hover:text-gray-200 hover:bg-gray-300 hover:text-gray-900 dark:bg-neutral-700/30',
            item.isLast ? 'mb-2' : '',
          )}>
          <HeroIcon className='size-6' />
          <span>{item.title}</span>
        </Link>
      </li>
      {item.items && <RenderSideBarItems items={item.items} className='pl-10 -mt-0' />}
    </>
  )
}
