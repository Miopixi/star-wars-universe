import { useState } from 'react'

import { fetchPlanets } from '../api-service'
import { TListItem, TPlanet, TResourceResults } from '../types'
import DynamicList from './DynamicList'
import List from './List'

function createListItems (planets: TPlanet[]): TListItem[] {
  return planets.map(planet => ({
    name: planet.name,
    subItems: [
      { label: 'Climate', value: planet.climate },
      { label: 'Terrain', value: planet.terrain },
      { label: 'Population', value: planet.population },
    ]
  }))
}

function ensureUniqueness (planets: TPlanet[]): TPlanet[] {
  return [...new Set(planets.map(p => JSON.stringify(p)))].map(p => JSON.parse(p))
}

function sortByFilms (planets: TPlanet[]): TPlanet[] {
  return [...planets].sort((a, b) => a.films.length - b.films.length)
}


function Planets() {

  const [ planets, setPlanets ] = useState<TPlanet[]>([])

  const updatePlanets = (next?: TResourceResults) => {
    next
      ? setPlanets(prev => ensureUniqueness([...prev, ...sortByFilms(next as TPlanet[])]))
      : setPlanets(sortByFilms(planets))
  }

  return (
    <>
      <DynamicList fetchResource={ fetchPlanets } updateResource={ updatePlanets }>
        <List items={ createListItems(planets) } />
      </DynamicList>
    </>
  )
}

export default Planets
