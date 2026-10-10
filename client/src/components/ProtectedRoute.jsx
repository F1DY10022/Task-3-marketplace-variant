import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  // Wait for the token check (/auth/me) before deciding the user is logged out
  if (loading) return null
  if (!user) return <Navigate to="/login" replace />
  return children
}
