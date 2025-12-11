import { useState } from 'react';

const testimonials = [
    {
        name: "Piter Bowman",
        role: "Business CEO & Co Founder",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
        text: "Thank you for dinner last night. It was amazing!! I have say it's the best meal I have had in quite some time. Will definitely be seeing more eating next year.",
        rating: 5
    },
    {
        name: "Sarah Mitchell",
        role: "Food Blogger",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
        text: "Absolutely blown away by the quality and flavor! Every bite was perfection. The attention to detail in every dish shows true culinary mastery.",
        rating: 5
    },
    {
        name: "James Peterson",
        role: "Restaurant Critic",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
        text: "In my 20 years of reviewing restaurants, this stands out as exceptional. The innovative menu paired with impeccable service creates an unforgettable dining experience.",
        rating: 5
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full bg-gradient-to-b from-amber-50 to-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 relative overflow-hidden">

            {/* Decorative Food Icons */}
            <div className="absolute top-20 left-10 w-32 h-32 opacity-10 hidden lg:block">
                <svg viewBox="0 0 200 200" fill="currentColor" className="text-gray-800">
                    <path d="M100,20 Q80,40 80,70 L80,180 L120,180 L120,70 Q120,40 100,20 Z M70,70 L130,70 Q140,70 140,80 L140,100 Q140,110 130,110 L70,110 Q60,110 60,100 L60,80 Q60,70 70,70 Z" />
                </svg>
            </div>

            <div className="absolute top-32 right-10 w-28 h-28 opacity-10 hidden lg:block">
                <svg viewBox="0 0 200 200" fill="currentColor" className="text-gray-800">
                    <ellipse cx="100" cy="100" rx="80" ry="50" />
                    <rect x="60" y="60" width="80" height="80" rx="10" />
                </svg>
            </div>

            <div className="absolute bottom-20 left-20 w-36 h-36 opacity-10 hidden lg:block">
                <svg viewBox="0 0 200 200" fill="currentColor" className="text-gray-800">
                    <circle cx="100" cy="100" r="70" />
                    <circle cx="100" cy="100" r="50" fill="white" />
                    <circle cx="100" cy="100" r="20" />
                </svg>
            </div>

            <div className="absolute bottom-32 right-16 w-32 h-32 opacity-10 hidden lg:block">
                <svg viewBox="0 0 200 200" fill="currentColor" className="text-gray-800">
                    <path d="M100,20 L130,80 L190,90 L145,135 L155,195 L100,165 L45,195 L55,135 L10,90 L70,80 Z" />
                </svg>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-block bg-orange-500 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                        TESTIMONIALS
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
                        What Our <span className="text-orange-500">Customers Say</span>
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                        Real reviews from real food lovers who experienced our culinary excellence
                    </p>
                </div>

                {/* Main Testimonial Card */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 mb-8">

                    {/* Quote Icon */}
                    <div className="absolute top-8 left-8 text-orange-500 opacity-20">
                        <svg className="w-16 h-16 sm:w-20 sm:h-20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>
                    </div>

                    {/* Testimonial Text */}
                    <div className="text-center mb-8 sm:mb-12 relative z-10">
                        <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-relaxed mb-6 px-4 sm:px-12">
                            "{testimonials[activeIndex].text}"
                        </p>

                        {/* Stars */}
                        <div className="flex justify-center gap-2 mb-6">
                            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                <span key={i} className="text-yellow-400 text-2xl sm:text-3xl">★</span>
                            ))}
                        </div>

                        {/* Author Info */}
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-orange-500 mb-4 shadow-lg">
                                <img
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                                {testimonials[activeIndex].name}
                            </h3>
                            <p className="text-orange-500 font-semibold text-sm sm:text-base">
                                {testimonials[activeIndex].role}
                            </p>
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`transition-all duration-300 ${index === activeIndex
                                        ? 'w-12 h-3 bg-orange-500 rounded-full'
                                        : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Thumbnail Carousel */}
                <div className="flex justify-center gap-4 sm:gap-6">
                    {testimonials.map((testimonial, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`group relative transition-all duration-300 ${index === activeIndex
                                    ? 'scale-110'
                                    : 'scale-90 opacity-50 hover:opacity-100'
                                }`}
                        >
                            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 transition-all ${index === activeIndex
                                    ? 'border-orange-500 shadow-lg'
                                    : 'border-gray-300 group-hover:border-orange-300'
                                }`}>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {index === activeIndex && (
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
                            )}
                        </button>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Testimonials;