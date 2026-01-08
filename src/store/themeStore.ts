import { create } from 'zustand'

interface ThemeState {
  isDark: boolean
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
  toggleTheme: () => set((state) => {
    const newMode = !state.isDark
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    return { isDark: newMode }
  }),
}))
