import { useState } from 'react';

const BurgerCards = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="w-full bg-neutral-900 py-16 sm:py-20 lg:py-28 px-4 sm:px-6">
            <div className="container mx-auto max-w-6xl">

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

                    {/* Card 1 - Flame Burger */}
                    <div
                        className="relative bg-gradient-to-br from-orange-600 to-red-700 rounded-3xl overflow-hidden group cursor-pointer"
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                            }}></div>
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

                        <div className="relative p-8 sm:p-10 lg:p-12 min-h-[500px] sm:min-h-[550px] flex flex-col">

                            {/* Badge */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-white text-red-600 text-xs font-black px-4 py-2 rounded-full">
                                    🔥 BESTSELLER
                                </span>
                                <span className="text-white/80 text-sm">★★★★★</span>
                            </div>

                            {/* Title */}
                            <div className="mb-6">
                                <h3 className="text-white text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-2">
                                    FLAME<br />BURGER
                                </h3>
                                <p className="text-white/90 text-base sm:text-lg">
                                    Double smashed patty with melted cheddar, crispy bacon & our signature flame sauce
                                </p>
                            </div>

                            {/* Burger Image */}
                            <div className="flex-1 flex items-center justify-center mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80"
                                    alt="Flame Burger"
                                    className={`w-full max-w-[280px] sm:max-w-[320px] drop-shadow-2xl transition-transform duration-700 ${hoveredCard === 1 ? 'scale-110 rotate-6' : 'scale-100'
                                        }`}
                                />
                            </div>

                            {/* Price & Button */}
                            <div className="flex items-center justify-between">
                                <div className="text-white">
                                    <div className="text-5xl sm:text-6xl font-black">$15</div>
                                    <div className="text-white/70 text-sm">+ Free Fries</div>
                                </div>
                                <button className="bg-white text-red-600 px-8 py-4 rounded-full font-black text-base hover:bg-yellow-400 hover:text-black transition-all hover:scale-110 shadow-xl">
                                    ORDER →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - Classic Deluxe */}
                    <div
                        className="relative bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl overflow-hidden group cursor-pointer"
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                            }}></div>
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

                        <div className="relative p-8 sm:p-10 lg:p-12 min-h-[500px] sm:min-h-[550px] flex flex-col">

                            {/* Badge */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-black text-yellow-400 text-xs font-black px-4 py-2 rounded-full">
                                    👑 CHEF'S PICK
                                </span>
                                <span className="text-black/70 text-sm">★★★★★</span>
                            </div>

                            {/* Title */}
                            <div className="mb-6">
                                <h3 className="text-black text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-2">
                                    CLASSIC<br />DELUXE
                                </h3>
                                <p className="text-black/80 text-base sm:text-lg">
                                    Premium beef patty, lettuce, tomato, pickles & our secret house sauce on a toasted bun
                                </p>
                            </div>

                            {/* Burger Image */}
                            <div className="flex-1 flex items-center justify-center mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80"
                                    alt="Classic Deluxe"
                                    className={`w-full max-w-[280px] sm:max-w-[320px] drop-shadow-2xl transition-transform duration-700 ${hoveredCard === 2 ? 'scale-110 -rotate-6' : 'scale-100'
                                        }`}
                                />
                            </div>

                            {/* Price & Button */}
                            <div className="flex items-center justify-between">
                                <div className="text-black">
                                    <div className="text-5xl sm:text-6xl font-black">$13</div>
                                    <div className="text-black/60 text-sm">+ Free Drink</div>
                                </div>
                                <button className="bg-black text-yellow-400 px-8 py-4 rounded-full font-black text-base hover:bg-gray-900 transition-all hover:scale-110 shadow-xl">
                                    ORDER →
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BurgerCards;