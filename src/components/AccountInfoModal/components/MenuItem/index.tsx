import type { ReactNode } from 'react'

import style from '../../AccountInfoModal.module.scss'

interface MenuItemProps {
  icon: ReactNode
  text: string
}

export const MenuItem = ({ icon, text }: MenuItemProps) => {
  return (
    <div className={style.item}>
      <div className={style.light}></div>
      <div className={style.licon}>{icon}</div>
      <div className={style.con}>{text}</div>
      <div className={style.ricon}></div>
    </div>
  )
}
