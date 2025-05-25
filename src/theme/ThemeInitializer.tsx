import useThemeStore from '@/store/useThemeStore'

const ThemeInitializer = () => {
  const { theme } = useThemeStore.getState()
  document.documentElement.dataset.theme = theme
  return null
}

export default ThemeInitializer
