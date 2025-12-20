import { useState, useEffect } from 'react';
import { Truck, DollarSign, Award, UtensilsCrossed } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import hook

const FeaturesSection = () => {
    const { t } = useTranslation(); // Initialize hook
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Define features using translations
    const features = [
        {
            icon: <Award className="w-16 h-16" />,
            title: t('features_section.feature_1.title'),
            description: t('features_section.feature_1.description'),
            delay: "0s"
        },
        {
            icon: <Truck className="w-16 h-16" />,
            title: t('features_section.feature_2.title'),
            description: t('features_section.feature_2.description'),
            delay: "0.2s"
        },
        {
            icon: <DollarSign className="w-16 h-16" />,
            title: t('features_section.feature_3.title'),
            description: t('features_section.feature_3.description'),
            delay: "0.4s"
        },
        {
            icon: <UtensilsCrossed className="w-16 h-16" />,
            title: t('features_section.feature_4.title'),
            description: t('features_section.feature_4.description'),
            delay: "0.6s"
        }
    ];

    return (
        <div className="relative w-full bg-gradient-to-br from-red-600 via-red-500 to-red-600 py-30 overflow-hidden">

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 opacity-10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400 opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 60px,
                    rgba(255, 255, 255, 0.1) 60px,
                    rgba(255, 255, 255, 0.1) 120px
                )`
            }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group relative transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                            style={{ transitionDelay: feature.delay }}
                        >
                            {/* Card */}
                            <div className="relative bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col items-center">

                                {/* Glow Effect on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-orange-400/0 group-hover:from-yellow-400/10 group-hover:to-orange-400/10 rounded-2xl transition-all duration-300"></div>

                                {/* Icon Container */}
                                <div className="relative mb-6 inline-flex flex-shrink-0">
                                    {/* Icon Background Circle */}
                                    <div className="absolute inset-0 bg-yellow-400 opacity-20 rounded-full blur-xl group-hover:opacity-40 transition-opacity"></div>

                                    {/* Icon */}
                                    <div className="relative text-yellow-400 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                        {feature.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-yellow-300 transition-colors h-16 flex items-center justify-center">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-white/90 text-base leading-relaxed flex-grow">
                                    {feature.description}
                                </p>

                                {/* Decorative Bottom Line */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-3/4 transition-all duration-300 rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% {
                        opacity: 0.1;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.15;
                        transform: scale(1.1);
                    }
                }
            `}</style>
        </div>
    );
};

export default FeaturesSection;