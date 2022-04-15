import React from 'react'
import { useTheme } from 'hooks/useTheme'

const menuElements = ['After Effects', 'Premiere Pro', 'Free Projects', 'Motion Graphics', 'Tutorials', 'About']
export const Header = () => {
  const { theme, setTheme } = useTheme()

  const handleThemeClick = () => {
    if (theme === 'light') {
      setTheme('dark')
      return
    }
    setTheme('light')
  }

  return (
    <header className='header'>
      <div className='container'>
        <div className='header-content'>
          <nav>
            <ul></ul>
          </nav>
          <button onClick={handleThemeClick}>change theme</button>
        </div>
      </div>
    </header>
  )
}
