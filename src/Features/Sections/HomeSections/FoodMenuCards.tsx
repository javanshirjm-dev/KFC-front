import { useState, useEffect, useRef } from 'react';

const FoodMenuCards = () => {
    const [visibleCards, setVisibleCards] = useState([false, false, false]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Stagger the card animations
                    setTimeout(() => setVisibleCards([true, false, false]), 100);
                    setTimeout(() => setVisibleCards([true, true, false]), 300);
                    setTimeout(() => setVisibleCards([true, true, true]), 500);
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

    const menuItems = [
        {
            title: "BEST BURGER FRIES",
            startPrice: "$25",
            finalPrice: "$38",
            badgeColor: "bg-yellow-500",
            buttonColor: "bg-red-600 hover:bg-red-700",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
            alt: "Delicious burger with fries"
        },
        {
            title: "SUPER CHICKEN FRY",
            startPrice: "$25",
            finalPrice: "$43",
            badgeColor: "bg-red-600",
            buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-gray-900",
            image: "https://crisco.com/wp-content/uploads/2025/01/Crispy-Chicken-Tenders-2-scaled.jpg",
            alt: "Super chicken fry"
        },
        {
            title: "POP CORN CHICKEN",
            startPrice: "$25",
            finalPrice: "$38",
            badgeColor: "bg-yellow-500",
            buttonColor: "bg-red-600 hover:bg-red-700",
            image: "https://i.pinimg.com/736x/27/0d/6d/270d6d9db5d22295c1eca6e44c572297.jpg",
            alt: "Chicken popcorn"
        }
    ];

    return (
        <div ref={sectionRef} className=" py-20 bg-neutral-900">
            <div className=" mx-auto l">
                <div className="grid md:grid-cols-3 gap-8">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden  shadow-2xl group cursor-pointer transition-all duration-700 transform ${visibleCards[index]
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-20 opacity-0'
                                }  hover:shadow-3xl`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Background Image */}
                            <div className="relative h-[600px]  overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/60 group-hover:from-black/90 transition-all duration-500"></div>

                                {/* Price Badge */}
                                <div className={`absolute top-6 right-6 ${item.badgeColor} rounded-full w-24 h-24 flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500 shadow-xl`}>
                                    <span className="text-white font-black text-3xl">{item.finalPrice}</span>
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-between p-16">
                                    {/* Top Content */}
                                    <div className="space-y-2">
                                        <p className="text-yellow-500 font-bold text-xl uppercase tracking-wider" style={{ fontFamily: 'Ubuntu, sans-serif' }} >
                                            START PRICE {item.startPrice}
                                        </p>
                                        <h3 className="text-white font-black text-6xl leading-tight" style={{ fontFamily: 'Ubuntu, sans-serif' }} >
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Bottom Button */}
                                    <button className={`${item.buttonColor} text-white font-bold py-4 px-8  flex items-center justify-center gap-3 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 shadow-lg w-full`}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        ORDER NOW
                                    </button>
                                </div>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 border-7 border-transparent group-hover:border-yellow-500  transition-all duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .hover\:shadow-3xl:hover {
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                }
            `}</style>
        </div>
    );
};

export default FoodMenuCards;