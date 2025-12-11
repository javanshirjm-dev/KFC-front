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
        <div ref={sectionRef} className="bg-white py-30 px-6">
            <div className="container mx-auto max-w-[1500px]">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Chef Image */}
                    <div className={`relative transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                        <div className="relative overflow-hidden  shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=1000&fit=crop"
                                alt="Chef with plate"
                                className="w-full h-150 object-cover aspect-[5/5] transform group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                    </div>

                    {/* Right Side - Content */}
                    <div className={`space-y-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                        <div className="space-y-4">
                            <h3 className="text-red-500 font-bold text-lg uppercase tracking-wider animate-fade-in">
                                Learn Something FoodKing
                            </h3>

                            <p className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
                                WELCOME TO OUR CULINARY HAVEN, WHERE EACH DISH IS A SYMPHONY OF FLAVORS METICULOUSLY CRAFTED TANTALIZE YOUR TASTE BUDS. NESTLED IN THE HEART OF [CITY], OUR RESTAURANT IS AN INVITING SPACE THAT COMBINES.
                            </p>
                        </div>

                        {/* Chef Info */}
                        <div className={`flex items-center gap-4 pt-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            {/* Chef Avatar */}
                            <div className="relative group">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                    <img
                                        src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=200&h=200&fit=crop&crop=face"
                                        alt="Michael V. Christensen"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </div>

                            {/* Chef Details */}
                            <div>
                                <h4 className="text-gray-900 font-bold text-xl">
                                    MICHAEL V. CHRISTENSEN / <span className="text-gray-600 font-normal text-base">CEO & FOUNDER</span>
                                </h4>
                            </div>
                        </div>

                        {/* Decorative Line */}
                        <div className={`w-24 h-1 bg-red-500 transition-all duration-1000 delay-700 ${isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </div>
    );
};

export default AboutSection;