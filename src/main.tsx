import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import '@ant-design/v5-patch-for-react-19'

import router from '@/routers/index'
import '@/styles/variables.scss'

// 初始化
import ThemeInitializer from '@/theme/ThemeInitializer'

createRoot(document.getElementById('root')!).render(
  <>
    <ThemeInitializer></ThemeInitializer>
    <RouterProvider router={router}></RouterProvider>
  </>
)
