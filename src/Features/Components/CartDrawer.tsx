import React, { useState } from 'react'
import { useCart } from '../../Context/CartContext'
import { useAuth } from '../../Context/AuthContext'

const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:1337'

const CartDrawer: React.FC = () => {
    const { items, totalItems, totalPrice, isOpen, close, removeItem, setQuantity, clear } = useCart()
    const { user, token } = useAuth()

    const [showCheckout, setShowCheckout] = useState(false)
    const [name, setName] = useState(user?.username || '')
    const [emailInput, setEmailInput] = useState(user?.email || '')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null)
    const [successMessage, setSuccessMessage] = useState<string | null>(null)

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-60 flex">
            <div className="flex-1" onClick={close} />
            <aside className="w-96 bg-white shadow-xl p-6 overflow-auto">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Your Cart ({totalItems})</h3>
                    <button onClick={close} className="text-gray-500">Close</button>
                </div>

                {!user ? (
                    <div className="text-center py-12">
                        <div className="text-5xl mb-4">🔒</div>
                        <p className="text-gray-600 font-medium mb-4">You must log in first</p>
                        <p className="text-sm text-gray-500 mb-6">Please log in to access your cart and proceed with checkout.</p>
                        <button onClick={close} className="bg-red-600 text-white px-6 py-2 rounded font-bold">Close</button>
                    </div>
                ) : items.length === 0 ? (
                    <div className="text-center text-gray-500 py-12">Your cart is empty.</div>
                ) : (
                    <div className="space-y-4">
                        {items.map((it) => (
                            <div key={it.id} className="flex gap-3 items-center">
                                {it.image ? (
                                    <img src={it.image} alt={it.title} className="w-20 h-20 object-cover rounded" />
                                ) : (
                                    <div className="w-20 h-20 bg-gray-100 rounded" />
                                )}
                                <div className="flex-1">
                                    <div className="font-semibold">{it.title}</div>
                                    <div className="text-sm text-gray-500">${it.price?.toFixed(2)}</div>
                                    <div className="mt-2 flex items-center gap-2">
                                        <input type="number" value={it.quantity} min={0} onChange={(e) => setQuantity(it.id, Number(e.target.value))} className="w-20 border rounded px-2 py-1" />
                                        <button onClick={() => removeItem(it.id)} className="text-red-600 text-sm">Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="border-t pt-4 flex items-center justify-between">
                            <div className="font-bold">Total</div>
                            <div className="font-bold">${totalPrice.toFixed(2)}</div>
                        </div>

                        {!showCheckout ? (
                            <div className="flex gap-2 mt-4">
                                <button onClick={() => { setShowCheckout(true); setSubmitError(null); setSuccessMessage(null) }} className="flex-1 bg-red-600 text-white py-2 rounded font-bold">Checkout</button>
                                <button onClick={clear} className="bg-gray-100 py-2 px-4 rounded">Clear</button>
                            </div>
                        ) : (
                            <div className="mt-4 space-y-3">
                                {successMessage ? (
                                    <div className="p-3 bg-green-50 text-green-800 rounded">{successMessage}</div>
                                ) : (
                                    <>
                                        {submitError && <div className="p-2 bg-red-50 text-red-800 rounded">{submitError}</div>}
                                        <div>
                                            <label className="text-sm font-medium">Full name</label>
                                            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded px-3 py-2 mt-1" />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium">Email</label>
                                            <input value={emailInput} onChange={(e) => setEmailInput(e.target.value)} className="w-full border rounded px-3 py-2 mt-1" />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium">Phone</label>
                                            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border rounded px-3 py-2 mt-1" />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium">Address</label>
                                            <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="w-full border rounded px-3 py-2 mt-1" />
                                        </div>

                                        <div className="flex gap-2">
                                            <button onClick={async () => {
                                                // submit order
                                                setIsSubmitting(true)
                                                setSubmitError(null)
                                                try {
                                                    const payload = {
                                                        data: {
                                                            customerName: name,
                                                            customerEmail: emailInput,
                                                            customerPhone: phone,
                                                            address,
                                                            items: items.map(it => ({ id: it.id, title: it.title, price: it.price, quantity: it.quantity })),
                                                            total: totalPrice,
                                                            status: 'pending'
                                                        }
                                                    }

                                                    const headers: Record<string, string> = { 'Content-Type': 'application/json' }
                                                    if (user && (user as any) && (useAuth as any)) {
                                                        // include token if available
                                                    }
                                                    // get token from context
                                                    // (we have token in useAuth; grab it)
                                                    // Prefer token from AuthContext
                                                    if (token) {
                                                        headers['Authorization'] = `Bearer ${token}`
                                                    }

                                                    const res = await fetch(`${apiBase}/api/orders`, {
                                                        method: 'POST',
                                                        headers,
                                                        body: JSON.stringify(payload)
                                                    })

                                                    // Some deployments return HTML error pages on failure (e.g. 405 Method Not Allowed)
                                                    // which will break JSON parsing. Try to parse JSON first, otherwise fall back to text.
                                                    let json: any = null
                                                    const textBody = await res.text()
                                                    try {
                                                        json = textBody ? JSON.parse(textBody) : null
                                                    } catch (e) {
                                                        json = null
                                                    }

                                                    if (!res.ok) {
                                                        const msg = json?.error?.message || json?.message || textBody || `Failed to create order: ${res.status}`
                                                        throw new Error(msg)
                                                    }

                                                    setSuccessMessage('Order created successfully!')
                                                    clear()
                                                    // Optionally close drawer after short delay
                                                    setTimeout(() => {
                                                        setShowCheckout(false)
                                                        close()
                                                    }, 1200)
                                                } catch (err) {
                                                    setSubmitError((err as Error).message)
                                                } finally {
                                                    setIsSubmitting(false)
                                                }
                                            }} disabled={isSubmitting} className="flex-1 bg-green-600 text-white py-2 rounded font-bold">{isSubmitting ? 'Placing...' : 'Place Order'}</button>

                                            <button onClick={() => setShowCheckout(false)} className="bg-gray-100 py-2 px-4 rounded">Cancel</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </aside>
        </div>
    )
}

export default CartDrawer
