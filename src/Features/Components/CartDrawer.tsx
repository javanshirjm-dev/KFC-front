import React from 'react'
import { useCart } from '../../Context/CartContext'
import { useAuth } from '../../Context/AuthContext'

const CartDrawer: React.FC = () => {
    const { items, totalItems, totalPrice, isOpen, close, removeItem, setQuantity, clear } = useCart()
    const { user } = useAuth()

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

                        <div className="flex gap-2 mt-4">
                            <button onClick={() => { /* placeholder for checkout */ }} className="flex-1 bg-red-600 text-white py-2 rounded font-bold">Checkout</button>
                            <button onClick={clear} className="bg-gray-100 py-2 px-4 rounded">Clear</button>
                        </div>
                    </div>
                )}
            </aside>
        </div>
    )
}

export default CartDrawer
