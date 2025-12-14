import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

export type CartItem = {
    id: number
    title: string
    price?: number
    image?: string | null
    quantity: number
}

type CartContextType = {
    items: CartItem[]
    totalItems: number
    totalPrice: number
    addItem: (item: Omit<CartItem, 'quantity'>, qty?: number, onAdded?: (title: string) => void) => void
    removeItem: (id: number) => void
    setQuantity: (id: number, qty: number) => void
    clear: () => void
    isOpen: boolean
    open: () => void
    close: () => void
    toggle: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const STORAGE_KEY = 'kfc_cart'

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY)
            if (!raw) return []
            const parsed = JSON.parse(raw)
            if (Array.isArray(parsed)) return parsed as CartItem[]
            return []
        } catch {
            return []
        }
    })
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
        } catch { }
    }, [items])

    const totalItems = items.reduce((s, it) => s + it.quantity, 0)
    const totalPrice = items.reduce((s, it) => s + (it.price ?? 0) * it.quantity, 0)

    const addItem = useCallback((item: Omit<CartItem, 'quantity'>, qty = 1, onAdded?: (title: string) => void) => {
        setItems((prev) => {
            const found = prev.find((p) => p.id === item.id)
            if (found) {
                return prev.map((p) => p.id === item.id ? { ...p, quantity: p.quantity + qty } : p)
            }
            return [...prev, { ...item, quantity: qty }]
        })
        // Call callback to notify
        onAdded?.(item.title)
    }, [])

    const removeItem = useCallback((id: number) => {
        setItems((prev) => prev.filter((p) => p.id !== id))
    }, [])

    const setQuantity = useCallback((id: number, qty: number) => {
        setItems((prev) => prev
            .map((p) => p.id === id ? { ...p, quantity: Math.max(0, qty) } : p)
            .filter((p) => p.quantity > 0)
        )
    }, [])

    const clear = useCallback(() => setItems([]), [])
    const open = useCallback(() => setIsOpen(true), [])
    const close = useCallback(() => setIsOpen(false), [])
    const toggle = useCallback(() => setIsOpen((v) => !v), [])

    return (
        <CartContext.Provider value={{ items, totalItems, totalPrice, addItem, removeItem, setQuantity, clear, isOpen, open, close, toggle }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const ctx = useContext(CartContext)
    if (!ctx) throw new Error('useCart must be used within CartProvider')
    return ctx
}

export default CartContext
