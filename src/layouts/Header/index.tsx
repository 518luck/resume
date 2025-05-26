import { Button } from 'antd'

import useThemeStore from '@/store/useThemeStore'
function Header() {
  const { theme, toggle } = useThemeStore()
  return (
    <div>
      Header占位
      <Button onClick={toggle}>{theme === 'dark' ? '黑夜' : '白天'}</Button>
    </div>
  )
}

export default Header
