import React from 'react';
import { SlidersHorizontal, TrendingUp } from 'lucide-react';

type Props = {
    categories: string[]
    selectedCategory: string | null
    onCategoryChange: (cat: string | null) => void
    sortOrder: 'asc' | 'desc' | 'none'
    onSortChange: (order: 'asc' | 'desc' | 'none') => void
}

const ShopFilters: React.FC<Props> = ({ categories, selectedCategory, onCategoryChange, sortOrder, onSortChange }) => {
    return (
        <div className="mb-10">
            {/* Main Filter Bar */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Category Section */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-semibold text-gray-900 tracking-wide">CATEGORY</h3>
                                <SlidersHorizontal className="w-4 h-4 text-gray-400" />
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                <button
                                    onClick={() => onCategoryChange(null)}
                                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${selectedCategory === null
                                        ? 'bg-gray-900 text-white shadow-sm'
                                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    All
                                </button>
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => onCategoryChange(cat)}
                                        className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${selectedCategory === cat
                                            ? 'bg-gray-900 text-white shadow-sm'
                                            : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sort Section */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-semibold text-gray-900 tracking-wide">SORT BY PRICE</h3>
                                <TrendingUp className="w-4 h-4 text-gray-400" />
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                                <button
                                    onClick={() => onSortChange('none')}
                                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${sortOrder === 'none'
                                        ? 'bg-gray-900 text-white shadow-sm'
                                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    Default
                                </button>
                                <button
                                    onClick={() => onSortChange('asc')}
                                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${sortOrder === 'asc'
                                        ? 'bg-gray-900 text-white shadow-sm'
                                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    Low → High
                                </button>
                                <button
                                    onClick={() => onSortChange('desc')}
                                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${sortOrder === 'desc'
                                        ? 'bg-gray-900 text-white shadow-sm'
                                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    High → Low
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Results Info Bar */}
            <div className="mt-6 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                    {selectedCategory && (
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
                            <span className="font-medium text-gray-900">{selectedCategory}</span>
                            <button
                                onClick={() => onCategoryChange(null)}
                                className="text-gray-500 hover:text-gray-900 transition-colors"
                            >
                                ×
                            </button>
                        </span>
                    )}
                    {sortOrder !== 'none' && (
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
                            <span className="font-medium text-gray-900">
                                {sortOrder === 'asc' ? 'Price: Low to High' : 'Price: High to Low'}
                            </span>
                            <button
                                onClick={() => onSortChange('none')}
                                className="text-gray-500 hover:text-gray-900 transition-colors"
                            >
                                ×
                            </button>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShopFilters;