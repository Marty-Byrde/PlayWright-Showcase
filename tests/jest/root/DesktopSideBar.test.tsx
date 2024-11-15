import { act, render, screen } from '@testing-library/react'
import { describe, it } from '@jest/globals'
import { SideBarConfiguration } from '@/config/SideBarConfig'
import DesktopSideBar from '@/components/root/SideBar/variants/DesktopSideBar'
import { wait } from '@testing-library/user-event/dist/utils'
import { mockAnimationsApi } from 'jsdom-testing-mocks'

mockAnimationsApi()

describe('DesktopSideBar', () => {
  it('has the correct title', async () => {
    const Component = await DesktopSideBar({ ...SideBarConfiguration })
    render(Component)

    const sidebarHeading = screen.getByRole('heading', { level: 3 })

    expect(sidebarHeading).toBeInTheDocument()
    expect(sidebarHeading).toHaveTextContent(SideBarConfiguration.title)
  })

  it('shows navigation items and containers (=item with subitems)', async () => {
    const Component = await DesktopSideBar({ ...SideBarConfiguration })
    render(Component)

    const initialSidebarItems = screen.getAllByRole('listitem', {})
    await act(() => openSideBarElementDisclosures(initialSidebarItems))

    //* After opening all disclosures, all items should be visible
    const items = screen.getAllByRole('listitem', {})
    const itemTitles = items.map((item) => item.getElementsByClassName('element-title')[0].textContent)

    const expectedItems = SideBarConfiguration.items.reduce((acc, item) => (item.items ? acc.concat(item).concat(item.items) : acc.concat(item)), [])

    expect(items).toHaveLength(expectedItems.length)
    expect(itemTitles).toEqual(expectedItems.map((item) => item.title))
  })
})

/**
 * Opens all disclosures in the sidebar recursively.
 * Note that by using the act function, failing the test when the disclosure does not open is not possible.
 * Interestingly, using the act function throws an error when calling the function recursively.
 * @returns Promise<void> - opens all disclosures when using act, even though it is not called recursively
 * @param elements
 */
async function openSideBarElementDisclosures(elements: HTMLElement[]) {
  for (const element of elements) {
    //* Disclosure-Open button
    if (element.children[0].tagName === 'BUTTON') {
      const button = element.children[0] as HTMLButtonElement
      button.click()
      await wait(500) // wait for animation to finish

      //? Disclosure-Panel did not open
      if (element.children.length === 1) {
        // fail('Disclosure-Panel did not open')
      }

      //* Recursive call for subitems
      // await openSideBarElementDisclosures(element.children[1].children as HTMLElement[])
    }

    //* Link of simple element (no subitems)
    if (element.children[0].tagName === 'A') continue
  }
}
