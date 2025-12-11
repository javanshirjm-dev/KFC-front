import { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="bg-white py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left Side - Image */}
                    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=1000&fit=crop"
                                alt="Chef presenting dish"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="space-y-6">
                            {/* Label */}
                            <p className="text-sm text-red-500 font-medium tracking-widest uppercase">
                                About FoodKing
                            </p>

                            {/* Heading */}
                            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                                Where Culinary Art Meets Passion
                            </h2>

                            {/* Description */}
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Welcome to our culinary haven, where each dish is a symphony of flavors meticulously crafted to tantalize your taste buds. Nestled in the heart of the city, our restaurant is an inviting space that combines modern elegance with warm hospitality.
                            </p>

                            {/* Stats */}
                            <div className="flex gap-12 pt-4">
                                <div>
                                    <div className="text-3xl font-light text-gray-900 mb-1">25+</div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wide">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-light text-gray-900 mb-1">100+</div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wide">Unique Dishes</div>
                                </div>
                            </div>

                            {/* Chef Info */}
                            <div className="flex items-center gap-4 pt-8 border-t border-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=200&h=200&fit=crop&crop=face"
                                    alt="Michael V. Christensen"
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="text-gray-900 font-medium text-base">
                                        Michael V. Christensen
                                    </h4>
                                    <p className="text-gray-500 text-sm">
                                        CEO & Founder
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;