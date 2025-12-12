import React, { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { ShoppingBag, Star, Plus } from 'lucide-react'
import ShopFilters from './ShopFilters'
import { useCart } from '../../../Context/CartContext'

// Response shape from your backend (example you provided)
type MediaObject = {
    id: number
    name: string
    alternativeText?: string
    caption?: string
    width?: number
    height?: number
    formats?: Record<string, { url: string }>
    url: string // relative path like `/uploads/...`
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

async function fetchFoods(): Promise<FoodItem[]> {
    const res = await fetch(`${apiBase}/api/foods?populate=*&pagination[pageSize]=100`)
    if (!res.ok) {
        const body = await res.text()
        throw new Error(`Failed to fetch foods: ${res.status} ${body}`)
    }
    const json = await res.json()
    if (!json || !json.data) return []
    return json.data as FoodItem[]
}

function buildImageUrlFromMedia(media: MediaObject | undefined | null) {
    const rel = media?.url
    if (!rel) return undefined
    if (rel.startsWith('http')) return rel
    return apiBase.replace(/\/$/, '') + rel
}

const Products: React.FC = () => {
    const navigate = useNavigate()
    const { data, isLoading, isError, error } = useQuery<FoodItem[], Error>({
        queryKey: ['foods'],
        queryFn: fetchFoods
    })

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'none'>('none')

    const cart = useCart()

    const categories = useMemo(() => {
        if (!data) return [] as string[]
        const set = new Set<string>()
        data.forEach((it) => {
            const cat = it.category?.foodCategory
            if (cat) set.add(cat)
        })
        return Array.from(set)
    }, [data])

    const filtered = useMemo(() => {
        if (!data) return [] as FoodItem[]
        let items = data.slice()
        if (selectedCategory) {
            items = items.filter((it) => it.category?.foodCategory === selectedCategory)
        }
        if (sortOrder === 'asc') {
            items.sort((a, b) => (a.price ?? 0) - (b.price ?? 0))
        } else if (sortOrder === 'desc') {
            items.sort((a, b) => (b.price ?? 0) - (a.price ?? 0))
        }
        return items
    }, [data, selectedCategory, sortOrder])

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-3 border-gray-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 font-medium">Loading menu...</p>
                </div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center max-w-md">
                    <div className="text-5xl mb-4">😕</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Unable to load products</h3>
                    <p className="text-gray-600">{(error as Error)?.message}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-6 py-16 max-w-7xl">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-light text-gray-900 mb-4 tracking-tight">
                            Discover Our Menu
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Carefully curated dishes made with the finest ingredients.
                            Each item tells a story of flavor and craftsmanship.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 max-w-7xl">
                {/* Filters */}
                <ShopFilters
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    sortOrder={sortOrder}
                    onSortChange={setSortOrder}
                />

                {/* Results Count */}
                <div className="mb-8">
                    <p className="text-sm text-gray-600">
                        Showing <span className="font-semibold text-gray-900">{filtered.length}</span> {filtered.length === 1 ? 'item' : 'items'}
                    </p>
                </div>

                {/* Products Grid */}
                {filtered && filtered.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map((item) => {
                            const img = buildImageUrlFromMedia(item.image)
                            const category = item.category?.foodCategory
                            return (
                                <article
                                    key={item.id}
                                    onClick={() => navigate(`/shop/${item.id}`)}
                                    className="group bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
                                >
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
                                        {img ? (
                                            <img
                                                src={img}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                <div className="text-center">
                                                    <div className="text-5xl mb-3">🍽️</div>
                                                    <p className="text-sm font-medium">No image available</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Rating Badge */}
                                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                                            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                            <span className="text-xs font-semibold text-gray-900">4.8</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Category */}
                                        {category && (
                                            <span className="inline-block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                                {category}
                                            </span>
                                        )}

                                        {/* Title */}
                                        <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        {item.description && (
                                            <p className="text-sm text-gray-600 mb-5 line-clamp-2 leading-relaxed">
                                                {item.description}
                                            </p>
                                        )}

                                        {/* Price and Actions */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            {typeof item.price !== 'undefined' ? (
                                                <div>
                                                    <span className="text-2xl font-semibold text-gray-900">
                                                        ${item.price.toFixed(2)}
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className="text-gray-400 text-sm">Price not available</span>
                                            )}

                                            <button onClick={(e) => { e.stopPropagation(); cart.addItem({ id: item.id, title: item.title, price: item.price, image: img ?? null }, 1) }} className="group/btn bg-gray-900 hover:bg-gray-800 text-white pl-4 pr-3 py-2.5 rounded-lg transition-all flex items-center gap-2 shadow-sm hover:shadow-md">
                                                <span className="text-sm font-medium">Add</span>
                                                <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center group-hover/btn:bg-white/30 transition-colors">
                                                    <Plus className="w-3.5 h-3.5" />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                            <ShoppingBag className="w-10 h-10 text-gray-400" />
                        </div>
                        <h3 className="text-2xl font-medium text-gray-900 mb-2">No items found</h3>
                        <p className="text-gray-600 mb-6">Try adjusting your filters to see more results</p>
                        <button
                            onClick={() => {
                                setSelectedCategory(null)
                                setSortOrder('none')
                            }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Products