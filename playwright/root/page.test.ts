import { expect, test } from '@bgotink/playwright-coverage'

test('Root Page has heading', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  const heading = page.getByRole('heading', { name: 'Home' })

  await expect(heading).toBeVisible()
})

test('Root Page has Link', async ({ page }) => {
  await page.goto('http://localhost:3000')

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('link', { name: 'Go to nextjs.org' })).toBeVisible()
})
