import { useState } from 'react'
import style from './Header.module.scss'
import AccountInfoModal from '@/components/AccountInfoModal'

const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleCloseModal = () => setShowModal(false)

  return (
    <div className={style.container}>
      <div className={style.leftSection}>左侧模块,预计宣言</div>
      <div className={style.centerSection}>中间模块</div>
      <div className={style.rightSection}>
        右侧模块
        <button onClick={() => setShowModal(!showModal)}>头像</button>
        {showModal && (
          <div
            className={style.modalOverlay}
            onClick={() => handleCloseModal()}>
            <AccountInfoModal />
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
