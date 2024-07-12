import { NavLink } from 'react-router-dom'

import Title from './Title'
import './components.css'

function Header() {

  return (
    <>
      <header>
        <h3><Title /></h3>

        <nav>
          <ul>
            <NavLink className='nav_link' to='/people'>People</NavLink>
            <NavLink className='nav_link' to='/species'>Species</NavLink>
            <NavLink className='nav_link' to='/starships'>Starships</NavLink>
            <NavLink className='nav_link' to='/vehicles'>Vehicles</NavLink>
            <NavLink className='nav_link' to='/planets'>Planets</NavLink>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
