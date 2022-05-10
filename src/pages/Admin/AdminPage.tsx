import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

interface Props {}

export const AdminPage: React.FC<Props> = () => {
  const navigate = useNavigate()

  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const res = await axios.post('http://localhost:5000/api/auth/login', {
      email,
      password,
    })

    if (res.status === 200) {
      navigate('/')
    }
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    }
  }
  return (
    <div className='page-body'>
      <div className='container'>
        <form onSubmit={onSubmit}>
          <input placeholder='email' name='email' type='text' value={email} onChange={onChange} />
          <input placeholder='password' name='password' type='password' value={password} onChange={onChange} />
          <button type='submit'>Send</button>
          <div>
            {email} {password}
          </div>
        </form>
      </div>
    </div>
  )
}
