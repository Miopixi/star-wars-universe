
import Navigation from './Navigation'
import Title from './Title'
import './components.css'

function Header() {

  return (
    <>
      <header>
        <h3><Title /></h3>
        <Navigation />
      </header>
    </>
  )
}

export default Header
