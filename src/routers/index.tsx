import { createBrowserRouter } from 'react-router-dom'
import App from '@/App.tsx'
import NotFound from '@/pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
