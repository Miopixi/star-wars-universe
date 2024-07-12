import { useState } from 'react'

import { fetchStarships } from '../api-service'
import { TListItem, TStarship, TResourceResults } from '../types'
import DynamicList from './DynamicList'
import List from './List'

function createListItems (starships: TStarship[]): TListItem[] {
  return starships.map(starship => ({
    name: starship.name,
    subItems: [
      { label: 'Crew', value: starship.crew },
      { label: 'Passengers', value: starship.passengers },
      { label: 'Hyperdrive rating', value: starship.hyperdrive_rating },
      { label: 'Model', value: starship.model },
    ]
  }))
}

function ensureUniqueness (starships: TStarship[]): TStarship[] {
  return [...new Set(starships.map(p => JSON.stringify(p)))].map(p => JSON.parse(p))
}

function sortByFilms (starships: TStarship[]): TStarship[] {
  return [...starships].sort((a, b) => a.films.length - b.films.length)
}


function Starships() {

  const [ starships, setStarships ] = useState<TStarship[]>([])

  const updateStarships = (next?: TResourceResults) => {
    next
      ? setStarships(prev => ensureUniqueness([...prev, ...sortByFilms(next as TStarship[])]))
      : setStarships(sortByFilms(starships))
  }

  return (
    <>
      <DynamicList fetchResource={ fetchStarships } updateResource={ updateStarships }>
        <List items={ createListItems(starships) } />
      </DynamicList>
    </>
  )
}

export default Starships
