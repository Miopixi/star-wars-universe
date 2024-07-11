import { createBrowserRouter } from 'react-router-dom'

import Films from './components/Films'
import Layout from './components/Layout'
import LostInSpace from './components/LostInSpace'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Films /></Layout>,
    errorElement: <Layout><LostInSpace /></Layout>
  },
])

export default router
