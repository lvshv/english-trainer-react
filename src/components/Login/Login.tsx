import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

interface Props {}

export const Login: React.FC<Props> = () => {
  const navigate = useNavigate()

  const [signUp, setSignUp] = useState(false)
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
    <form className='flex flex-col items-center w-full max-w-screen-md' onSubmit={onSubmit}>
      <div className='flex flex-col w-full'>
        <h5 className='text-center text-3xl mb-6'> {signUp ? 'Sign up' : 'Sign in'}</h5>
        <input
          className='input input-bordered w-full mb-2'
          placeholder='email'
          name='email'
          type='text'
          value={email}
          onChange={onChange}
        />
        {signUp && (
          <>
            <input
              className='input input-bordered w-full mb-2'
              placeholder='name'
              name='email'
              type='text'
              value={email}
              onChange={onChange}
            />
          </>
        )}
        <input
          className='input input-bordered w-full '
          placeholder='password'
          name='password'
          type='password'
          value={password}
          onChange={onChange}
        />

        <button className='btn block btn-md btn-secondary mt-8 w-full mb-4' type='submit'>
          {signUp ? 'Register' : 'Login'}
        </button>
      </div>
      <div className='flex items-center'>
        <p>{signUp ? 'Already have an account?' : "Don't have an account?"}</p>

        <button className='btn btn-link' onClick={() => setSignUp(prev => !prev)}>
          {signUp ? 'Sign in' : 'Sign up'}
        </button>
      </div>
    </form>
  )
}
