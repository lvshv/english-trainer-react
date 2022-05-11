import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

interface Props {}

export const LoginPage: React.FC<Props> = () => {
  const navigate = useNavigate()

  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
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
    <div className='container mx-auto'>
      <form className='flex flex-col items-center' onSubmit={onSubmit}>
        <div className=''>
          <input
            className='input input-bordered w-full max-w-xs mr-1 mb-2'
            placeholder='email'
            name='email'
            type='text'
            value={email}
            onChange={onChange}
          />
          <input
            className='input input-bordered w-full max-w-xs'
            placeholder='password'
            name='password'
            type='password'
            value={password}
            onChange={onChange}
          />
          <button className='btn block btn-sm btn-secondary mt-4' type='submit'>
            Send
          </button>
        </div>
        <div>
          {email} {password}
        </div>
      </form>
    </div>
  )
}
