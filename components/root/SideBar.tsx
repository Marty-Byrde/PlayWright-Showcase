import React from 'react'
import SideBarProps from '@/typings/root/SideBarProps'
import { twMerge } from 'tailwind-merge'
import { SideBarConfiguration } from '@/config/SideBarConfig'
import { RenderSideBarItem } from '@/components/root/SideBar/RenderSideBarItem'
import DesktopSideBar from '@/components/root/SideBar/variants/DesktopSideBar'
import MobileSideBar from '@/components/root/SideBar/variants/MobileSideBar'

export default async function SideBar() {
  return (
    <>
      <MobileSideBar {...SideBarConfiguration} />
      <DesktopSideBar {...SideBarConfiguration} />
    </>
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
        <RenderSideBarItem key={item.title} {...item} />
      ))}
    </ul>
  )
}

/**
 * Renders a single SideBarItem. Given that an item may have subitems, this component will render these subitems recursively using the <RenderSideBarItems> component.
 * @param item The item to render
 * @param isLast Whether this item is the last item of its parent list. This is used to apply additional spacing between the last item and the next item-tree.
 */
