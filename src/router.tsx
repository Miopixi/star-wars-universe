import { createBrowserRouter } from 'react-router-dom'

import Films from './components/Films'
import People from './components/People'
import Species from './components/Species'
import Starships from './components/Starships'
import Vehicles from './components/Vehicles'
import Planets from './components/Planets'
import Layout from './components/Layout'
import LostInSpace from './components/LostInSpace'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '*',
        element: <LostInSpace />
      },
      {
        path: '',
        element: <Films />
      },
      {
        path: '/people',
        element: <People />
      },
      {
        path: '/species',
        element: <Species />
      },
      {
        path: '/starships',
        element: <Starships />
      },
      {
        path: '/vehicles',
        element: <Vehicles />
      },
      {
        path: '/planets',
        element: <Planets />
      },
    ]
  }
])

export default router
