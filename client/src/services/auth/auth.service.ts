import { $api } from '@/api/api.interceptor'

import { IAuthResponse, IEmailPassword } from '../../store/user/user.interface'

import { getRefreshToken, saveToStorage } from './auth.helper'

export const AuthService = {
	async main(type: 'signin' | 'signup', data: IEmailPassword) {
		const response = await $api<IAuthResponse>({
			url: `/auth/local/${type}`,
			method: 'POST',
			data
		})
		if (response.data.access_token) {
			saveToStorage(response.data)
		}
		return response.data
	},

	async getNewTokens() {
		const refreshToken = getRefreshToken()
		const response = await $api.post<IAuthResponse>(
			'/auth/refresh',
			{withCredentials: true},
			{
				headers: {
					'Authorization': `Bearer ${refreshToken}`,
				} 
			}
		)

		if (response.data.access_token) {	
			saveToStorage(response.data)
		}

		return response
	}
}
