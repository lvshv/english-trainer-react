import { useLayoutEffect, useState } from 'react'

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? 'dark' : 'light'

const themes = {
  light: 'winter',
  dark: 'dracula',
}

type theme = keyof typeof themes

export const useTheme = () => {
  const [theme, setTheme] = useState<theme>((localStorage.getItem('app-theme') as theme) || defaultTheme)

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', themes[theme])
    document.documentElement.className = theme
    localStorage.setItem('app-theme', theme)
  }, [theme])

  return { theme, setTheme }
}
