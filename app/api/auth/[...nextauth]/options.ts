import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

const { GITHUB_ID, GITHUB_SECRET } = process.env

if (!GITHUB_ID || !GITHUB_SECRET) throw new Error('Missing Github Credentials...')

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
      name: 'Github-Provider',
    }),
  ],
}
