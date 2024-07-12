import { useState } from 'react'

import { fetchVehicles } from '../api-service'
import { TListItem, TResourceResults, TVehicle } from '../types'
import DynamicList from './DynamicList'
import List from './List'

function createListItems (vehicles: TVehicle[]): TListItem[] {
  return vehicles.map(vehicle => ({
    name: vehicle.name,
    subItems: [
      { label: 'Crew', value: vehicle.crew },
      { label: 'Passengers', value: vehicle.passengers },
      { label: 'Atmosphering speed', value: vehicle.max_atmosphering_speed },
      { label: 'Model', value: vehicle.model },
    ]
  }))
}

function ensureUniqueness (vehicles: TVehicle[]): TVehicle[] {
  return [...new Set(vehicles.map(p => JSON.stringify(p)))].map(p => JSON.parse(p))
}

function sortByFilms (vehicles: TVehicle[]): TVehicle[] {
  return [...vehicles].sort((a, b) => a.films.length - b.films.length)
}


function Vehicles() {

  const [ vehicles, setVehicles ] = useState<TVehicle[]>([])

  const updateVehicles = (next?: TResourceResults) => {
    next
      ? setVehicles(prev => ensureUniqueness([...prev, ...sortByFilms(next as TVehicle[])]))
      : setVehicles(sortByFilms(vehicles))
  }

  return (
    <>
      <DynamicList fetchResource={ fetchVehicles } updateResource={ updateVehicles }>
        <List items={ createListItems(vehicles) } />
      </DynamicList>
    </>
  )
}

export default Vehicles
