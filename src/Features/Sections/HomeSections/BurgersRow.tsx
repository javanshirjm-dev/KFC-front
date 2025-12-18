import { useState, useEffect } from 'react';
import { Link } from 'react-router';
const FoodGallery = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const foodImages = [
        {
            src: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80",
            title: "Hot Wings",
            category: "Appetizers"
        },
        {
            src: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80",
            title: "Bucket Meal",
            category: "Family Packs"
        },
        {
            src: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=600&q=80",
            title: "Zinger Burger",
            category: "Burgers"
        },
        {
            src: "https://imageproxy.wolt.com/assets/67320893d775830ca1efc8f5",
            title: "Coleslaw & Fries",
            category: "Sides"
        },
        {
            src: "https://www.thesouthafrican.com/wp-content/uploads/2025/10/feature-kfc.jpg.optimal.jpg",
            title: "Colonel's Original",
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
                                    <Link to="/shop" className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                                        View Details
                                    </Link>
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