import { describe } from '@jest/globals'
import { render } from '@testing-library/react'
import MetricColorization from '@/components/power-plants/MetricColorization'
import each from 'jest-each'

describe('MetricColorization - ', () => {
  each([
    [0.25, 'dark:bg-red-400'],
    [0.7, 'dark:bg-yellow-400'],
    [0.95, 'dark:bg-green-400'],
  ]).it('colorizes the container correctly', async (value, expectedColor) => {
    const Component = await MetricColorization({ value, children: null, thresholdCritical: 0.5, thresholdWarning: 0.75 })
    const { container: rootElement } = render(Component)

    //? All rendered elements are wrapped in a div (=rootElement)
    const container = rootElement.children[0]

    expect(container.className).toContain(expectedColor)
  })
})
