import React, { useEffect } from 'react'
import Portal from 'components/Portal/Portal'

interface Props {
  onClose: () => void
  isOpened: boolean
}

const OverlayingPopup: React.FC<Props> = ({ children, onClose, isOpened }) => {
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscKey)
    return () => window.removeEventListener('keydown', handleEscKey)
  }, [])

  return (
    <>
      {isOpened && (
        <Portal>
          <div className='fixed inset-0 z-10 flex items-center justify-center' role='dialog'>
            <div
              className='absolute inset-0 cursor-pointer bg-stone-900 opacity-50'
              role='button'
              title='button'
              tabIndex={0}
              onClick={onClose}
            ></div>
            {children}
          </div>
        </Portal>
      )}
    </>
  )
}

export default OverlayingPopup
