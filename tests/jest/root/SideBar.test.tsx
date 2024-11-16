import { describe } from '@jest/globals'
import { configure, fireEvent, render, waitFor } from '@testing-library/react'
import SideBar from '@/components/root/SideBar'
import each from 'jest-each'

configure({
  computedStyleSupportsPseudoElements: true,
})

describe('SideBar', () => {
  /**
   * Test whether the SideBar renders the correct version depending on the screen-size
   */
  each([
    [1920, 1080, 'desktop-sidebar-container'],
    [606, 812, 'mobile-sidebar-top-bar'],
  ]).it('renders the correct SideBar version depending on screen-size', async (width, height, containerId) => {
    const Component = await SideBar()
    const { container } = render(Component)

    //? Note that the concept of resizing the windows is valid, Jest does not load and fully parse CSS files.
    //? Therefore, it does not truly know whether an element is visible or not at certain breakpoints.
    await waitFor(() => {
      global.innerWidth = width

      console.log(global.innerWidth)
      fireEvent(global, new Event('resize'))
      global.dispatchEvent(new Event('resize'))
    })

    const sidebarContainer = container.querySelector(`#${containerId}`)

    expect(sidebarContainer).toBeInTheDocument()
    expect(sidebarContainer).toBeVisible()

    const displayProperty = getComputedStyle(sidebarContainer as Element).getPropertyValue('display')
    expect(displayProperty).not.toBe('none')
  })
})
