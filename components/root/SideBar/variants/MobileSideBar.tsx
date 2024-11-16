/* eslint-disable react/jsx-max-depth */
'use client'

import { createContext, useContext, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { MobileSideBarVisibilityBreakpoints } from '@/config/SideBarConfig'
import { Bars3Icon, MoonIcon, XMarkIcon } from '@heroicons/react/24/outline'
import SideBarProps from '@/typings/root/SideBarProps'
import useHeroIcon from '@/hooks/useHeroIcon'

interface MobileSideBarContextProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const MobileSideBarContext = createContext<MobileSideBarContextProps>({} as MobileSideBarContextProps)

export function useMobileSideBarContext() {
  const context = useContext(MobileSideBarContext)

  return context
}

export default function MobileSideBar(props: SideBarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MobileSideBarContext.Provider value={{ isOpen, setIsOpen }}>
      <div id='mobile-sidebar-top-bar' className={twMerge('bg-gray-50 dark:bg-neutral-900 p-4 border-b-2 justify-between', MobileSideBarVisibilityBreakpoints)}>
        <OpenCloseButton />
        <span className='flex-1 text-center text-lg font-semibold leading-6 text-gray-700 dark:text-gray-200'>{props.title}</span>
        <MoonIcon className='size-6' />
      </div>
    </MobileSideBarContext.Provider>
  )
}

/**
 * This component renders a button that opens or closes the mobile sidebar depending on its open-state.
 */
function OpenCloseButton() {
  const { isOpen, setIsOpen } = useMobileSideBarContext()
  const screenReaderText = isOpen ? 'Close sidebar' : 'Open sidebar'
  const ButtonIcon = useHeroIcon({ iconName: isOpen ? 'XMarkIcon' : 'Bars3Icon' })

  return (
    <button type='button' className='-m-2.5 p-2.5 text-gray-700 dark:text-gray-200 lg:hidden' onClick={() => setIsOpen(!isOpen)}>
      <span className='sr-only'>{screenReaderText}</span>

      <ButtonIcon className='size-6' />
    </button>
  )
}
