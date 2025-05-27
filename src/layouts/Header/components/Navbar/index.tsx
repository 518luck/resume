import { UsbOutlined } from '@ant-design/icons'

import style from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <div className={style.content}>
      <div className={style.TopBody}>
        <div className={style.navItem}>
          <UsbOutlined />
          <p>壁纸标签</p>
        </div>
        <div className={style.navItem}>
          <UsbOutlined />
          <p>电脑壁纸</p>
        </div>
        <div className={style.navItem}>
          <UsbOutlined />
          <p>手机壁纸</p>
        </div>
        <div className={style.navItem}>
          <UsbOutlined />
          <p>头像制作</p>
        </div>
      </div>
    </div>
  )
}
