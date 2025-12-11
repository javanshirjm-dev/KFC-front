import { useState } from 'react';
import { Link } from "react-router";
import { NavbarItem } from "../../Constants/NavbarItem";
import type { NavbarItems } from "../../Types/Global";
import { ShoppingCart, Menu, X, UsersRound } from 'lucide-react';
import { useNavigate } from 'react-router';
import LanguageToggle from '../../Features/Components/LanguageToggle';


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navigate = useNavigate();


    return (
        <header className="sticky top-0 z-50 bg-red-600 border-b border-white/20 shadow-lg" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
            <div className="container mx-auto px-6 lg:px-12 py-5">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <div className="flex items-center gap-7">
                        <Link to="/" className="flex-shrink-0">
                            <img
                                className="h-7 lg:h-12 w-auto"
                                src="https://cdn.sanity.io/images/kbqq3e0r/production/9eb43dde801b1a362e25687f8703cb835925c793-352x110.png?w=3840&q=100"
                                alt="Logo"
                            />
                        </Link>

                        <LanguageToggle />


                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:block">
                        <ul className="flex gap-8">
                            {NavbarItem.map((item: NavbarItems) => (
                                <li key={item.id}>
                                    <Link
                                        to={item.path}
                                        className="text-white text-xl font-bold hover:text-yellow-300 transition-colors duration-300 relative group"
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-8">
                        <button className="text-white hover:text-yellow-300 transition-colors duration-300" aria-label="User">
                            <UsersRound strokeWidth={3} size={27} />
                        </button>
                        <button className="text-white hover:text-yellow-300 transition-colors duration-300 relative" aria-label="Cart">
                            <ShoppingCart strokeWidth={3} size={27} />
                            <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                0
                            </span>
                        </button>
                        <Link to="/reservation">
                            <button className="border-3 border-white hover:bg-white hover:text-red-600 text-white py-2 px-5 text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
                                RESERVATION
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button & Icons */}
                    <div className="flex lg:hidden items-center gap-4">
                        <button className="text-white" aria-label="User">
                            <UsersRound strokeWidth={3} size={24} />
                        </button>
                        <button className="text-white relative" aria-label="Cart">
                            <ShoppingCart strokeWidth={3} size={24} />
                            <span className="absolute -top-1 -right-1 bg-yellow-400 text-red-600 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                                0
                            </span>
                        </button>

                        <button
                            onClick={toggleMobileMenu}
                            className="text-white p-2"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X strokeWidth={3} size={28} />
                            ) : (
                                <Menu strokeWidth={3} size={28} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}
                >
                    <nav className="py-4 border-t border-white/20">
                        <ul className="space-y-4">
                            {NavbarItem.map((item: NavbarItems) => (
                                <li key={item.id}>
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-white text-xl font-bold hover:text-yellow-300 hover:pl-4 transition-all duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <Link to="/reservation" onClick={() => setIsMobileMenuOpen(false)}>
                                <button onClick={() => navigate("/reservation")} className="w-full border-3 border-white hover:bg-white hover:text-red-600 text-white py-3 px-5 text-xl font-bold rounded-lg transition-all duration-300">
                                    RESERVATION
                                </button>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;