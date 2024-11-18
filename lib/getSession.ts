'use server'
import { getServerSession, User } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'

export interface GitHubUser extends User {
  name: string
  image: string
  email: string
}

export default async function getSession() {
  const session = await getServerSession(options)
  if (!session || !session.user) return { user: null }

  const user = session.user as GitHubUser

  return { user }
}
