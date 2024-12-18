'use client'
import SideBarItemProps from '@/typings/root/SideBarItemProps'
import useHeroIcon from '@/hooks/useHeroIcon'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

interface SideBarElementProps extends SideBarItemProps {
  isOpen?: boolean
}

/**
 * This component renders a SideBarElement that displays subitems below it when unfolded. If the element has no subitems then it renders a Link that redirects to its href.
 * @constructor
 */
export function RenderSideBarItem(props: SideBarElementProps) {
  const hasItems = !!props.items?.length

  return hasItems ? <SideBarItem_WithSubItems {...props} /> : <SideBarItem_NoSubItems {...props} />
}

/**
 * This component renders a SideBarItem that has no subitems and thus is wraped insideof a Link tag.
 */
function SideBarItem_NoSubItems(props: SideBarElementProps) {
  return (
    <li className='sidebar-item'>
      <Link href={props.href ?? '#'} className='group flex gap-x-3 p-2 items-center font-semibold hover:bg-gray-50 dark:hover:bg-gray-700/40 rounded-md '>
        <SideBarItem {...props} />
      </Link>
    </li>
  )
}

/**
 * This component renders a SideBarItem that has subitems. It uses the Disclosure component to animate the opening and closing of the subitems.
 */
function SideBarItem_WithSubItems(props: SideBarElementProps) {
  return (
    <Disclosure as='li' key={props.title} className={twMerge('flex flex-col')}>
      {({ open }) => (
        <>
          <Disclosure.Button className='group flex gap-x-3 p-2 items-center font-semibold hover:bg-gray-50 dark:hover:bg-gray-700/40 rounded-md '>
            <SideBarItem {...props} isOpen={open} />
          </Disclosure.Button>

          <Transition
            show={open}
            enter='transition duration-175 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 h-0 opacity-0'>
            <Disclosure.Panel static as='ul' className='pl-6'>
              {props?.items?.map((el) => <RenderSideBarItem key={el.title} {...el} />)}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

/**
 * This component returns a Fragment that contains all the neceessary elements to render a SideBarElement, like title, icon, whether it has items (arrow-down-icon).
 * @param isOpen This prop is used by SideBar elements that have subitems to pass along whether the container is open or not and thus whether the arrow-down icon should be rotated.
 */
function SideBarItem({ title, iconName, items, isOpen }: SideBarElementProps) {
  const Icon = useHeroIcon({ iconName })
  return (
    <>
      <Icon className={twMerge('size-6 dark:group-hover:text-blue-400 group-hover:text-indigo-600 group-hover:stroke-2', isOpen ? 'dark:text-blue-400 text-indigo-600 stroke-2' : '')} />
      <span
        className={twMerge(
          'element-title text-sm leading-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-blue-400',
          isOpen ? 'text-indigo-600 dark:text-blue-400' : '',
        )}>
        {title}
      </span>
      <AnimatedContainerOpenIndicator isOpen={isOpen} enabled={!!items?.length} />
    </>
  )
}

/**
 * This component renders an animated arrow-down icon that indicates whether the container is open or not.
 * @param isOpen State that indicates whether the container is open or not.
 * @param enabled State that indicates whether the container has items or not and thus is shown or not.
 * @constructor
 */
function AnimatedContainerOpenIndicator({ isOpen, enabled }: { isOpen?: boolean; enabled: boolean }) {
  return (
    <div className='flex flex-1 items-center justify-end gap-2'>
      <div
        className={twMerge(
          'transistion-rotate text-gray-800 duration-200 group-hover:scale-125 group-hover:text-indigo-600 dark:text-gray-300  dark:group-hover:scale-[125%] dark:group-hover:text-blue-400',
          isOpen ? 'rotate-90 scale-125 text-indigo-600 dark:scale-[130%] dark:text-blue-400' : '',
          enabled ? '' : 'hidden',
        )}>
        <ChevronRightIcon className='h-4' />
      </div>
    </div>
  )
}
