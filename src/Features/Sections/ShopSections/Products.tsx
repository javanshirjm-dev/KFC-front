import React from 'react'
import { useQuery } from '@tanstack/react-query'

type StrapiImage = {
    data: {
        attributes: {
            url: string
        } | null
    } | null
}

type FoodAttributes = {
    title: string
    description?: string
    price?: number
    category?: { data: { id: number; attributes: { name: string } } | null }
    image?: StrapiImage
}

type StrapiItem = {
    id: number
    attributes: FoodAttributes
}

const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:1337'

async function fetchFoods(): Promise<StrapiItem[]> {
    const res = await fetch(`${apiBase}/api/foods?populate=deep`)
    if (!res.ok) throw new Error('Failed to fetch foods')
    const json = await res.json()
    // Strapi returns { data: [...] }
    return json.data || []
}

function buildImageUrl(image: StrapiImage | undefined) {
    const rel = image?.data?.attributes?.url
    if (!rel) return undefined
    // If URL already absolute, return as-is
    if (rel.startsWith('http')) return rel
    return apiBase.replace(/\/$/, '') + rel
}

const Products: React.FC = () => {
    const { data, isLoading, isError, error } = useQuery<StrapiItem[], Error>({ queryKey: ['foods'], queryFn: fetchFoods })

    if (isLoading) return <div>Loading products...</div>
    if (isError) return <div>Error: {(error as Error)?.message}</div>

    return (
        <section className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data && data.length ? (
                    data.map((item) => {
                        const attrs = item.attributes
                        const img = buildImageUrl(attrs.image)
                        const category = attrs.category?.data?.attributes?.name
                        return (
                            <article key={item.id} className="bg-white rounded shadow p-4 flex flex-col">
                                {img ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={img} alt={attrs.title} className="w-full h-40 object-cover rounded mb-4" />
                                ) : (
                                    <div className="w-full h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">No image</div>
                                )}
                                <h3 className="text-lg font-semibold">{attrs.title}</h3>
                                {category && <span className="text-sm text-gray-500">{category}</span>}
                                {attrs.description && <p className="text-sm text-gray-700 mt-2 line-clamp-3">{attrs.description}</p>}
                                {typeof attrs.price !== 'undefined' && (
                                    <div className="mt-auto pt-4">
                                        <span className="text-xl font-bold">${attrs.price}</span>
                                    </div>
                                )}
                            </article>
                        )
                    })
                ) : (
                    <div>No products found.</div>
                )}
            </div>
        </section>
    )
}

export default Products