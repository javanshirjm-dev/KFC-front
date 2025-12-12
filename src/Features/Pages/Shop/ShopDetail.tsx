import React, { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { ShoppingCart, ChevronLeft, Star } from 'lucide-react'
import { useCart } from '../../../Context/CartContext'
import { useAuth } from '../../../Context/AuthContext'
import DeliveryBanner from '../../Sections/ContactSections/DeliveryChallange'

type MediaObject = {
    id: number
    name: string
    alternativeText?: string
    caption?: string
    width?: number
    height?: number
    formats?: Record<string, { url: string }>
    url: string
}

type CategoryObject = {
    id: number
    foodCategory?: string
}

type FoodItem = {
    id: number
    title: string
    description?: string
    price?: number
    image?: MediaObject | null
    category?: CategoryObject | null
}

const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:1337'

async function fetchFoodDetail(id: string): Promise<FoodItem> {
    const res = await fetch(`${apiBase}/api/foods/${id}?populate=*`)
    let json: any | null = null
    if (!res.ok) {
        // If item not found by id, attempt fallbacks (slug or collection search)
        if (res.status === 404) {
            // Try to fetch by slug filter
            const trySlug = await fetch(`${apiBase}/api/foods?populate=*&filters[slug][$eq]=${encodeURIComponent(id)}&pagination[pageSize]=1`)
            if (trySlug.ok) {
                const sj = await trySlug.json()
                if (sj && sj.data && sj.data.length > 0) {
                    // Found via slug
                    const found = sj.data[0]
                    json = { data: found }
                }
            }

            // If still not found, try fetching entire list and match by id or slug
            if (!json || !json.data) {
                const list = await fetch(`${apiBase}/api/foods?populate=*&pagination[pageSize]=100`)
                if (list.ok) {
                    const lj = await list.json()
                    if (lj && lj.data && lj.data.length > 0) {
                        // try to find by numeric id or by slug/title
                        const asNumber = Number(id)
                        let candidate = lj.data.find((it: any) => Number(it.id) === asNumber)
                        if (!candidate) {
                            candidate = lj.data.find((it: any) => {
                                const slug = it.attributes?.slug || it.slug
                                const title = it.attributes?.title || it.title
                                return slug === id || String(title).toLowerCase() === String(id).toLowerCase()
                            })
                        }
                        if (candidate) {
                            json = { data: candidate }
                        }
                    }
                }
            }
        }

        if (!json || !json.data) {
            const body = await res.text()
            throw new Error(`Failed to fetch food: ${res.status} ${body}`)
        }
    } else {
        json = await res.json()
    }
    if (!json || !json.data) throw new Error('Food not found')

    // Strapi v4 single item responses often have the shape:
    // { data: { id, attributes: { title, description, price, image: { data: {...} }, category: { data: {...} } } } }
    const raw = json.data

    // If attributes present, flatten into our FoodItem shape
    if (raw.attributes) {
        const attrs = raw.attributes as any

        // Helper to read media either from nested .data or direct object
        const resolveMedia = (m: any): MediaObject | null => {
            if (!m) return null
            // If nested { data: { id, attributes: { url, ... } } }
            if (m.data) {
                const md = m.data
                // attributes may contain url or formats
                const at = md.attributes || {}
                const url = at.url || (at.formats && (at.formats.medium?.url || at.formats.thumbnail?.url)) || null
                return {
                    id: md.id,
                    name: at.name || at.alternativeText || '',
                    alternativeText: at.alternativeText,
                    caption: at.caption,
                    width: at.width,
                    height: at.height,
                    formats: at.formats,
                    url: url || at.url || ''
                }
            }

            // If already a media object
            return {
                id: m.id,
                name: m.name || m.alternativeText || '',
                alternativeText: m.alternativeText,
                caption: m.caption,
                width: m.width,
                height: m.height,
                formats: m.formats,
                url: m.url || ''
            }
        }

        const image = resolveMedia(attrs.image)

        // Category may be nested under data/attributes
        let category: CategoryObject | null = null
        if (attrs.category) {
            const cat = attrs.category.data || attrs.category
            const catAttrs = cat.attributes || {}
            category = {
                id: cat.id,
                foodCategory: catAttrs.foodCategory || catAttrs.name || null
            }
        }

        return {
            id: raw.id,
            title: attrs.title || attrs.name || '',
            description: attrs.description || attrs.shortDescription || '',
            price: typeof attrs.price !== 'undefined' ? attrs.price : undefined,
            image: image,
            category: category
        }
    }

    // Fallback: return raw as-is (best-effort)
    return raw as FoodItem
}

function buildImageUrlFromMedia(media: MediaObject | undefined | null) {
    const rel = media?.url
    if (!rel) return undefined
    if (rel.startsWith('http')) return rel
    return apiBase.replace(/\/$/, '') + rel
}

const ShopDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const { user } = useAuth()
    const cart = useCart()

    const { data, isLoading, isError, error } = useQuery<FoodItem, Error>({
        queryKey: ['food', id],
        queryFn: () => fetchFoodDetail(id!),
        enabled: !!id
    })

    const imageUrl = useMemo(() => buildImageUrlFromMedia(data?.image), [data?.image])

    if (!id) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <p className="text-gray-600">Food ID not provided</p>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-3 border-gray-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 font-medium">Loading food details...</p>
                </div>
            </div>
        )
    }

    if (isError || !data) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center max-w-md">
                    <div className="text-5xl mb-4">😕</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Food not found</h3>
                    <p className="text-gray-600 mb-6">{(error as Error)?.message}</p>
                    <button
                        onClick={() => navigate('/shop')}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Back to Shop
                    </button>
                </div>
            </div>
        )
    }

    const handleAddToCart = () => {
        if (!user) {
            alert('Please log in first to add items to your cart')
            return
        }
        cart.addItem(
            {
                id: data.id,
                title: data.title,
                price: data.price,
                image: imageUrl ?? null
            },
            1
        )
        cart.open()
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-6 py-4 max-w-7xl">
                    <button
                        onClick={() => navigate('/shop')}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
                    >
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Shop
                    </button>
                </div>
            </div>

            {/* Detail Section */}
            <div className="container mx-auto px-6 py-12 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Image */}
                    <div className="flex items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden">
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt={data.title}
                                className="w-full h-auto object-cover max-h-96 md:max-h-full"
                            />
                        ) : (
                            <div className="w-full h-96 flex items-center justify-center bg-gray-100">
                                <div className="text-center">
                                    <div className="text-6xl mb-3">🍽️</div>
                                    <p className="text-gray-400 font-medium">No image available</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center">
                        {/* Category */}
                        {data.category?.foodCategory && (
                            <span className="inline-block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 w-fit">
                                {data.category.foodCategory}
                            </span>
                        )}

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            {data.title}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>
                            <span className="text-gray-600 text-sm ml-2">(127 reviews)</span>
                        </div>

                        {/* Price */}
                        {typeof data.price !== 'undefined' ? (
                            <div className="mb-8">
                                <p className="text-gray-600 text-sm mb-2">Price</p>
                                <p className="text-5xl font-bold text-gray-900">
                                    ${data.price.toFixed(2)}
                                </p>
                            </div>
                        ) : (
                            <p className="text-gray-400 text-sm mb-8">Price not available</p>
                        )}

                        {/* Description */}
                        {data.description && (
                            <div className="mb-8">
                                <p className="text-gray-600 text-sm font-medium mb-3">Description</p>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {data.description}
                                </p>
                            </div>
                        )}

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3 hover:from-red-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                        >
                            <ShoppingCart className="w-6 h-6" />
                            Add to Cart
                        </button>

                        {/* Stock Info */}
                        <p className="text-center text-green-600 font-medium mt-4">
                            ✓ In Stock
                        </p>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="text-3xl mb-3">🚚</div>
                        <h3 className="font-bold text-gray-900 mb-2">Fast Delivery</h3>
                        <p className="text-sm text-gray-600">Get your food delivered in 30 minutes or less</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="text-3xl mb-3">👨‍🍳</div>
                        <h3 className="font-bold text-gray-900 mb-2">Fresh Ingredients</h3>
                        <p className="text-sm text-gray-600">Made with the highest quality fresh ingredients</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="text-3xl mb-3">💯</div>
                        <h3 className="font-bold text-gray-900 mb-2">Best Quality</h3>
                        <p className="text-sm text-gray-600">Guaranteed satisfaction with every order</p>
                    </div>
                </div>
            </div>
            <DeliveryBanner />
        </div>

    )
}

export default ShopDetail
