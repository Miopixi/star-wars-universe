
import { fetchPeople } from '../api-service'
import { TPerson, TSubItem, TResourceResult } from '../types'
import Resource from './Resource'

function personSubItems (result: TResourceResult): TSubItem[] {
  const person = result as TPerson

  return [
    { label: 'Eye color', value: person.eye_color },
    { label: 'Hair color', value: person.hair_color },
    { label: 'Birth year', value: person.birth_year },
  ]
}


function People() {

  return (
    <>
      <Resource fetchResource={ fetchPeople } createSubItems={ personSubItems } />
    </>
  )
}

export default People
