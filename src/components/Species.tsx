
import { fetchSpecies } from '../api-service'
import { TSingleSpecies, TSubItem, TResourceResult } from '../types'
import { Resource } from './Resource'

function createSingleSpeciesSubItems (result: TResourceResult): TSubItem[] {
  const singleSpecies = result as TSingleSpecies

  return [
    { label: 'Eye colors', value: singleSpecies.eye_colors },
    { label: 'Hair colors', value: singleSpecies.hair_colors },
    { label: 'Language', value: singleSpecies.language },
  ]
}


function Species() {

  return (
    <>
      <Resource fetchResource={ fetchSpecies } createSubItems={ createSingleSpeciesSubItems } />
    </>
  )
}

export { Species }
