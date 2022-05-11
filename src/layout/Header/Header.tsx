import React, { useState } from 'react'
import { useTheme } from 'hooks/useTheme'
import { MdOutlineWbSunny, MdNightlightRound, MdAccountCircle } from 'react-icons/md'
import OverlayingPopup from 'components/OverlayingPopup/OverlayingPopup'
import { Login } from 'components/Login/Login'

export const Header = () => {
  const { theme, setTheme } = useTheme()

  const [isModalOpened, setIsModalOpened] = useState(false)

  const handleThemeClick = () => {
    if (theme === 'light') {
      setTheme('dark')
      return
    }
    setTheme('light')
  }

  const closeLoginModal = () => {
    setIsModalOpened(false)
  }

  const openLoginModal = () => {
    setIsModalOpened(true)
  }

  return (
    <header className='container mx-auto py-6 border-b-2 border-gray-200 dark:border-gray-700'>
      <div className='flex items-center'>
        <button className='btn modal-button btn-accent ' onClick={openLoginModal}>
          <MdAccountCircle
            size='20'
            // {className='mr-2'
          />
          {/* Login */}
        </button>

        <button className='btn btn-primary btn-md ml-auto' onClick={handleThemeClick}>
          {theme === 'light' ? <MdOutlineWbSunny size='20' /> : <MdNightlightRound size='20' color='white' />}
        </button>
      </div>

      <OverlayingPopup onClose={closeLoginModal} isOpened={isModalOpened}>
        <div className='bg-white dark:bg-neutral relative p-10 rounded-xl flex w-full max-w-screen-md'>
          <Login />
        </div>
      </OverlayingPopup>
    </header>
  )
}
