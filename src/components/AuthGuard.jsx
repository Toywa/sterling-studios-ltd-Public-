import { Navigate } from 'react-router-dom'
export default function AuthGuard({ children }){
  const isAdmin = localStorage.getItem('sterling_admin') === 'true'
  if(!isAdmin) return <Navigate to="/admin-login" replace />
  return children
}
export function ClientGuard({ children }){
  const isClient = localStorage.getItem('sterling_client') === 'true' || localStorage.getItem('sterling_admin') === 'true'
  if(!isClient) return <Navigate to="/client-login" replace />
  return children
}
