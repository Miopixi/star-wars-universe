import { ReactNode } from 'react'

import Title from './Title'

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {

  return (
    <>
      <Title />
      <main>{ children }</main>
    </>
  )
}

export default Layout
