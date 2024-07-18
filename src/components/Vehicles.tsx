
import { fetchVehicles } from '../api-service'
import { TVehicle, TSubItem, TResourceResult } from '../types'
import Resource from './Resource'

function vehicleSubItems (result: TResourceResult): TSubItem[] {
  const vehicle = result as TVehicle

  return [
    { label: 'Crew', value: vehicle.crew },
    { label: 'Passengers', value: vehicle.passengers },
    { label: 'Atmosphering speed', value: vehicle.max_atmosphering_speed },
    { label: 'Model', value: vehicle.model },
  ]
}


function Vehicles() {

  return (
    <>
      <Resource fetchResource={ fetchVehicles } createSubItems={ vehicleSubItems } />
    </>
  )
}

export default Vehicles
