import { useState } from 'react'

import { fetchSpecies } from '../api-service'
import { TListItem, TResourceResults, TSingleSpecies } from '../types'
import DynamicList from './DynamicList'
import List from './List'

function createListItems (species: TSingleSpecies[]): TListItem[] {
  return species.map(singleSpecies => ({
    name: singleSpecies.name,
    subItems: [
      { label: 'Eye colors', value: singleSpecies.eye_colors },
      { label: 'Hair colors', value: singleSpecies.hair_colors },
      { label: 'Language', value: singleSpecies.language },
    ]
  }))
}

function ensureUniqueness (species: TSingleSpecies[]): TSingleSpecies[] {
  return [...new Set(species.map(s => JSON.stringify(s)))].map(s => JSON.parse(s))
}

function sortByFilms (species: TSingleSpecies[]): TSingleSpecies[] {
  return [...species].sort((a, b) => a.films.length - b.films.length)
}


function Species() {

  const [ species, setSpecies ] = useState<TSingleSpecies[]>([])

  const updateSpecies = (next?: TResourceResults) => {
    next
      ? setSpecies(prev => ensureUniqueness([...prev, ...sortByFilms(next as TSingleSpecies[])]))
      : setSpecies(sortByFilms(species))
  }

  return (
    <>
      <DynamicList fetchResource={ fetchSpecies } updateResource={ updateSpecies }>
        <List items={ createListItems(species) } />
      </DynamicList>
    </>
  )
}

export default Species
