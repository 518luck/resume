import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './style.module.scss'

const NotFound: React.FC = () => {
  const location = useLocation()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>
        哎呀！你访问的页面不存在：<code>{location.pathname}</code>
      </p>
      <Link to='/' className={styles.button}>
        返回首页
      </Link>
    </div>
  )
}

export default NotFound

