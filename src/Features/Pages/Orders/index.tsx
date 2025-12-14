import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../../../Context/AuthContext'
import { useNavigate } from 'react-router'

const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:1337'

type Order = {
    id: number
    attributes: {
        customerName: string
        customerEmail: string
        customerPhone: string
        address: string
        items: any[]
        total: number
        status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
        createdAt: string
    }
}

async function fetchUserOrders(token: string): Promise<Order[]> {
    const res = await fetch(`${apiBase}/api/orders?populate=*`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    if (!res.ok) {
        throw new Error(`Failed to fetch orders: ${res.status}`)
    }
    const json = await res.json()
    console.log('Fetched orders response:', json)
    return json.data || []
}

const OrdersPage: React.FC = () => {
    const navigate = useNavigate()
    const { user, token } = useAuth()

    if (!user || !token) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-600 font-medium mb-4">Please log in to view your orders</p>
                    <button onClick={() => navigate('/')} className="bg-red-600 text-white px-6 py-2 rounded">Go Home</button>
                </div>
            </div>
        )
    }

    const { data: orders, isLoading, isError, error } = useQuery({
        queryKey: ['orders', token],
        queryFn: () => fetchUserOrders(token),
        enabled: !!token
    })

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-3 border-gray-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading your orders...</p>
                </div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-600 font-medium mb-4">Failed to load orders</p>
                    <p className="text-gray-600 mb-6">{(error as Error)?.message}</p>
                    <button onClick={() => navigate('/')} className="bg-red-600 text-white px-6 py-2 rounded">Go Home</button>
                </div>
            </div>
        )
    }

    const statusColors: Record<string, string> = {
        pending: 'bg-yellow-100 text-yellow-800',
        confirmed: 'bg-blue-100 text-blue-800',
        shipped: 'bg-purple-100 text-purple-800',
        delivered: 'bg-green-100 text-green-800',
        cancelled: 'bg-red-100 text-red-800'
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Your Orders</h1>
                    <button onClick={() => navigate(-1)} className="text-gray-600 hover:text-gray-900">← Back</button>
                </div>

                {!orders || orders.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-5xl mb-4">📦</div>
                        <p className="text-gray-600 font-medium">No orders yet</p>
                        <button onClick={() => navigate('/shop')} className="mt-4 bg-red-600 text-white px-6 py-2 rounded">Continue Shopping</button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order: any) => {
                            // Handle both Strapi v4 format (with attributes) and direct format
                            const attrs = order.attributes || order
                            
                            if (!attrs) {
                                console.error('Invalid order structure:', order)
                                return null
                            }

                            const status = attrs.status || 'pending'
                            const statusClass = statusColors[status] || statusColors.pending
                            const createdDate = new Date(attrs.createdAt).toLocaleDateString()

                            return (
                                <div key={order.id} className="bg-white rounded-lg shadow p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">Order #{order.id}</h3>
                                            <p className="text-sm text-gray-500">{createdDate}</p>
                                        </div>
                                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${statusClass}`}>
                                            {status.charAt(0).toUpperCase() + status.slice(1)}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                        <div>
                                            <p className="text-sm text-gray-600">Customer</p>
                                            <p className="font-medium text-gray-900">{attrs.customerName || 'N/A'}</p>
                                            <p className="text-sm text-gray-600">{attrs.customerEmail || 'N/A'}</p>
                                            <p className="text-sm text-gray-600">{attrs.customerPhone || 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Delivery Address</p>
                                            <p className="font-medium text-gray-900">{attrs.address || 'N/A'}</p>
                                        </div>
                                    </div>

                                    <div className="border-t pt-4">
                                        <p className="text-sm font-semibold text-gray-900 mb-3">Items</p>
                                        <div className="space-y-2">
                                            {attrs.items && Array.isArray(attrs.items) && attrs.items.map((item: any, idx: number) => (
                                                <div key={idx} className="flex justify-between text-sm">
                                                    <span>{item.title} x{item.quantity}</span>
                                                    <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex justify-between border-t pt-3 mt-3 font-semibold text-lg">
                                            <span>Total</span>
                                            <span>${Number(attrs.total || 0).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default OrdersPage
