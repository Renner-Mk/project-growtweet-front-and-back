import { ReactNode } from 'react'
import { Navigate } from 'react-router'

interface ProtectedRouteProps {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const userLogged = localStorage.getItem('userLogged')

  try {
    const user = userLogged ? JSON.parse(userLogged) : null

    if (!user) {
      return <Navigate to="/login" replace />
    }

    return <>{children}</>
  } catch (error) {
    return <Navigate to="/login" replace />
  }
}
