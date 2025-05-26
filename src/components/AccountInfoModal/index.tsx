import {
  MailOutlined,
  UserOutlined,
  PictureOutlined,
  SettingOutlined,
  GithubOutlined,
  MoonOutlined,
} from '@ant-design/icons'

import style from './AccountInfoModal.module.scss'
import { MenuItem } from './components/MenuItem/index'
import { ThemeSwitching } from './components/ThemeSwitching'

import yanjing from '@/assets/test/眼镜.jpeg'
const AccountInfoModal = () => {
  const mainMenu = [
    { icon: <UserOutlined />, text: '我的主页' },
    { icon: <MailOutlined />, text: '联系方式' },
    { icon: <PictureOutlined />, text: '我的经历' },
  ]
  const settingsMenu = [
    { icon: <SettingOutlined />, text: '设置' },
    { icon: <GithubOutlined />, text: 'Github' },
  ]

  return (
    <div className={style.wrap}>
      <div className={style.nav}>
        <div className={style.btn}>
          <div className={style.btnItem}></div>
          <div className={style.btnItem}></div>
          <div className={style.btnItem}></div>
        </div>
        <div className={style.icon}>
          <div className={style.iconImg}>
            <img src={yanjing} alt='' />
          </div>
          <div className={style.iconCon}>
            <p>蜻蜓大队长</p>
            <h2>Frontend</h2>
          </div>
        </div>
        <div className={style.line}></div>
        <div className={style.title}>
          <p>标题</p>
        </div>
        <div className={style.menu}>
          {mainMenu.map((item, index) => (
            <MenuItem key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
        <div className={style.line}></div>
        <div className={style.title}>
          <p>Sever 6</p>
        </div>
        <div className={style.serve}>
          {settingsMenu.map((item, index) => (
            <MenuItem key={index} icon={item.icon} text={item.text} />
          ))}
          <ThemeSwitching icon={<MoonOutlined />}></ThemeSwitching>
        </div>
      </div>
    </div>
  )
}

export default AccountInfoModal
