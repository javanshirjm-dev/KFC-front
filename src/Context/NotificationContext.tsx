import React, { createContext, useContext, useState, useCallback } from 'react'

export type Notification = {
    id: string
    message: string
    type: 'success' | 'error' | 'info'
    duration?: number
}

type NotificationContextType = {
    notifications: Notification[]
    addNotification: (message: string, type?: 'success' | 'error' | 'info', duration?: number) => void
    removeNotification: (id: string) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [notifications, setNotifications] = useState<Notification[]>([])

    const addNotification = useCallback((message: string, type: 'success' | 'error' | 'info' = 'success', duration = 3000) => {
        const id = Date.now().toString()
        setNotifications(prev => [...prev, { id, message, type, duration }])

        if (duration > 0) {
            setTimeout(() => {
                removeNotification(id)
            }, duration)
        }
    }, [])

    const removeNotification = useCallback((id: string) => {
        setNotifications(prev => prev.filter(n => n.id !== id))
    }, [])

    return (
        <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
            {children}
            {/* Toast container */}
            <div className="fixed top-4 right-4 z-999 space-y-2">
                {notifications.map(notif => (
                    <div
                        key={notif.id}
                        className={`px-6 py-3 rounded shadow-lg text-white font-medium animate-in slide-in-from-right ${notif.type === 'success' ? 'bg-green-600' : notif.type === 'error' ? 'bg-red-600' : 'bg-blue-600'
                            }`}
                    >
                        {notif.message}
                    </div>
                ))}
            </div>
        </NotificationContext.Provider>
    )
}

export function useNotification() {
    const ctx = useContext(NotificationContext)
    if (!ctx) throw new Error('useNotification must be used within NotificationProvider')
    return ctx
}
