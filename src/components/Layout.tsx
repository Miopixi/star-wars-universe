import { Outlet } from 'react-router-dom'

import { StarrySky } from './StarrySky'
import { Header } from './Header'
import { Footer } from './Footer'

function Layout() {

  return (
    <>
      <StarrySky />
      <Header />
      <main><Outlet /></main>
      <Footer />
    </>
  )
}

export { Layout }
