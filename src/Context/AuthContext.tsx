import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

export type AuthUser = {
    id: number
    username: string
    email: string
}

type AuthContextType = {
    user: AuthUser | null
    token: string | null
    isLoading: boolean
    error: string | null
    login: (email: string, password: string) => Promise<void>
    register: (username: string, email: string, password: string) => Promise<void>
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:1337'

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<AuthUser | null>(() => {
        try {
            const raw = localStorage.getItem('auth')
            if (raw) {
                const parsed = JSON.parse(raw)
                return parsed.user ?? null
            }
        } catch { }
        return null
    })
    const [token, setToken] = useState<string | null>(() => {
        try {
            const raw = localStorage.getItem('auth')
            if (raw) {
                const parsed = JSON.parse(raw)
                return parsed.token ?? null
            }
        } catch { }
        return null
    })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify({ token, user }))
    }, [token, user])

    const login = useCallback(async (email: string, password: string) => {
        setIsLoading(true)
        setError(null)
        try {
            const res = await fetch(`${apiBase}/api/auth/local`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier: email, password })
            })
            const json = await res.json()
            if (!res.ok) throw new Error(json?.error?.message || json?.message || 'Login failed')
            setToken(json.jwt)
            setUser(json.user ?? null)
        } catch (err) {
            setError((err as Error).message)
            throw err
        } finally {
            setIsLoading(false)
        }
    }, [])

    const register = useCallback(async (username: string, email: string, password: string) => {
        setIsLoading(true)
        setError(null)
        try {
            const res = await fetch(`${apiBase}/api/auth/local/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password })
            })
            const json = await res.json()
            if (!res.ok) throw new Error(json?.error?.message || json?.message || 'Registration failed')
            setToken(json.jwt)
            setUser(json.user ?? null)
        } catch (err) {
            setError((err as Error).message)
            throw err
        } finally {
            setIsLoading(false)
        }
    }, [])

    const logout = useCallback(() => {
        setUser(null)
        setToken(null)
        setError(null)
        localStorage.removeItem('auth')
    }, [])

    return (
        <AuthContext.Provider value={{ user, token, isLoading, error, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const ctx = useContext(AuthContext)
    if (!ctx) throw new Error('useAuth must be used within AuthProvider')
    return ctx
}

export default AuthContext
