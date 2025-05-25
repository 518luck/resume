import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type Theme = 'light' | 'dark'

interface ThemeStore {
  theme: Theme
  toggle: () => void
  setTheme: (t: Theme) => void
}

const useThemeStore = create<ThemeStore>()(
  devtools(
    persist(
      (set) => ({
        // 初始化主题
        theme: ((): Theme => {
          const saved = localStorage.getItem('theme') as Theme | null

          if (saved) return saved

          return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
        })(),

        // 切换主题方法
        toggle: () =>
          set((state) => {
            const next = state.theme === 'light' ? 'dark' : 'light'
            document.documentElement.dataset.theme = next
            state.theme = next
            return { theme: next }
          }),

        // 设置主题方法
        setTheme: (t) =>
          set((state) => {
            document.documentElement.dataset.theme = t
            state.theme = t
            return { theme: t }
          }),
      }),
      { name: 'theme' }
    ),
    { enabled: true, name: 'useThemeStore' }
  )
)

export default useThemeStore
