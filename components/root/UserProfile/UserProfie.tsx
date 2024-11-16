'use server'

import Link from 'next/link'
import { ArrowRightIcon, UserIcon } from '@heroicons/react/24/outline'
import getSession from '@/lib/getSession'
import { UserInformation } from '@/components/root/UserProfile/UserInformation'

export default async function UserProfile({ profilePage }: { profilePage: string }) {
  const session = await getSession()
  const user = session?.user

  return user ? <UserInformation user={user} profilePage={profilePage} /> : <LoginBanner />
}

/**
 * This component is displayed when the user is not logged in and renders a simple banner that allows the user to login, when clicked.
 */
function LoginBanner() {
  return (
    <Link
      href='/api/auth/signin'
      className='ml-2 text-sm px-2 group flex flex-1 items-center gap-x-4 rounded-md py-3 font-semibold leading-6 text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/40'>
      <UserIcon className='size-6' />
      <span className='flex-1 group-hover:font-bold group-hover:text-indigo-600 dark:group-hover:text-blue-400'>Login with GitHub</span>
      <ArrowRightIcon className='size-6 group-hover:stroke-2 dark:group-hover:stroke-blue-400' />
    </Link>
  )
}
