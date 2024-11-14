import { describe, it } from '@jest/globals'
import { render } from '@testing-library/react'
import useHeroIcon from '@/hooks/useHeroIcon'
import each from 'jest-each'

describe('useHeroIcon', () => {
  it('renders an Icon corrrectly', async () => {
    const Icon = useHeroIcon({ iconName: 'HomeIcon' })
    const { container } = render(<Icon />)

    const svgs = container.getElementsByTagName('svg')

    expect(svgs).toHaveLength(1)
    expect(svgs[0]).toBeInTheDocument()
  })

  it('renders an Icon with optional classes correctly', async () => {
    const Icon = useHeroIcon({ iconName: 'HomeIcon' })
    const { container } = render(<Icon className='size-12' />)

    const svgs = container.getElementsByTagName('svg')

    expect(svgs).toHaveLength(1)
    expect(svgs[0]).toBeInTheDocument()
    expect(svgs[0]).toHaveClass('size-12')
  })

  each([['outline'], ['solid'], [undefined]]).it('renders an Icon with optional type correctly', async (type) => {
    const Icon = useHeroIcon({ iconName: 'HomeIcon', type })
    const { container } = render(<Icon />)

    const svgs = container.getElementsByTagName('svg')

    expect(svgs).toHaveLength(1)
    expect(svgs[0]).toBeInTheDocument()
  })
})
