import React from 'react'
import SideBarProps from '@/typings/root/SideBarProps'
import PowerIcon from '@/icons/PowerIcon'
import { twMerge } from 'tailwind-merge'
import { DesktopSideBarVisibilityBreakpoints, MobileSideBarVisibilityBreakpoints, SideBarConfiguration } from '@/config/SideBarConfig'

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
    <div className={twMerge('fixed dark:bg-neutral-900 bg-gray-50 h-full flex-col p-3 pl-2', DesktopSideBarVisibilityBreakpoints)}>
      <div id={'sidebar-header'} className='flex gap-4 items-center justify-center pb-3 border-b-2'>
        <PowerIcon />
        <h3 className='text-2xl'>{props.title}</h3>
      </div>

      <div className='h-full bg-gray-800'>Sidebar Body</div>

      <div className='pt-3 mx-auto'>Sidebar Footer</div>
    </div>
  )
}
