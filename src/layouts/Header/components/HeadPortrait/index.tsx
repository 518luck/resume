import { useState } from 'react'

import AccountInfoModal from '@/components/AccountInfoModal'
import style from './index.module.scss'

const HeadPortrait = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div>
      <button onClick={() => setShowModal(!showModal)}>头像</button>
      {showModal && (
        <div className={style.modalOverlay} onClick={() => handleCloseModal()}>
          <AccountInfoModal />
        </div>
      )}
    </div>
  )
}

export { HeadPortrait }
