import AxeBuilder from '@axe-core/playwright'

import { expect, test } from './fixtures'

test.describe('homepage accessiblity', () => {
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('http://localhost:3000')

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})

/*test.describe('power-plants accessiblity', () => { 
    test('should not have any automatically detectable accessibility issues', async ({ page }) => {
      await page.goto('http://localhost:3000/power-plants'); 
  
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  
      expect(accessibilityScanResults.violations).toEqual([]); 
    });
  });

  test.describe('power-plants management accessiblity', () => { 
    test('should not have any automatically detectable accessibility issues', async ({ page }) => {
      await page.goto('http://localhost:3000/power-plants/manage'); 
  
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  
      expect(accessibilityScanResults.violations).toEqual([]); 
    });
  });*/
