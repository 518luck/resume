import { useState } from 'react'
import { Avatar } from 'antd'

import AccountInfoModal from '@/components/AccountInfoModal'
import style from './index.module.scss'

import yanjingimg from '@/assets/test/眼镜.jpeg'

const HeadPortrait = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className={style.content}>
      <div className={style.avatarImg} onClick={() => setShowModal(!showModal)}>
        <Avatar
          shape='square'
          size={70}
          src={<img src={yanjingimg} alt='来财来财' />}
        />
      </div>
      {showModal && (
        <div className={style.modalOverlay} onClick={() => handleCloseModal()}>
          <AccountInfoModal />
        </div>
      )}
    </div>
  )
}

export { HeadPortrait }
