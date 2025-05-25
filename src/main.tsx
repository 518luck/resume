import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from '@/routers/index'
import '@/styles/variables.scss'
import ThemeInitializer from '@/theme/ThemeInitializer'

// 首次渲染

createRoot(document.getElementById('root')!).render(
  <>
    <ThemeInitializer></ThemeInitializer>
    <RouterProvider router={router}></RouterProvider>
  </>
)
