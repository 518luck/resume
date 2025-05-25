import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from '@/routers/index'
import '@/styles/variables.scss'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
)
