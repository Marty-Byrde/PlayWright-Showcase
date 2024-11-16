import React from 'react'
import SideBarProps from '@/typings/root/SideBarProps'
import PowerIcon from '@/icons/PowerIcon'
import { twMerge } from 'tailwind-merge'
import { MobileSideBarVisibilityBreakpoints, SideBarConfiguration } from '@/config/SideBarConfig'
import { randomUUID } from 'node:crypto'
import { RenderSideBarItem } from '@/components/root/SideBar/RenderSideBarItem'
import DesktopSideBar from '@/components/root/SideBar/variants/DesktopSideBar'

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
    <ul className={twMerge('pl-2 space-y-1', className)}>
      {items.map((item) => (
        <RenderSideBarItem key={randomUUID() + item.title} {...item} />
      ))}
    </ul>
  )
}

/**
 * Renders a single SideBarItem. Given that an item may have subitems, this component will render these subitems recursively using the <RenderSideBarItems> component.
 * @param item The item to render
 * @param isLast Whether this item is the last item of its parent list. This is used to apply additional spacing between the last item and the next item-tree.
 */
