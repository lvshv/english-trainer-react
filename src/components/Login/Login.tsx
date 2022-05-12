import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { fetchUser, registerUser } from 'store/userSlice'
import { useAppDispatch } from 'hooks/useAppDispatch '
import { useAppSelector } from 'hooks/useAppSelector'
import cn from 'classnames'
interface Props {}

export const Login: React.FC<Props> = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { error, isLoading, user } = useAppSelector(state => state.user)
  const [signUp, setSignUp] = useState(false)
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [fullName, setFullName] = useState<string>('')

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (signUp) {
      dispatch(registerUser({ password, email, fullName }))
      return
    }
    dispatch(fetchUser({ password, email }))
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    }
    if (e.target.name === 'name') {
      setFullName(e.target.value)
    }
  }
  return (
    <div className='bg-white dark:bg-neutral relative p-10 rounded-xl flex w-full max-w-screen-md'>
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
                name='name'
                type='text'
                value={fullName}
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

          {error && (
            <div className='alert alert-error shadow-lg mt-6'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='stroke-current flex-shrink-0 h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}

          <button
            className={cn('btn  btn-md btn-secondary mt-8 w-full mb-4', {
              loading: isLoading,
            })}
            type='submit'
          >
            {signUp ? 'Register' : 'Login'}
          </button>
        </div>
        <div className='flex items-center'>
          <p>{signUp ? 'Already have an account?' : "Don't have an account?"}</p>

          <button className='btn btn-link' onClick={() => setSignUp(prev => !prev)} type='button'>
            {signUp ? 'Sign in' : 'Sign up'}
          </button>
        </div>
      </form>
    </div>
  )
}
