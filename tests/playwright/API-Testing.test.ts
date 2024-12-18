import { test } from '@playwright/test'
import PowerPlantProps from '@/typings/Shared/PowerPlant'

test('should display the power plant detail page', async ({ page }) => {
  //? Simulate output of API request
  await page.route('**/api/power-plants/**', async (route) => {
    const data: Partial<PowerPlantProps> = {
      name: 'Test Plant',
      id: 1,
      capacity: 1000,
    }

    await route.fulfill({ json: data, status: 200 })
  })

  //? Modify API response
  await page.route('*/**/api/power-plants/', async (route) => {
    const response = await route.fetch()
    const json = await response.json()
    json.push({ name: 'Dummy PowerPlant', id: 100 })

    //* Return original response with modified JSON
    await route.fulfill({ response, json })
  })

  //? May alos be used to modify browser functionalities (e.g. geolocation, battery status, etc.)

  await page.goto('http://localhost:3000/power-plants/')

  //? ... Further test steps
})
