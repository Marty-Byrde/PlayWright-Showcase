import { test, ViewportSize } from '@playwright/test'
import { Breakpoints } from '@/tests/helpers/TailwindConfig'
import { describe } from 'node:test'

const isDesktop = (viewport: ViewportSize | null) => (viewport?.width ? viewport.width > Breakpoints['md'] : false)
const isMobile = (viewport: ViewportSize | null) => (viewport?.width ? viewport.width <= Breakpoints['md'] : false)

//? Define Fixures for Test Suite (optional)
test.use({
  colorScheme: 'light',
  // storageState: 'state.json', //? provide cookies, local storage, etc.
})

//? Exemplary Test Suite Structuring
describe('SideBar Navigation', () => {
  test('- test navigation functionality on various devices', async ({ page, viewport }) => {
    //
    //

    await test.step('Navigate to the root page', async () => {
      await page.goto('http://localhost:3000/')
      await page.waitForSelector('h1')
    })

    //

    await test.step('Interact with Navigation Bar on larger screens', async () => {
      test.skip(isMobile(viewport), `Skipping step because this step works only for large (desktop) screens`)

      //? provide snapshots for later use (also event based, e.g. on error)
      await test.info().attach('screenshot', {
        body: await page.screenshot(),
        contentType: 'image/png',
      })

      //? ... Tests and assertions
    })

    //

    await test.step('Interact with Navigation Bar on smaller screens', async () => {
      test.skip(isDesktop(viewport), `Skipping step because this step works only for small (mobile) screens`)

      //? ... Tests and assertions
    })

    //

    //? ... More tests that work again on both large and small screens
  })
})
