import { useEffect, useState } from 'react'

import { fetchPeople } from '../api-service'
import { TListItem, TPerson } from '../types'
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

function People() {

  const [ people, setPeople ] = useState<TPerson[]>([])

  useEffect(() => {
    fetchPeople().then(people => setPeople(people.results))
  }, [])

  return (
    <>
      <List items={ createListItems(people) } />
    </>
  )
}

export default People
