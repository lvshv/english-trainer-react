import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Portal: React.FC = ({ children }) => {
  const [container] = useState(() => document.createElement('div'))

  useEffect(() => {
    document.body.appendChild(container)
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.removeChild(container)
      document.body.style.overflow = 'initial'
    }
  }, [])

  return ReactDOM.createPortal(children, container)
}

export default Portal
