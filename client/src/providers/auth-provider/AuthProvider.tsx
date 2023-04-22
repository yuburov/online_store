import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from './auth-page.interface'
import { getAccessToken, getRefreshToken } from '@/services/auth/auth.helper'

const DynamicCheckrole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	Component: { isOnlyUser },
	children
}) => {
	const { user } = useAuth()
	const { checkAuth, logout } = useActions()
	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = getAccessToken()
		if (accessToken) {
			checkAuth()
		}
	}, [])

  useEffect(() => {
		const refreshToken = getRefreshToken()
		if (!refreshToken && user) {
			logout()
		}
	}, [pathname])

	return isOnlyUser ? (
		<DynamicCheckrole Component={{ isOnlyUser }}>{children}</DynamicCheckrole>
	) : (
		<>{children}</>
	)
}

export default AuthProvider
