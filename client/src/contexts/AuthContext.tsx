import React, { createContext, useContext, useEffect, useState } from "react"
import type { User } from "../types/user.type"
import { getProfile, handleLogout } from "../apis/authApi"


interface AuthContextType {
    isAuthenticated: boolean,
    user: User | null,
    loading: boolean,
    logout: () => Promise<void>
    refetchUser: () => Promise<void>

}

const AuthContext = createContext<AuthContextType | null>(null)


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    const fetchUser = async () => {
        try {
            const data = await getProfile()
            setUser(data.data)
          
        } catch (err) {
            setUser(null)
        } finally {
            setLoading(false)
        }
    }


    const logout = async () => {
        await handleLogout()
        setUser(null)
    }

    

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, loading, logout, refetchUser: fetchUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const ctx = useContext(AuthContext)

    if (!ctx) {
        throw new Error("useAuth must be used inside AuthProvider")
    }

    return ctx
}
