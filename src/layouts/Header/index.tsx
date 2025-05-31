import { Navbar } from './components/Navbar'
import { HeadPortrait } from './components/HeadPortrait'
import { Weather } from '@/components/Weather'
import style from './Header.module.scss'

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.leftSection}>
        <Weather />
      </div>
      <div className={style.centerSection}>
        <Navbar />
      </div>
      <div className={style.rightSection}>
        <HeadPortrait />
      </div>
    </div>
  )
}

export default Header
