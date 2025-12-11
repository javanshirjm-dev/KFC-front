import { useState } from 'react';
import { Phone, Calendar, ChevronDown } from 'lucide-react';

const ReservationSection = () => {
    const [formData, setFormData] = useState({
        persons: '',
        phone: '',
        date: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Reservation:', formData);
    };

    return (
        <div className="relative w-full bg-neutral-900 py-24 px-6 overflow-hidden">

            {/* Dark Texture Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

            <div className="container mx-auto max-w-[1500px] relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side - Text Content */}
                    <div className="space-y-8">

                        {/* Small Label */}
                        <p className="text-red-500 text-lg font-bold uppercase tracking-wider">
                            Crispy, Every Bite Taste
                        </p>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h2 className="text-white text-6xl lg:text-6xl font-black leading-tight">
                                NEED BOOKING?
                            </h2>
                            <h2 className="text-white text-6xl lg:text-6xl font-black leading-tight">
                                RESERVE YOUR TABLE?
                            </h2>
                        </div>

                        {/* Support Info */}
                        <div className="flex items-center gap-6 pt-8">
                            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center shadow-xl">
                                <Phone className="w-10 h-10 text-white" strokeWidth={2.5} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm font-semibold uppercase mb-1">
                                    24/7 Support Center
                                </p>
                                <a href="tel:+17189044450" className="text-green-500 text-4xl font-black hover:text-green-400 transition-colors">
                                    +1718-904-4450
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Reservation Form */}
                    <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-10 shadow-2xl">

                        {/* Form Heading */}
                        <h3 className="text-white text-3xl font-black mb-8 text-center">
                            CREATE AN RESERVATION
                        </h3>

                        <div className="space-y-6">

                            {/* Number of Persons Dropdown */}
                            <div className="relative">
                                <select
                                    name="persons"
                                    value={formData.persons}
                                    onChange={handleChange}
                                    className="w-full bg-green-700 border-2 border-green-500 text-white rounded-xl px-6 py-5 text-lg font-semibold appearance-none cursor-pointer focus:outline-none focus:border-green-400 transition-all"
                                >
                                    <option value="">No Of Person</option>
                                    <option value="1">1 Person</option>
                                    <option value="2">2 Persons</option>
                                    <option value="3">3 Persons</option>
                                    <option value="4">4 Persons</option>
                                    <option value="5">5+ Persons</option>
                                </select>
                                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-white w-6 h-6 pointer-events-none" />
                            </div>

                            {/* Phone Number Input */}
                            <div className="relative">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="w-full bg-green-700 border-2 border-green-500 text-white placeholder-white/70 rounded-xl px-6 py-5 text-lg font-semibold focus:outline-none focus:border-green-400 transition-all"
                                />
                                <Phone className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 w-6 h-6 pointer-events-none" />
                            </div>

                            {/* Date Input */}
                            <div className="relative">
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    placeholder="Mm/Dd/Yyyy"
                                    className="w-full bg-green-700 border-2 border-green-500 text-white placeholder-white/70 rounded-xl px-6 py-5 text-lg font-semibold focus:outline-none focus:border-green-400 transition-all"
                                    style={{ colorScheme: 'dark' }}
                                />
                                <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 w-6 h-6 pointer-events-none" />
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-green-900 font-black text-xl py-5 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
                            >
                                BOOKING NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationSection;