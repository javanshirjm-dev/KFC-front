import { useState, useEffect } from 'react';

const FoodGallery = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const foodImages = [
        {
            src: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=600&q=80",
            title: "Grilled Skewers",
            category: "Appetizers"
        },
        {
            src: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80",
            title: "Pasta Special",
            category: "Main Course"
        },
        {
            src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
            title: "Classic Burger",
            category: "Burgers"
        },
        {
            src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
            title: "Fresh Salad",
            category: "Healthy"
        },
        {
            src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80",
            title: "Deluxe Burger",
            category: "Signature"
        }
    ];

    return (
        <div className="relative w-full bg-gray-900 overflow-hidden">

            {/* Gallery Container */}
            <div className="relative">
                <div className="flex overflow-hidden">
                    {foodImages.map((image, index) => (
                        <div
                            key={index}
                            className={`relative flex-shrink-0 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
                                }`}
                            style={{
                                width: '20%',
                                transitionDelay: `${index * 0.1}s`
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Image */}
                            <div className="relative h-90 overflow-hidden group">
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                                    }`}></div>

                                {/* Content on Hover */}
                                <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ${hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                    }`}>
                                    <span className="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-2">
                                        {image.category}
                                    </span>
                                    <h3 className="text-white text-xl font-black text-center px-4">
                                        {image.title}
                                    </h3>
                                    <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                                        View Details
                                    </button>
                                </div>

                                {/* Decorative Corner */}
                                <div className={`absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-yellow-400 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                                    }`}></div>
                                <div className={`absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-yellow-400 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                                    }`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile/Tablet Responsive Version */}
                <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-2 p-4">
                    {foodImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative h-48 overflow-hidden rounded-lg group"
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-4">
                                <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider mb-1">
                                    {image.category}
                                </span>
                                <h3 className="text-white text-sm font-bold text-center">
                                    {image.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hide desktop gallery on mobile, show mobile grid */}
            <style>{`
                @media (max-width: 1023px) {
                    .flex.overflow-hidden {
                        display: none;
                    }
                }
                @media (min-width: 1024px) {
                    .lg\\:hidden {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default FoodGallery;