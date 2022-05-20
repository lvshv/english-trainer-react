import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

interface Props {}

export const AdminPage: React.FC<Props> = () => {
  const navigate = useNavigate()

  return (
    <div className='page-body'>
      <div className='container'>
        <div>ADMIN PAGE</div>
      </div>
    </div>
  )
}
