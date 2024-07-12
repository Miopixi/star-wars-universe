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
            <NavLink to='/people'>People</NavLink>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
