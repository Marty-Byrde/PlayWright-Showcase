import { render, screen } from '@testing-library/react'
import Page from '../../app/page'
import { describe, it, expect } from '@jest/globals'
import * as matchers from '@testing-library/jest-dom/matchers'

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)

    const heading = screen.getByRole('heading', { level: 1 })

    matchers.toBeInTheDocument(heading)
  })
})
