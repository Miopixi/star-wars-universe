
import { fetchPlanets } from '../api-service'
import { TPlanet, TSubItem, TResourceResult } from '../types'
import Resource from './Resource'

function planetSubItems (result: TResourceResult): TSubItem[] {
  const planet = result as TPlanet

  return [
    { label: 'Climate', value: planet.climate },
    { label: 'Terrain', value: planet.terrain },
    { label: 'Population', value: planet.population },
  ]
}


function Planets() {

  return (
    <>
      <Resource fetchResource={ fetchPlanets } createSubItems={ planetSubItems } />
    </>
  )
}

export default Planets
