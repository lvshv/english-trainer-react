import React, { useState, useEffect } from 'react'
import { useTheme } from 'hooks/useTheme'
import { MdOutlineWbSunny, MdNightlightRound, MdAccountCircle } from 'react-icons/md'
import OverlayingPopup from 'components/OverlayingPopup/OverlayingPopup'
import { Login } from 'components/Login/Login'
import { useAppSelector } from 'hooks/useAppSelector'
import { Routes, Route, Link } from 'react-router-dom'
import { getMe } from 'store/userSlice'
import { useAppDispatch } from 'hooks/useAppDispatch '
import cn from 'classnames'

export const Header = () => {
  const { theme, setTheme } = useTheme()
  const dispatch = useAppDispatch()

  const { user, isAuth, isLoading } = useAppSelector(state => state.user)

  const [isModalOpened, setIsModalOpened] = useState(false)

  useEffect(() => {
    if (user) {
      setIsModalOpened(false)
    }
  }, [user])

  useEffect(() => {
    dispatch(getMe())
  }, [])

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
      <div className='flex justify-end'>
        <Link to='/' className='btn modal-button btn-accent mr-auto'>
          Home
        </Link>
        {user ? (
          <Link to='/user' className='btn modal-button btn-accent '>
            <MdAccountCircle size='20' className='' />
            {isAuth && <p className='ml-2'>{user?.email}</p>}
          </Link>
        ) : (
          <button
            className={cn('btn modal-button btn-accent', {
              loading: isLoading,
            })}
            onClick={openLoginModal}
            type='button'
            title='login'
          >
            <MdAccountCircle size='20' className='' />
          </button>
        )}

        <button className='btn btn-primary btn-md ml-2' onClick={handleThemeClick}>
          {theme === 'light' ? <MdOutlineWbSunny size='20' /> : <MdNightlightRound size='20' color='white' />}
        </button>
      </div>

      <OverlayingPopup onClose={closeLoginModal} isOpened={isModalOpened}>
        <Login />
      </OverlayingPopup>
    </header>
  )
}
