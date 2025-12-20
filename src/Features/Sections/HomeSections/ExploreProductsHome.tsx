import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'
import { useTranslation } from 'react-i18next' // Import hook

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

async function fetchExploreFoods(): Promise<FoodItem[]> {
    const res = await fetch(`${apiBase}/api/foods?populate=*&pagination[pageSize]=4`)
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

const ExploreProductsHome: React.FC = () => {
    const { t } = useTranslation(); // Initialize hook
    const { data, isLoading, isError, error } = useQuery<FoodItem[], Error>({
        queryKey: ['exploreFoods'],
        queryFn: fetchExploreFoods
    })

    if (isLoading) {
        return (
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="text-center text-gray-600">{t('explore_products.loading')}</div>
                </div>
            </section>
        )
    }

    if (isError) {
        return (
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="text-center text-red-600">
                        {t('explore_products.error', { message: (error as Error)?.message })}
                    </div>
                </div>
            </section>
        )
    }

    const items = data ?? []

    return (
        <section className="py-12">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900">{t('explore_products.title')}</h2>
                    <Link to="/shop" className="text-sm text-gray-600 hover:text-gray-900">{t('explore_products.view_all')}</Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((it: any) => {
                        // Strapi items might be nested under attributes
                        const raw = it.attributes ? it.attributes : it
                        const imgRel = raw.image?.data?.attributes?.url || raw.image?.url || raw.image?.formats?.thumbnail?.url
                        const img = buildImageUrlFromMedia({ id: raw.image?.data?.id || raw.image?.id || 0, name: raw.image?.name || '', url: imgRel })
                        const title = raw.title || raw.name || t('explore_products.untitled')
                        const price = typeof raw.price !== 'undefined' ? raw.price : null
                        const id = it.id ?? raw.id

                        return (
                            <Link key={id} to={`/shop/${id}`} className="block bg-white rounded-lg shadow-sm hover:shadow-md overflow-hidden">
                                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                                    {img ? (
                                        <img src={img} alt={title} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400">🍽️</div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="text-md font-medium text-gray-900 mb-1">{title}</h3>
                                    {price !== null ? (
                                        <div className="text-sm font-semibold text-gray-800">${Number(price).toFixed(2)}</div>
                                    ) : (
                                        <div className="text-sm text-gray-500">{t('explore_products.price_unavailable')}</div>
                                    )}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ExploreProductsHome