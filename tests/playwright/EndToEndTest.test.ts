import { expect, test, ViewportSize } from '@playwright/test'
import { Breakpoints } from '@/tests/helpers/TailwindConfig'

const isDesktop = (viewport: ViewportSize | null) => (viewport?.width ? viewport.width > Breakpoints['md'] : false)
const isMobile = (viewport: ViewportSize | null) => (viewport?.width ? viewport.width <= Breakpoints['md'] : false)

test.use({
  colorScheme: 'dark',
})

//? Exemplary Test Suite Structuring
test('verify SideBar functionality', async ({ page, viewport }) => {
  //

  await test.step('Navigate to the root page', async () => {
    await page.goto('http://localhost:3000/')

    isDesktop(viewport) && (await page.waitForSelector('#desktop-sidebar-container'))
    isMobile(viewport) && (await page.waitForSelector('[name=open-close-button]'))
  })

  //

  await test.step('Open Navigation Bar modal on mobile devices', async () => {
    if (isDesktop(viewport)) {
      await test.info().attach('desktop-variant', {
        body: await page.screenshot(),
        contentType: 'image/png',
      })

      // test.skip(isDesktop(viewport), `Skipping step because this step is only needed on small (mobile) screens`)
      return
    }

    await test.info().attach('mobile-closed-modal', {
      body: await page.screenshot(),
      contentType: 'image/png',
    })

    await page.click('[name=open-close-button]')
    expect(await page.$('#headlessui-portal-root')).not.toBeNull() // because this container is only rendered when the modal is open

    await page.waitForTimeout(500)
    await test.info().attach('mobile-opened-modal', {
      body: await page.screenshot(),
      contentType: 'image/png',
    })
  })

  //

  expect((await page.$$('.sidebar-item')).length).toBeGreaterThan(0)
})
