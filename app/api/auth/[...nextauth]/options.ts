import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

const { NEXT_AUTH_GITHUB_ID, NEXT_AUTH_GITHUB_SECRET } = process.env

if (!NEXT_AUTH_GITHUB_ID || !NEXT_AUTH_GITHUB_SECRET) throw new Error('Missing Github Credentials...')

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: NEXT_AUTH_GITHUB_ID,
      clientSecret: NEXT_AUTH_GITHUB_SECRET,
      name: 'Github-Provider',
    }),
  ],
}
