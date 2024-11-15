import { render, screen } from '@testing-library/react'
import { describe, it } from '@jest/globals'
import { SideBarConfiguration } from '@/config/SideBarConfig'
import DesktopSideBar from '@/components/root/SideBar/variants/DesktopSideBar'

describe('DesktopSideBar', () => {
  it('has the correct title', async () => {
    const Component = await DesktopSideBar({ ...SideBarConfiguration })
    render(Component)

    const sidebarHeading = screen.getByRole('heading', { level: 3 })

    expect(sidebarHeading).toBeInTheDocument()
    expect(sidebarHeading).toHaveTextContent(SideBarConfiguration.title)
  })

  it('shows navigation items', async () => {
    const Component = await DesktopSideBar({ ...SideBarConfiguration })
    render(Component)

    const sidebarItems = screen.getAllByRole('listitem', {})
    const sidebarItemTitles = sidebarItems.map((item) => item.textContent)

    const expectedItems = SideBarConfiguration.items.reduce((acc, item) => (item.items ? acc.concat(item).concat(item.items) : acc.concat(item)), [])

    expect(sidebarItems).toHaveLength(expectedItems.length)
    expect(sidebarItemTitles).toEqual(expectedItems.map((item) => item.title))
  })
})
