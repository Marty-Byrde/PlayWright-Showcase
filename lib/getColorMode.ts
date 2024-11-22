import { cookies as nextCookies } from 'next/dist/client/components/headers'

export default function getColorMode(): 'light' | 'dark' {
  const cookies = nextCookies()
  const colorMode = cookies.get('colorMode' as never)?.value

  return colorMode === 'light' ? 'light' : 'dark'
}
