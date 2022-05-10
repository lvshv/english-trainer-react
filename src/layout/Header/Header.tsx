import React from 'react'
import { useTheme } from 'hooks/useTheme'

export const Header = () => {
  const { theme, setTheme } = useTheme()

  const handleThemeClick = () => {
    if (theme === 'bumblebee') {
      setTheme('dracula')
      return
    }
    setTheme('bumblebee')
  }

  return (
    <header className='container mx-auto px-4 py-6'>
      <div className='container'>
        <button className='btn btn-primary btn-sm' onClick={handleThemeClick}>
          change theme
        </button>
      </div>
    </header>
  )
}
