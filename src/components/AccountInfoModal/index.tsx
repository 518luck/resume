import style from './AccountInfoModal.module.scss'

import yanjing from '@/assets/test/眼镜.jpeg'

const AccountInfoModal = () => {
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
            <p>不吃香菜</p>
            <h2>备注</h2>
          </div>
          <div className={style.line}></div>
          <div className={style.title}>
            <p>标题</p>
          </div>
          <div className={style.menu}>
            <div className={style.item}>
              <div className={style.light}></div>
              <div className={style.licon}>
                <span
                  className={`${style.iconfont} ${style.iconWenjian1}`}></span>
              </div>
              <div className={style.con}>Payouts</div>
              <div className={style.ricon}></div>
            </div>
          </div>
          <div className={style.line}></div>
          <div className={style.title}>
            <p>Sever 6</p>
          </div>
          <div className={style.server}>
            <div className={style.item}>
              <div className={style.light}></div>
              <div className={style.licon}>
                <span
                  className={`${style.iconfont} ${style.iconWenjian1}`}></span>
              </div>
              <div className={style.con}>Payouts</div>
              <div className={style.ricon}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountInfoModal
