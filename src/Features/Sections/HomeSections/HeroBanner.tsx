import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router';

const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    const { t } = useTranslation();

    const price = '$15.00'
    const navigate = useNavigate();
    return (
        <div
            className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-red-700 to-[#0D0D0D]"
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
        >

            {/* 🔥 GIANT BACKGLOW BEHIND WHOLE SECTION */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="
                    absolute top-[40%] left-[50%]
                    w-[900px] h-[900px]
                    bg-gradient-to-r from-yellow-300 via-orange-500 to-red-500
                    blur-[200px] opacity-60 rounded-full animate-pulse
                    -translate-x-1/2 -translate-y-1/2
                "></div>
            </div>

            {/* ✨ FLOATING DECOR ORBS */}
            <div className="absolute top-20 left-20 opacity-80 animate-float z-20">
                <img className='w-32 md:w-40 drop-shadow-2xl'
                    src="https://foodking-react.vercel.app/assets/img/hero/frame.png"
                    alt="decor"
                />
            </div>

            <div className="absolute top-32 right-20 opacity-80 animate-float z-20" style={{ animationDelay: '1s' }}>
                <img className='w-32 drop-shadow-2xl'
                    src="https://foodking-react.vercel.app/assets/img/hero/frame-5.png"
                    alt="decor"
                />
            </div>

            <div className="absolute bottom-32 left-16 opacity-80 animate-spin-slow z-20">
                <img className='w-28 md:w-36 drop-shadow-2xl'
                    src="https://foodking-react.vercel.app/assets/img/hero/frame-2.png"
                    alt="decor"
                />
            </div>

            <div className="absolute bottom-20 right-16 opacity-80 animate-spin-slow z-20"
                style={{ animationDelay: '2s', animationDirection: 'reverse' }}>
                <img className='w-28 md:w-36 drop-shadow-2xl'
                    src="https://foodking-react.vercel.app/assets/img/hero/frame.png"
                    alt="decor"
                />
            </div>

            {/* ✦ SPARKLES */}
            {[...Array(8)].map((_, i) => (
                <div
                    key={i}
                    className="absolute animate-float opacity-40 z-30"
                    style={{
                        left: `${10 + i * 12}%`,
                        top: `${15 + (i % 4) * 20}%`,
                        animationDelay: `${i * 0.4}s`,
                        animationDuration: `${3 + (i % 3)}s`
                    }}
                >
                    <div className="text-yellow-300 text-4xl md:text-5xl">✦</div>
                </div>
            ))}

            {/* MAIN CONTENT */}
            <div className="relative z-30 container mx-auto px-6 py-16 flex items-center min-h-screen">
                <div className="grid md:grid-cols-2 gap-12 items-center w-full">

                    {/* LEFT COLUMN */}
                    <div
                        className={`space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                            }`}
                    >

                        <h1 className="text-white font-black leading-none" style={{ fontFamily: 'Barlow, sans-serif' }}>
                            <div className="text-6xl md:text-8xl lg:text-9xl mb-2 animate-fade-in drop-shadow-2xl">
                                {t('banner.title0')}
                            </div>
                            <div
                                className="text-6xl md:text-8xl lg:text-9xl mb-2 animate-fade-in text-yellow-300 drop-shadow-2xl"
                                style={{ animationDelay: '0.2s' }}
                            >
                                {t('banner.title')}
                            </div>
                            <div
                                className="text-6xl md:text-8xl lg:text-9xl animate-fade-in drop-shadow-2xl"
                                style={{ animationDelay: '0.4s' }}
                            >
                                BURGER
                            </div>
                        </h1>

                        <div
                            className={`relative inline-block transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                        >
                            <p className="text-white text-xl md:text-2xl font-bold">
                                {t('banner.orderText', { price })}
                            </p>
                            <p className="text-yellow-200 mt-2 text-sm md:text-base">{t('banner.desc')}</p>
                            <div className="h-1 bg-yellow-400 rounded-full mt-4 animate-expand"></div>
                        </div>

                        {/* BUTTONS */}
                        <div
                            className={`flex gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                        >
                            <button onClick={() => navigate("/shop")} className="group relative bg-yellow-400 hover:bg-yellow-300 text-red-600 font-black text-lg px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 overflow-hidden">
                                <span className="relative z-10 flex items-center gap-3">
                                    {t('banner.orderNow')}
                                    <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </button>

                            <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold text-lg px-8 py-5 rounded-full border-2 border-white/50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                                <span className="flex items-center gap-2">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                                    </svg>
                                    {t('banner.watchVideo')}
                                </span>
                            </button>
                        </div>

                        {/* SOCIAL PROOF */}
                        <div
                            className={`flex items-center gap-6 pt-4 transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold"
                                    >
                                        {i === 4 ? '+' : '😊'}
                                    </div>
                                ))}
                            </div>
                            <div className="text-white">
                                <div className="font-bold text-xl">{t('banner.happy')}</div>
                                <div className="text-yellow-300 font-semibold">{t('banner.customers')}</div>
                            </div>
                        </div>
                    </div>

                    {/* 🔥 RIGHT COLUMN — BIG GLOWING BURGER */}
                    <div
                        className={`relative transition-all duration-1500 delay-300 transform flex justify-center items-center ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                            }`}
                    >

                        {/* Outer glow */}
                        <div className="absolute z-10 flex items-center justify-center">
                            <div className="
                                w-[600px] h-[600px]
                                bg-gradient-to-r from-red-800 via-orange-900 to-red-900
                                opacity-60 blur-[140px]
                                rounded-full animate-pulse
                            "></div>
                        </div>

                        {/* Inner glow ring */}
                        <div className="absolute z-20">
                            <div className="w-[680px] h-[680px] bg-yellow-400 opacity-70 blur-[60px] rounded-full animate-pulse"></div>
                        </div>

                        {/* Dotted circle */}
                        <div className="absolute inset-0 flex items-center justify-center animate-spin-slow z-30">
                            <div className="w-full max-w-xl aspect-square rounded-full border-[10px] border-dashed border-yellow-300/60"></div>
                        </div>

                        {/* BURGER */}
                        <div className="relative z-40 animate-float-slow">
                            <img
                                className="w-full max-w-2xl drop-shadow-[0_0_45px_rgba(255,200,80,0.9)]"
                                src="https://wallpapers.com/images/high/big-mac-burger-closeup-png-ycwp4i11clmqtjde-ycwp4i11clmqtjde.png"
                                alt="Delicious Burger"
                            />
                        </div>

                        {/* Rating badge */}
                        <div className="absolute top-80 -left-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full px-4 py-3 font-bold shadow-2xl z-50 animate-bounce">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">⭐</span>
                                <div className="text-2xl font-black">4.9</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-30px) scale(0.9); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-25px) rotate(3deg); }
                }

                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-35px); }
                }

                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes expand {
                    from { width: 0%; }
                    to { width: 100%; }
                }

                .animate-fade-in { animation: fade-in 1s ease-out forwards; opacity: 0; }
                .animate-float { animation: float 3s ease-in-out infinite; }
                .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
                .animate-spin-slow { animation: spin-slow 25s linear infinite; }
                .animate-expand { animation: expand 1s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default HomePage;
