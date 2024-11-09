import { expect, test } from './fixtures'

test('Root Page has heading', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  const heading = page.getByRole('heading', { name: 'Root Page..' })

  await expect(heading).toBeVisible()
})
