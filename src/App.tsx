import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/styles/App.module.scss'

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main>主内容区</main>
      <Footer />
    </div>
  )
}

export default App
