import React, { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { ShoppingCart, ChevronLeft, Star, Check } from 'lucide-react'
import { useCart } from '../../../Context/CartContext'
import { useAuth } from '../../../Context/AuthContext'
import { useNotification } from '../../../Context/NotificationContext'
import DeliveryBanner from '../../Sections/ContactSections/DeliveryChallange'
import { Heart, Zap } from 'lucide-react'


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
            1,
            (title) => {
                addNotification(`✓ ${title} added to cart!`, 'success', 2500)
            }
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt={data.title}
                                    className="w-full h-auto object-cover"
                                />
                            ) : (
                                <div className="w-full aspect-square flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-7xl mb-3">🍽️</div>
                                        <p className="text-gray-400 font-medium">No image</p>
                                    </div>
                                </div>
                            )}
                            {/* Favorite Button */}
                            <button className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                <Heart className="w-5 h-5 text-gray-700" />
                            </button>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col">
                        {/* Category & Badge */}
                        <div className="flex items-center gap-3 mb-4">
                            {data.category?.foodCategory && (
                                <span className="text-sm font-semibold text-red-600 uppercase">
                                    {data.category.foodCategory}
                                </span>
                            )}
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-1">
                                <Zap className="w-3 h-3" />
                                Fresh
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {data.title}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-gray-600">(127)</span>
                        </div>

                        {/* Price */}
                        {typeof data.price !== 'undefined' ? (
                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold text-gray-900">
                                        ${data.price.toFixed(2)}
                                    </span>
                                    <span className="text-xl text-gray-400 line-through">
                                        ${(data.price * 1.25).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-400 mb-6">Price not available</p>
                        )}

                        {/* Description */}
                        {data.description && (
                            <p className="text-gray-600 mb-1 leading-relaxed">
                                {data.description}
                            </p>
                        )}

                        {/* Divider */}
                        <div className="border-t border-gray-200 my-6"></div>

                        {/* Quick Info */}
                        <div className="flex gap-6 mb-8 text-sm">
                            <div>
                                <p className="text-gray-500 mb-1">Delivery</p>
                                <p className="font-semibold text-gray-900">30 min</p>
                            </div>
                            <div>
                                <p className="text-gray-500 mb-1">Status</p>
                                <p className="font-semibold text-green-600">In Stock</p>
                            </div>
                            <div>
                                <p className="text-gray-500 mb-1">Serving</p>
                                <p className="font-semibold text-gray-900">1-2 people</p>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 hover:bg-red-700 transition-colors mb-3"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                        </button>

                        {/* Secondary Info */}
                        <p className="text-center text-sm text-gray-500">
                            Free delivery on orders over $50
                        </p>
                    </div>
                </div>



                <div className="max-w-7xl mx-auto  py-16">
                    {/* Main Title */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Experience Culinary Excellence Like Never Before
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-5xl">
                            At our restaurant, we believe that dining is more than just eating—it's an experience that engages all your senses.
                            From the moment you step through our doors, you'll be immersed in an atmosphere of warmth and sophistication.
                            Our expert chefs meticulously craft each dish using only the finest locally-sourced ingredients, ensuring every bite
                            is a celebration of flavor and quality. Whether you're joining us for a casual lunch, romantic dinner, or special celebration,
                            we're committed to creating memorable moments that will keep you coming back. Our attentive staff is dedicated to providing
                            exceptional service that makes every visit feel personal and special.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-300 mb-12"></div>

                    {/* More Details Section */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                            What Makes Us Special
                        </h2>

                        {/* Two Column Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                            {/* Left Column */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                    </div>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        Fresh, organic ingredients sourced daily from local farms and trusted suppliers
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                    </div>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        Award-winning chefs with decades of culinary expertise and passion for innovation
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                    </div>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        Extensive menu catering to all dietary preferences including vegan, gluten-free, and keto options
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                    </div>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        Elegant dining atmosphere with carefully curated ambiance and comfortable seating
                                    </p>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                    </div>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        Fast and reliable delivery service ensuring your meal arrives hot and fresh at your door
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                    </div>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        Personalized service from our friendly staff who remember your preferences and favorites
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                    </div>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        Special event catering and private dining rooms available for celebrations and gatherings
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-1">
                                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                    </div>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        Loyalty rewards program offering exclusive discounts and special perks for regular guests
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <DeliveryBanner />
        </div>

    )
}

export default ShopDetail
