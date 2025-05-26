import type { ReactNode } from 'react'

import style from '../../AccountInfoModal.module.scss'
import useThemeStore from '@/store/useThemeStore'

interface ThemeSwitchingProps {
  icon: ReactNode
}

export const ThemeSwitching = ({ icon }: ThemeSwitchingProps) => {
  const { theme, toggle } = useThemeStore()
  return (
    <div className={style.item}>
      <div className={style.licon}>{icon}</div>
      <div className={style.con} onClick={toggle}>
        {theme === 'dark' ? '黑夜' : '白天'}
      </div>
    </div>
  )
}
