export default interface PowerPlantProps {
  id: number
  name: string
  capacity: number
  metric2: number
  metric3: number
}

export function createDummyPowerPlants(amount: number): PowerPlantProps[] {
  return Array.from({ length: amount }).map(() => ({
    name: 'Dummy Power Plant',
    id: +(Math.random() * 100).toFixed(0),
    capacity: +Math.random().toFixed(2),
    metric2: +Math.random().toFixed(2),
    metric3: +Math.random().toFixed(2),
  }))
}
