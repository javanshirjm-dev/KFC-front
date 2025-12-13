import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

const ContactHeroBanner = () => {
    return (
        <div className="relative w-full h-96 bg-neutral-800 overflow-hidden">

            {/* Left Side Image - Pizza */}
            <div className="absolute left-0 top-0 bottom-0 w-1/4 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://images.ctfassets.net/crbk84xktnsl/2QktW64ekZAzhzYAWFGCQx/365f9bef141710d62eca2bda4304d858/3D_Category_App_Burgers_-_Zinger_Crunch.png)',
                        clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900"></div>
                </div>
            </div>

            {/* Right Side Image - Pasta & Eggs */}
            <div className="absolute right-0 top-0 bottom-0 w-1/4 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://www.cato.org/sites/cato.org/files/styles/pubs_2x/public/2025-08/coca%20cola.jpg?itok=7fbz15ZA)',
                        clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900"></div>
                </div>
            </div>

            {/* Center Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

                {/* Main Title */}
                <h1 className="text-white font-bold text-6xl md:text-7xl lg:text-8xl mb-8 tracking-tight" style={{ fontFamily: 'barlow, sans-serif' }}>
                    OUR TEAM
                </h1>

                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-lg">
                    <Link
                        to="/"
                        className="text-red-500 font-bold uppercase tracking-wider hover:text-red-400 transition-colors"
                    >
                        HOME PAGE
                    </Link>
                    <ChevronRight className="text-red-500 w-5 h-5" strokeWidth={3} />
                    <span className="text-red-500 font-bold uppercase tracking-wider">
                        OUR TEAM
                    </span>
                </div>
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
        </div>
    );
};

export default ContactHeroBanner;