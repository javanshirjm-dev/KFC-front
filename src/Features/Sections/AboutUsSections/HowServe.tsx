import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const HowWeServeSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const Navigate = useNavigate();

    const steps = [
        {
            number: "01",
            title: "ORDER YOUR FAVORITES",
            description: "Browse our finger lickin' good menu and choose from our signature fried chicken, burgers, and more",
            icon: "🍗",
            color: "from-red-500 to-red-600"
        },
        {
            number: "02",
            title: "WE PREPARE FRESH",
            description: "Every piece is hand-breaded and pressure-cooked to perfection with our secret blend of 11 herbs & spices",
            icon: "👨‍🍳",
            color: "from-red-600 to-red-700"
        },
        {
            number: "03",
            title: "DELIVERED HOT",
            description: "Get your hot, crispy KFC delivered straight to your door or pick it up at your nearest location",
            icon: "🚗",
            color: "from-red-700 to-red-800"
        }
    ];

    return (
        <div className="w-full bg-gradient-to-br from-red-50 via-white to-red-50 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 text-9xl">🍗</div>
                <div className="absolute bottom-20 right-20 text-9xl">🍔</div>
                <div className="absolute top-1/2 left-1/4 text-7xl">🍟</div>
                <div className="absolute top-1/3 right-1/3 text-8xl">🥤</div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Heading with KFC Style */}
                <div className="text-center mb-16 lg:mb-20">
                    <div className="inline-block">
                        <h2 className="text-red-600 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 tracking-tight">
                            IT'S FINGER LICKIN' GOOD
                        </h2>
                        <div className="h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
                    </div>
                    <p className="text-gray-600 text-lg sm:text-xl mt-6 max-w-2xl mx-auto">
                        Experience the legendary taste in 3 simple steps
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block relative">
                    {/* Timeline Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-red-400 to-red-600 transform -translate-y-1/2"></div>

                    <div className="grid grid-cols-3 gap-8 relative">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 0.2}s` }}
                            >
                                {/* Step Card */}
                                <div className={`relative group cursor-pointer ${activeStep === index ? 'scale-105' : ''} transition-transform duration-500`}>
                                    {/* Connecting Circle */}
                                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full">
                                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} border-4 border-white shadow-lg ${activeStep === index ? 'animate-ping absolute' : ''}`}></div>
                                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} border-4 border-white shadow-lg relative`}></div>
                                    </div>

                                    {/* Main Card */}
                                    <div className={`bg-white rounded-3xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 border-4 ${activeStep === index ? 'border-red-600' : 'border-transparent'}`}>
                                        {/* Icon */}
                                        <div className={`text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-300 ${activeStep === index ? 'animate-bounce' : ''}`}>
                                            {step.icon}
                                        </div>

                                        {/* Number Badge */}
                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${step.color} text-white font-black text-2xl mb-4 shadow-lg`}>
                                            {step.number}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-gray-900 text-2xl font-black mb-4 tracking-tight">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-base leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden space-y-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : index % 2 === 0 ? '-translate-x-20 opacity-0' : 'translate-x-20 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 0.2}s` }}
                        >
                            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-4 border-red-100 hover:border-red-600 transition-all duration-300">
                                {/* Header with number and icon */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${step.color} text-white font-black text-2xl sm:text-3xl flex items-center justify-center shadow-lg`}>
                                        {step.number}
                                    </div>
                                    <div className="text-6xl sm:text-7xl">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-gray-900 text-xl sm:text-2xl font-black mb-3 tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Connector Arrow */}
                            {index < steps.length - 1 && (
                                <div className="flex justify-center my-4">
                                    <div className="text-5xl text-red-600">↓</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16 lg:mt-20">
                    <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 shadow-2xl">
                        <h3 className="text-white text-2xl sm:text-3xl font-black mb-4">
                            READY TO ORDER?
                        </h3>
                        <p className="text-red-100 text-lg mb-6 max-w-2xl mx-auto">
                            Got questions about our menu or delivery? Check out our FAQ
                        </p>
                        <button onClick={() => Navigate("/faq")} className="bg-white text-red-600 px-10 py-4 rounded-xl font-black text-lg hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                            LEARN MORE FAQ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWeServeSection;