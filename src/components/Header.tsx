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
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
