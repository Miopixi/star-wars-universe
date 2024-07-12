import { useState } from 'react'

import { fetchPeople } from '../api-service'
import { TListItem, TPerson, TResourceResults } from '../types'
import DynamicList from './DynamicList'
import List from './List'

function createListItems (people: TPerson[]): TListItem[] {
  return people.map(person => ({
    name: person.name,
    subItems: [
      { label: 'Eye color', value: person.eye_color },
      { label: 'Hair color', value: person.hair_color },
      { label: 'Birth year', value: person.birth_year },
    ]
  }))
}

function ensureUniqueness (people: TPerson[]): TPerson[] {
  return [...new Set(people.map(p => JSON.stringify(p)))].map(p => JSON.parse(p))
}

function sortByFilms (people: TPerson[]): TPerson[] {
  return [...people].sort((a, b) => a.films.length - b.films.length)
}


function People() {

  const [ people, setPeople ] = useState<TPerson[]>([])

  const updatePeople = (next?: TResourceResults) => {
    next
      ? setPeople(prev => ensureUniqueness([...prev, ...sortByFilms(next as TPerson[])]))
      : setPeople(sortByFilms(people))
  }

  return (
    <>
      <DynamicList fetchResource={ fetchPeople } updateResource={ updatePeople }>
        <List items={ createListItems(people) } />
      </DynamicList>
    </>
  )
}

export default People
