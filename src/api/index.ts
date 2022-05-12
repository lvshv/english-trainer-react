import axios from 'axios'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

const cookies = parseCookies()

export interface AuthDto {
  email: string
  password: string
}

export interface RegisterDto extends AuthDto {
  fullName: string
}

export const userAPI = {
  authUser: (data: AuthDto) => {
    return axios.post('http://localhost:5000/api/auth/login', {
      ...data,
    })
  },
  registerUser: (data: RegisterDto) => {
    return axios.post('http://localhost:5000/api/auth/register', {
      ...data,
    })
  },
  getMe: () => {
    return axios.get('http://localhost:5000/api/users/me', {
      headers: {
        Authorization: 'Bearer ' + cookies.token,
      },
    })
  },
}
