import { NavLink } from 'react-router-dom'

import './components.css'

function Navigation() {

  return (
    <>
      <nav>
        <ul className='nav_links'>
          <li>
            <NavLink className='nav_link' to='/people'>People</NavLink>
          </li>
          <li>
            <NavLink className='nav_link' to='/species'>Species</NavLink>
          </li>
          <li>
            <NavLink className='nav_link' to='/starships'>Starships</NavLink>
          </li>
          <li>
            <NavLink className='nav_link' to='/vehicles'>Vehicles</NavLink>
          </li>
          <li>
            <NavLink className='nav_link' to='/planets'>Planets</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export { Navigation }
