import type React from "react"
import type { Role } from "../types/user.type"
import { useAuth } from "../contexts/AuthContext"
import { Typography } from "@mui/material"
import { Navigate } from "react-router-dom"




interface props {
  children: React.ReactNode,
  allowedRoles: Role[]
}
const ProtectedRoute = ({ children, allowedRoles }: props) => {

  const { user, loading } = useAuth()


  if (loading) {
    return <Typography variant="h6">Loading...</Typography>
  }
  if (!user) {
    return <Navigate to="/" replace />
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />

  }

  return children
}

export default ProtectedRoute
