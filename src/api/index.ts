import axios from 'axios'
import { parseCookies } from 'nookies'

const cookies = parseCookies()

export interface AuthDto {
  email: string
  password: string
}

export interface RegisterDto extends AuthDto {
  fullName: string
}

const BASE_URL = 'http://localhost:5000/api'

const $api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: 'Bearer ' + cookies.access_token,
  },
})

$api.interceptors.response.use(
  config => {
    return config
  },
  async error => {
    const originalRequest = error.config
    if (
      error?.response?.status == 401 &&
      error.config &&
      !error.config._isRetry &&
      error.config.url !== '/auth/refresh'
    ) {
      originalRequest._isRetry = true
      try {
        const response = await $api.post(`/auth/refresh`, {})
        return $api.request(originalRequest)
      } catch (e) {
        originalRequest._isRetry = true
      }
    }
    throw error
  }
)

export const userAPI = {
  authUser: (data: AuthDto) => {
    return $api.post('http://localhost:5000/api/auth/login', {
      ...data,
    })
  },
  registerUser: (data: RegisterDto) => {
    return $api.post('http://localhost:5000/api/auth/register', {
      ...data,
    })
  },
  getMe: () => {
    return $api.get('http://localhost:5000/api/users/me', {})
  },
}
