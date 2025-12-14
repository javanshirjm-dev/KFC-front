
const TwoBurgerCards = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-12 px-20">
                {/* Left Card - KFC Box with Glow */}
                <div className="leftburger group">
                    <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-80 lg:w-full transform hover:scale-105 transition-all duration-500">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500 animate-pulse"></div>

                        {/* Card Content */}
                        <div className="relative">
                            <img
                                src="https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2FKFC+OOH+1+HotSpicyCOB+land.jpg&c=0"
                                alt="kfc box"
                                className="w-full lg:h-120 h-110 object-cover group-hover:scale-103 transition-transform duration-700"
                            />

                            {/* Animated Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </div>
                    </div>
                </div>

                {/* Right Card - Burger with Text and Glow */}
                <div className="rightburger group">
                    <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-80 lg:w-full transform hover:scale-105 transition-all duration-500">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500 animate-pulse"></div>

                        {/* Card Content */}
                        <div className="relative">
                            <img
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/a0f60c8924425.560c59ccdc958.jpg"
                                alt="Burger with text"
                                className="w-full lg:h-120 h-110 object-cover group-hover:scale-103 transition-transform duration-700"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300"></div>



                            {/* Animated Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                            {/* Floating Sparkles */}
                            <div className="absolute top-10 right-10 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                            <div className="absolute bottom-20 left-10 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-100"></div>
                        </div>
                    </div>
                </div>

                <style>{`
                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translate(-50%, -50%) translateY(0);
                    }
                    50% {
                        transform: translate(-50%, -50%) translateY(-10px);
                    }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }
                .animation-pulse {
                    animation: pulse 2s infinite;
                }
            `}</style>
            </div>
        </>
    )
}

export default TwoBurgerCards