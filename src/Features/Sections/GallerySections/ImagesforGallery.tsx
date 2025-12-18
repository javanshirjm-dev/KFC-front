import { useState } from 'react';
import { Link } from 'react-router';

const images = [
    {
        src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
        title: "Classic Beef Burger",
        category: "Burgers"
    },
    {
        src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
        title: "Spicy Chicken",
        category: "Hot & Spicy"
    },
    {
        src: "https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low/SFS_Crunchy_Battered-Fried_Chicken_63_wcz66g",
        title: "Crispy Fried Chicken",
        category: "Fried"
    },
    {
        src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
        title: "Margherita Pizza",
        category: "Pizza"
    },
    {
        src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
        title: "Cheese Pizza Slice",
        category: "Pizza"
    },
    {
        src: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80",
        title: "Double Cheeseburger",
        category: "Burgers"
    },
    {
        src: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=80",
        title: "Loaded Fries",
        category: "Sides"
    },
    {
        src: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=800&q=80",
        title: "Fresh Salad Bowl",
        category: "Healthy"
    },
    {
        src: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80",
        title: "Tacos Supreme",
        category: "Mexican"
    },
    {
        src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80",
        title: "Gourmet Burger",
        category: "Burgers"
    },
    {
        src: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80",
        title: "Veggie Wrap",
        category: "Wraps"
    },
    {
        src: "https://img.taste.com.au/V1mpwu4z/taste/2016/11/sharon-108893-2.jpeg",
        title: "Chicken Wings",
        category: "Fried"
    }
];

const Gallery = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Burgers', 'Pizza', 'Fried', 'Sides', 'Healthy'];

    const filteredImages = selectedCategory === 'All'
        ? images
        : images.filter(img => img.category === selectedCategory);

    return (
        <div className="w-full bg-black py-16 sm:py-20 lg:py-28 px-4 sm:px-6">
            <div className="container mx-auto max-w-[1500px">

                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <span className="inline-block bg-orange-500 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                        FOOD GALLERY
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
                        Taste the <span className="text-orange-500">Difference</span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                        Every dish tells a story of flavor, passion, and culinary excellence
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all ${selectedCategory === cat
                                ? 'bg-orange-500 text-white shadow-lg scale-105'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid - Bento Box Style */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] sm:auto-rows-[240px] gap-3 sm:gap-4">
                    {filteredImages.map((img, i) => {
                        const isLarge = i % 7 === 0;
                        const isWide = i % 5 === 0 && i !== 0;
                        const isTall = i % 6 === 0 && i !== 0;

                        return (
                            <div
                                key={i}
                                className={`relative overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer ${isLarge ? 'col-span-2 row-span-2' : ''
                                    } ${isWide && !isLarge ? 'col-span-2' : ''
                                    } ${isTall && !isLarge ? 'row-span-2' : ''
                                    }`}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Image */}
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className={`w-full h-full object-cover transition-all duration-700 ${hoveredIndex === i ? 'scale-110' : 'scale-100'
                                        }`}
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                                    <div className={`transform transition-all duration-500 ${hoveredIndex === i ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                        }`}>
                                        <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                                            {img.category}
                                        </span>
                                        <h3 className="text-white font-bold text-base sm:text-lg lg:text-xl">
                                            {img.title}
                                        </h3>
                                    </div>

                                    {/* Always visible minimal info */}
                                    <div className={`absolute bottom-4 left-4 transition-opacity duration-300 ${hoveredIndex === i ? 'opacity-0' : 'opacity-100'
                                        }`}>
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                                            <span className="text-white text-xl">🍔</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Icon */}
                                <div className={`absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 ${hoveredIndex === i ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                    }`}>
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                    </svg>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12 sm:mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/shop" className="w-full sm:w-auto bg-orange-500 text-white px-10 sm:px-12 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-xl">
                        View Full Menu
                    </Link>
                    <Link to="/shop" className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-10 sm:px-12 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-black transition-all">
                        Order Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Gallery;