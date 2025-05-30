import style from './Header.module.scss'
import { Navbar } from './components/Navbar'
import { HeadPortrait } from './components/HeadPortrait'

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.leftSection}>左侧模块,预计宣言</div>
      <div className={style.centerSection}>
        <Navbar />
      </div>
      <div className={style.rightSection}>
        右侧模块
        <HeadPortrait />
      </div>
    </div>
  )
}

export default Header
