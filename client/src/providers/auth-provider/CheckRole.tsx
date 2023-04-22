import { FC, PropsWithChildren } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from './auth-page.interface'
import { useRouter } from 'next/router'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	Component: { isOnlyUser },
	children
}) => {
	const { user } = useAuth()
  const router = useRouter()

  if (user && isOnlyUser) {
    return <>{children}</>
  }

	router.pathname !== '/auth' && router.replace('/auth')
  return null
}

export default CheckRole
