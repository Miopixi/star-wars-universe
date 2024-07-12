import { createBrowserRouter } from 'react-router-dom'

import Films from './components/Films'
import People from './components/People'
import Species from './components/Species'
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
])

export default router
