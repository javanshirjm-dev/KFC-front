import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const HowWeServeSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const navigate = useNavigate();

    return (
        <div className="w-full bg-gradient-to-b from-white to-yellow-50 py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl">

                {/* Heading */}
                <h2 className="text-center text-gray-900 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-12 sm:mb-16 lg:mb-20">
                    HOW WE SERVE YOU?
                </h2>

                {/* Steps Container - Desktop Layout */}
                <div className="hidden lg:flex relative items-center justify-center gap-6 xl:gap-9">

                    {/* Step 1 - Cooking with Care */}
                    <div className={`relative z-10 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="relative inline-block group">
                            {/* Circle Background */}
                            <div className="w-60 h-60 xl:w-80 xl:h-80 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                                <img
                                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80"
                                    alt="Pizza"
                                    className="w-48 h-48 xl:w-64 xl:h-64 object-cover rounded-full"
                                />
                            </div>
                            {/* Number Badge */}
                            <div className="absolute -top-4 -left-4 w-14 h-14 xl:w-16 xl:h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-black text-xl xl:text-2xl shadow-lg group-hover:bg-green-700 transition-colors">
                                01
                            </div>
                        </div>
                        <h3 className="text-gray-900 text-xl xl:text-2xl font-black mt-6 xl:mt-8 mb-3 xl:mb-4">
                            COOKING WITH CARE
                        </h3>
                        <p className="text-gray-600 text-sm xl:text-base max-w-xs mx-auto leading-relaxed">
                            Experience the perfect dining with our carefully crafted dishes
                        </p>
                    </div>

                    {/* Dotted Line 1 */}
                    <div className="relative z-0 -mx-8 xl:-mx-12">
                        <div className="w-32 xl:w-48 border-t-2 border-dotted border-gray-400"></div>
                    </div>

                    {/* Step 2 - Quickly Delivery (Elevated) */}
                    <div className={`relative z-20 text-center -mt-32 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
                        <div className="relative inline-block group">
                            {/* Square Background */}
                            <div className="w-56 h-56 xl:w-66 xl:h-66 bg-gradient-to-br mt-32 xl:mt-40 from-yellow-300 to-yellow-400 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-300 group-hover:scale-105">
                                <div className="transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                                    <div className="text-7xl xl:text-9xl">🧀</div>
                                </div>
                            </div>
                            {/* Number Badge */}
                            <div className="absolute top-72 xl:top-85 left-6 xl:left-8 w-14 h-14 xl:w-16 xl:h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-black text-xl xl:text-2xl shadow-lg group-hover:bg-green-700 transition-colors">
                                02
                            </div>
                        </div>
                        <h3 className="text-gray-900 text-xl xl:text-2xl font-black mt-6 xl:mt-8 mb-3 xl:mb-4">
                            QUICKLY DELIVERY
                        </h3>
                        <p className="text-gray-700 text-sm xl:text-base max-w-xs mx-auto leading-relaxed">
                            Fast and efficient delivery right to your doorstep
                        </p>
                    </div>

                    {/* Dotted Line 2 */}
                    <div className="relative z-0 -mx-8 xl:-mx-12 mt-32">
                        <div className="w-32 xl:w-48 border-t-2 border-dotted border-gray-400"></div>
                    </div>

                    {/* Step 3 - Choose Food */}
                    <div className={`relative z-10 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
                        <div className="relative inline-block group">
                            {/* Circle Background */}
                            <div className="w-60 h-60 xl:w-80 xl:h-80 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                                <img
                                    src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&q=80"
                                    alt="Delivery"
                                    className="w-64 h-64 xl:w-82 xl:h-82 object-cover"
                                />
                            </div>
                            {/* Number Badge */}
                            <div className="absolute -top-4 -left-4 w-14 h-14 xl:w-16 xl:h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-black text-xl xl:text-2xl shadow-lg group-hover:bg-green-700 transition-colors">
                                03
                            </div>
                        </div>
                        <h3 className="text-gray-900 text-xl xl:text-2xl font-black mt-6 xl:mt-8 mb-3 xl:mb-4">
                            CHOOSE FOOD
                        </h3>
                        <p className="text-gray-600 text-sm xl:text-base max-w-xs mx-auto leading-relaxed">
                            Browse our extensive menu and pick your favorites
                        </p>
                    </div>
                </div>

                {/* Steps Container - Mobile/Tablet Layout */}
                <div className="lg:hidden flex flex-col items-center gap-12 sm:gap-16">

                    {/* Step 1 */}
                    <div className={`relative text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="relative inline-block">
                            <div className="w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80"
                                    alt="Pizza"
                                    className="w-44 h-44 sm:w-56 sm:h-56 object-cover rounded-full"
                                />
                            </div>
                            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-black text-lg sm:text-2xl shadow-lg">
                                01
                            </div>
                        </div>
                        <h3 className="text-gray-900 text-xl sm:text-2xl font-black mt-6 mb-3">
                            COOKING WITH CARE
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base max-w-sm mx-auto leading-relaxed px-4">
                            Experience the perfect dining with our carefully crafted dishes
                        </p>
                    </div>

                    {/* Connector Arrow */}
                    <div className="text-4xl text-yellow-400">↓</div>

                    {/* Step 2 */}
                    <div className={`relative text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
                        <div className="relative inline-block">
                            <div className="w-56 h-56 sm:w-64 sm:h-64 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3">
                                <div className="transform -rotate-3">
                                    <div className="text-7xl sm:text-8xl">🧀</div>
                                </div>
                            </div>
                            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-black text-lg sm:text-2xl shadow-lg">
                                02
                            </div>
                        </div>
                        <h3 className="text-gray-900 text-xl sm:text-2xl font-black mt-6 mb-3">
                            QUICKLY DELIVERY
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base max-w-sm mx-auto leading-relaxed px-4">
                            Fast and efficient delivery right to your doorstep
                        </p>
                    </div>

                    {/* Connector Arrow */}
                    <div className="text-4xl text-yellow-400">↓</div>

                    {/* Step 3 */}
                    <div className={`relative text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
                        <div className="relative inline-block">
                            <div className="w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&q=80"
                                    alt="Delivery"
                                    className="w-60 h-60 sm:w-76 sm:h-76 object-cover"
                                />
                            </div>
                            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-black text-lg sm:text-2xl shadow-lg">
                                03
                            </div>
                        </div>
                        <h3 className="text-gray-900 text-xl sm:text-2xl font-black mt-6 mb-3">
                            CHOOSE FOOD
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base max-w-sm mx-auto leading-relaxed px-4">
                            Browse our extensive menu and pick your favorites
                        </p>
                    </div>
                </div>
            </div>
            {/* yolluyan duyme */}
            <div className="text-center mt-16">
                <button
                    onClick={() => navigate("/faq")}
                    className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                >
                    Learn More FAQ
                </button>
            </div>
        </div>
    );
};

export default HowWeServeSection;