import Header from '@/components/Header'
import Footer from '@/components/Footer'

import styles from '@/styles/App.module.scss'

// 测试链接
import AccountInfoModal from '@/components/AccountInfoModal'

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main>主内容区</main>
      <Footer />
      <hr
        style={{
          width: '100%',
          height: '1px',
          border: 'none',
          background: 'red',
        }}
      />
      实时展示区
      <br />
      <AccountInfoModal />
    </div>
  )
}

export default App
