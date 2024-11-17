import { describe } from '@jest/globals'
import { UserInformation } from '@/components/root/UserProfile/UserInformation'
import { GitHubUser } from '@/lib/getSession'
import { render } from '@testing-library/react'

describe('UserInformation', () => {
  it('should render the user name, image and link to profilePage', () => {
    const user: GitHubUser = { name: 'John Doe', image: 'https://avatars.githubusercontent.com/u/101210932?v=4', email: '', id: '1234567890' }
    const profilePage = '/profile'

    const Component = UserInformation({ user, profilePage })
    const { container } = render(Component)

    const anchorTag = container.querySelector('a')

    const image = container.querySelector('img')
    expect(image).not.toBe(null)

    const nameSpan = container.querySelector('span')

    expect(anchorTag).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(nameSpan).toBeInTheDocument()

    expect(image?.getAttribute('src')).toMatch(encodeURIComponent(user.image))
    expect(nameSpan?.textContent).toBe(user.name)
    expect(anchorTag?.getAttribute('href')).toBe(profilePage)
  })
})
