import { ReactNode } from 'react'

import StarrySky from './StarrySky'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {

  return (
    <>
      <StarrySky />
      <Header />
      <main>{ children }</main>
      <Footer />
    </>
  )
}

export default Layout
