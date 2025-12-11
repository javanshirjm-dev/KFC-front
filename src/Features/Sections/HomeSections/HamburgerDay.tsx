import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const HamburgerDayBanner = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const images = [
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=80",
        "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&q=80",
        "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=1200&q=80"
    ];

    return (
        <div className="relative w-full h-[600px] overflow-hidden bg-gray-900">
            <div className="grid md:grid-cols-2 h-full">

                {/* Left Side - Image Section */}
                <div className="relative h-full overflow-hidden group">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                        style={{
                            backgroundImage: `url(${images[imageIndex]})`,
                            filter: 'brightness(0.9)'
                        }}
                    >
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
                        <button
                            onClick={() => setImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-4 transition-all duration-300 transform hover:scale-110 shadow-2xl group"
                        >
                            <ChevronRight className="w-6 h-6 transform rotate-180" />
                        </button>
                        <button
                            onClick={() => setImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                            className="bg-white hover:bg-gray-100 text-gray-900 p-4 transition-all duration-300 transform hover:scale-110 shadow-2xl"
                        >
                            <ChevronLeft className="w-6 h-6 transform rotate-180" />
                        </button>
                    </div>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setImageIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === imageIndex ? 'bg-yellow-400 w-8' : 'bg-white/50 hover:bg-white/80'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Side - Content Section */}
                <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-500 flex items-center justify-center p-12 overflow-hidden">

                    {/* Decorative Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `repeating-linear-gradient(
                                45deg,
                                transparent,
                                transparent 50px,
                                rgba(255, 255, 255, 0.05) 50px,
                                rgba(255, 255, 255, 0.05) 100px
                            )`
                        }}></div>
                    </div>

                    {/* Fries Icon */}
                    <div className="absolute top-8 right-8 animate-float">
                        <svg className="w-32 h-32 text-white/20" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="30" y="40" width="40" height="70" rx="5" />
                            <line x1="35" y1="30" x2="35" y2="45" strokeLinecap="round" />
                            <line x1="45" y1="25" x2="45" y2="45" strokeLinecap="round" />
                            <line x1="55" y1="20" x2="55" y2="45" strokeLinecap="round" />
                            <line x1="65" y1="28" x2="65" y2="45" strokeLinecap="round" />
                        </svg>
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 text-center space-y-6 animate-fade-in">

                        {/* Badge */}
                        <div className="inline-block">
                            <p className="text-white/90 text-lg font-bold tracking-wider uppercase">
                                Deal Of The Day
                            </p>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-1 pt-12">
                            <h1 className="text-white font-black text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight drop-shadow-2xl animate-slide-in">
                                TODAY'S
                            </h1>
                            <h2 className="text-white font-black text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight drop-shadow-2xl animate-slide-in" style={{ animationDelay: '0.1s' }}>
                                THE
                            </h2>
                            <h3 className="text-white font-black text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight drop-shadow-2xl animate-slide-in" style={{ animationDelay: '0.2s' }}>
                                HAMBURGER'
                            </h3>
                            <h4 className="text-white font-black text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight drop-shadow-2xl animate-slide-in" style={{ animationDelay: '0.3s' }}>
                                DAY
                            </h4>
                        </div>

                        {/* Price Section */}
                        <div className="pt-8 flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                            {/* Decorative Arrow */}
                            <svg className="w-16 h-16 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M 20 50 Q 30 30, 50 50 T 80 50" strokeLinecap="round" />
                                <circle cx="80" cy="50" r="4" fill="currentColor" />
                            </svg>

                            <div className="text-left">
                                <p className="text-white/90 text-xl font-bold tracking-wider">
                                    Special Price
                                </p>
                                <p className="text-white font-black text-6xl md:text-7xl drop-shadow-xl">
                                    $55
                                </p>
                            </div>
                        </div>

                        {/* Order Button */}
                        <div className="pt-6 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                            <button className="group bg-yellow-400 hover:bg-yellow-300 text-red-600 font-black text-xl px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto overflow-hidden relative">
                                <span className="relative z-10 flex items-center gap-3">
                                    ORDER NOW
                                    <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(5deg);
                    }
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slide-in {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-slide-in {
                    animation: slide-in 0.6s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </div>
    );
};

export default HamburgerDayBanner;