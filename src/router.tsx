import { createBrowserRouter } from 'react-router-dom'

import Films from './components/Films'
import People from './components/People'
import Species from './components/Species'
import Starships from './components/Starships'
import Vehicles from './components/Vehicles'
import Layout from './components/Layout'
import LostInSpace from './components/LostInSpace'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Films /></Layout>,
    errorElement: <Layout><LostInSpace /></Layout>
  },
  {
    path: '/people',
    element: <Layout><People /></Layout>
  },
  {
    path: '/species',
    element: <Layout><Species /></Layout>
  },
  {
    path: '/starships',
    element: <Layout><Starships /></Layout>
  },
  {
    path: '/vehicles',
    element: <Layout><Vehicles /></Layout>
  },
])

export default router
