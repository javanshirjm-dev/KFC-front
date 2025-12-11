import { useState, useEffect } from 'react';

const TestimonialSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative w-full bg-gray-50 py-30 overflow-hidden">

            {/* Decorative Background Elements */}
            <div className="absolute top-10 left-10 text-red-100 text-9xl font-black opacity-50">
                "
            </div>
            <div className="absolute bottom-10 right-10 text-red-100 text-9xl font-black opacity-50 rotate-180">
                "
            </div>

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Testimonial Content */}
                    <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>

                        {/* Quote Icon and Title */}
                        <div className="flex items-center gap-6">
                            {/* Large Quote Mark */}
                            <div className="text-red-600 text-7xl font-black leading-none">
                                "
                            </div>

                            {/* Title and Stars */}
                            <div>
                                <h3 className="text-gray-900 text-3xl font-bold mb-2">Quality Food</h3>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-gray-700 text-xl lg:text-2xl leading-relaxed font-medium">
                            Nestled within a fresh, toasted bun, each bite unveils a perfect harmony of textures, complemented by layers of crisp lettuce, ripe tomatoes, and the crunch pickles Our secret sauce proprietary blend savory
                        </p>

                        {/* Author Info */}
                        <div className="flex items-center gap-4 pt-4">
                            {/* Avatar */}
                            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-red-600 shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
                                    alt="Richard D. Baker"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Name and Title */}
                            <div>
                                <h4 className="text-gray-900 text-xl font-bold">Richard D. Baker</h4>
                                <p className="text-gray-600 text-sm font-medium">CEO & Founder</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            {/* Main Image */}
                            <img
                                src="https://hips.hearstapps.com/hmg-prod/images/210331-delish-burger-anatomy-21238-eb-1622211152.jpg?crop=0.838xw:0.559xh;0.0595xw,0.126xh"
                                alt="Happy restaurant staff"
                                className="w-full h-[600px] object-cover"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600 rounded-full opacity-20 blur-2xl"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;