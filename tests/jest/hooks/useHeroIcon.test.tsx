import { describe, it } from '@jest/globals'
import { render } from '@testing-library/react'
import useHeroIcon from '@/hooks/useHeroIcon'

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
})
