import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { Award, Users } from 'lucide-react';

const AboutFoodSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    const navigate = useNavigate();
    return (
        <div className="relative w-full bg-gray-100 py-20 overflow-hidden">

            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 opacity-30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 opacity-30 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side - Burger Image */}
                    <div className={`relative transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>

                        {/* "Burger" Text Behind */}
                        <div className="absolute top-10 left-0 text-yellow-400 font-black text-8xl opacity-20 italic" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                            Burger
                        </div>

                        {/* Main Burger Image */}
                        <div className="relative animate-float-slow">
                            <img
                                src="https://foodking-react.vercel.app/assets/img/hero/burger.png"
                                alt="Delicious Burger"
                                className="w-full max-w-2xl drop-shadow-2xl relative z-10"
                            />

                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 opacity-20 blur-3xl rounded-full"></div>
                        </div>

                        {/* Price Tag */}
                        <div className="absolute bottom-0 left-20 bg-white rounded-3xl px-8 py-6 shadow-2xl transform rotate-6 z-20">
                            <div className="text-gray-900 text-6xl font-black">$4,99</div>
                        </div>

                        {/* Since Badge */}
                        <div className="absolute bottom-20 right-0 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-3xl px-10 py-8 shadow-2xl transform -rotate-12 z-20">
                            <div className="text-center font-black text-3xl italic">
                                SINCE /1985
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>

                        {/* Section Label */}
                        <p className="text-red-600 text-lg font-bold uppercase tracking-wider">
                            About Our Food
                        </p>

                        {/* Main Heading */}
                        <h2 className="text-gray-900 font-black text-5xl lg:text-6xl leading-tight">
                            WHERE QUALITY MEET<br />
                            EXCELLENT <span className="text-red-600">SERVICE.</span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 text-lg leading-relaxed">
                            It's the perfect dining experience where every dish is crafted with fresh, high-quality Experience quick and efficient service that ensures your food is served fresh It's the dining experience where every dish is crafted with fresh, high-quality ingredients
                        </p>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Super Quality Food */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                                        <Award className="w-8 h-8 text-red-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-gray-900 text-xl font-bold mb-2">
                                        SUPER QUALITY FOOD
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        A team of dreamers and doers build unique interactive music and art
                                    </p>
                                </div>
                            </div>

                            {/* Well Reputation */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                                        <Users className="w-8 h-8 text-red-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-gray-900 text-xl font-bold mb-2">
                                        WELL REPUTATION
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        A team of dreamers and doers build unique interactive music and art
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Author Section */}
                        <div className="flex items-center gap-6 pt-6 border-t border-gray-300">
                            {/* yolluyan duyme */}
                            <div className="text-center">
                                <button
                                    onClick={() => navigate("/gallery")}
                                    className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold shadow-lg text-lg transition-all duration-300"
                                >
                                    VIEW GALLERY
                                </button>
                            </div>
                            <div>
                                <div className="text-red-600 text-xl font-black">
                                    BRENDON GARREY
                                </div>
                                <div className="text-gray-900 font-semibold">
                                    CUSTOMER'S EXPERIENCE IS OUR HIGHEST PRIORITY.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                .animate-float-slow {
                    animation: float-slow 5s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default AboutFoodSection;