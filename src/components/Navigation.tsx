import { NavLink } from 'react-router-dom'

import './components.css'

function Navigation() {

  return (
    <>
      <nav>
        <ul className='nav_links'>
          <NavLink className='nav_link' to='/people'>People</NavLink>
          <NavLink className='nav_link' to='/species'>Species</NavLink>
          <NavLink className='nav_link' to='/starships'>Starships</NavLink>
          <NavLink className='nav_link' to='/vehicles'>Vehicles</NavLink>
          <NavLink className='nav_link' to='/planets'>Planets</NavLink>
        </ul>
      </nav>
    </>
  )
}

export default Navigation
