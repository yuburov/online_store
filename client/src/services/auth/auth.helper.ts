import { IAuthResponse, ITokens } from "@/store/user/user.interface"
import Cookies from "js-cookie"

export const getAccessToken = () => {
  const accessToken = Cookies.get('accessToken')
  return accessToken || null
}

export const getRefreshToken = () => {
  const refreshToken = Cookies.get('refreshToken')
  return refreshToken || null
}

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user') || '{}')
}

export const saveTokenStorage = (data: ITokens) => {
	Cookies.set('accessToken', data.access_token)
	Cookies.set('refreshToken', data.refresh_token)
}

export const removeFromStorage = () => {
  Cookies.remove('accessToken')
  Cookies.remove('refreshToken')
  localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse) => {
  saveTokenStorage(data)
  localStorage.setItem('user', JSON.stringify(data.user))
}