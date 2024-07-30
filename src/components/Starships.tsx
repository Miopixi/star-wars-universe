
import { fetchStarships } from '../api-service'
import { TStarship, TSubItem, TResourceResult } from '../types'
import { Resource } from './Resource'

function createStarshipSubItems (result: TResourceResult): TSubItem[] {
  const starship = result as TStarship

  return [
    { label: 'Crew', value: starship.crew },
    { label: 'Passengers', value: starship.passengers },
    { label: 'Hyperdrive rating', value: starship.hyperdrive_rating },
    { label: 'Model', value: starship.model },
  ]
}


function Starships() {

  return (
    <>
      <Resource fetchResource={ fetchStarships } createSubItems={ createStarshipSubItems } />
    </>
  )
}

export { Starships }
