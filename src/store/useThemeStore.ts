/**
 * 主题状态管理 Hook
 *
 * 提供主题切换功能，支持 'light' 和 'dark' 两种主题模式
 *
 * @author 蜻蜓大队长
 *
 * @example
 * // 基本使用
 * const { theme, toggle, setTheme } = useThemeStore()
 *
 * // 切换主题
 * toggle()
 *
 * // 设置特定主题
 * setTheme('dark')
 *
 * @returns {ThemeStore} 包含以下属性:
 *   - theme: 当前主题 ('light' | 'dark')
 *   - toggle: 切换主题的方法
 *   - setTheme: 设置特定主题的方法
 */

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
