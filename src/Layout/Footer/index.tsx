import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative pt-20 bg-neutral-900 text-white overflow-hidden">

            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 text-9xl">🍔</div>
                <div className="absolute bottom-20 right-20 text-9xl">🍟</div>
                <div className="absolute top-40 right-40 text-8xl">🥤</div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* About Section */}
                    <div className="space-y-6">
                        <img
                            src="https://cdn.sanity.io/images/kbqq3e0r/production/9eb43dde801b1a362e25687f8703cb835925c793-352x110.png?w=3840&q=100"
                            alt="Logo"
                            className="h-12 w-auto brightness-0 invert"
                        />
                        <p className="text-gray-400 leading-relaxed">
                            Serving the best burgers in town since 2020. Made with fresh ingredients and passion.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-black mb-6 text-yellow-400">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'Menu', 'About Us', 'Shop', 'Contact', 'Reservation'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-4 transition-all duration-300"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-black mb-6 text-yellow-400">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                                <span>123 Burger Street, Food City, FC 12345</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                                <span>012 345 678 900</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                                <span>info@burgerhouse.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                                <div>
                                    <div>Mon - Fri: 10:00 AM - 11:00 PM</div>
                                    <div>Sat - Sun: 9:00 AM - 12:00 AM</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-black mb-6 text-yellow-400">Newsletter</h3>
                        <p className="text-gray-400 mb-4">
                            Subscribe to get special offers and updates!
                        </p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                            />
                            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                                Subscribe Now
                            </button>
                        </div>
                        <p className="text-gray-500 text-xs mt-3">
                            We respect your privacy. Unsubscribe anytime.
                        </p>
                    </div>
                </div>



                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © 2024 Burger House. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600"></div>
        </footer>
    );
};

export default Footer;