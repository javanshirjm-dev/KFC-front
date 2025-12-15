import { useState } from 'react';
import { Phone, Calendar, ChevronDown, Users, Clock, MapPin, Drumstick } from 'lucide-react';

const ReservationSection = () => {
    const [formData, setFormData] = useState({
        persons: '',
        phone: '',
        date: '',
        time: '',
        location: ''
    });

    const [focusedField, setFocusedField] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = () => {
        console.log('Reservation:', formData);
    };

    return (
        <div className="relative w-full min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Gradient Mesh */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black to-neutral-950 opacity-80"></div>

                {/* Floating Shapes */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Side - Enhanced Text Content */}
                    <div className="space-y-10 lg:pr-8">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 bg-red-600/20 backdrop-blur-sm border border-red-600/30 rounded-full px-6 py-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <p className="text-red-400 flex gap-3 items-center text-sm font-bold uppercase tracking-wider">
                                <Drumstick /> It's Finger Lickin' Good
                            </p>
                        </div>

                        {/* Main Heading with Gradient */}
                        <div className="space-y-4">
                            <h2 className="text-white text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                                RESERVE YOUR
                            </h2>
                            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                                CRISPY MOMENT
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                            Book your table now and experience the world-famous Original Recipe chicken with friends and family. Perfect for any occasion!
                        </p>



                        {/* Contact Card */}
                        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 shadow-2xl border border-red-500/50">
                            <div className="flex items-center gap-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                                    <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                                        <Phone className="w-10 h-10 text-red-600" strokeWidth={2.5} />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-red-100 text-sm font-semibold uppercase mb-2 tracking-wide">
                                        Call Us Anytime
                                    </p>
                                    <a href="tel:+17189044450" className="text-white text-3xl lg:text-4xl font-black hover:text-yellow-300 transition-colors">
                                        +1 718-904-4450
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Premium Form */}
                    <div className="relative">
                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl blur-2xl opacity-20"></div>

                        {/* Form Container */}
                        <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/10 backdrop-blur-xl">

                            {/* Form Header */}
                            <div className="text-center mb-8">
                                <div className="inline-block bg-red-600 rounded-2xl px-6 py-2 mb-4">
                                    <p className="text-white text-sm font-bold uppercase tracking-wider">Book Now</p>
                                </div>
                                <h3 className="text-white text-3xl sm:text-4xl font-black mb-2">
                                    Make Reservation
                                </h3>
                                <p className="text-gray-400 text-sm">Fill in the details below</p>
                            </div>

                            <div className="space-y-5">

                                {/* Number of Persons */}
                                <div className="relative group">
                                    <label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-2 block ml-1">
                                        Party Size
                                    </label>
                                    <div className="relative">
                                        <Users className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                                        <select
                                            name="persons"
                                            value={formData.persons}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('persons')}
                                            onBlur={() => setFocusedField('')}
                                            className={`w-full bg-neutral-800 border-2 ${focusedField === 'persons' ? 'border-red-500' : 'border-white/10'} text-white rounded-2xl pl-14 pr-12 py-4 text-base font-medium appearance-none cursor-pointer focus:outline-none transition-all duration-300 hover:border-red-500/50`}
                                        >
                                            <option value="">Select party size</option>
                                            <option value="1">1 Person</option>
                                            <option value="2">2 Persons</option>
                                            <option value="3">3 Persons</option>
                                            <option value="4">4 Persons</option>
                                            <option value="5">5 Persons</option>
                                            <option value="6">6+ Persons</option>
                                        </select>
                                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div className="relative group">
                                    <label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-2 block ml-1">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('phone')}
                                            onBlur={() => setFocusedField('')}
                                            placeholder="+1 (555) 000-0000"
                                            className={`w-full bg-neutral-800 border-2 ${focusedField === 'phone' ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-500 rounded-2xl pl-14 pr-6 py-4 text-base font-medium focus:outline-none transition-all duration-300 hover:border-red-500/50`}
                                        />
                                    </div>
                                </div>

                                {/* Date and Time Row */}
                                <div className="grid sm:grid-cols-2 gap-5">
                                    {/* Date */}
                                    <div className="relative group">
                                        <label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-2 block ml-1">
                                            Date
                                        </label>
                                        <div className="relative">
                                            <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none z-10" />
                                            <input
                                                type="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('date')}
                                                onBlur={() => setFocusedField('')}
                                                className={`w-full bg-neutral-800 border-2 ${focusedField === 'date' ? 'border-red-500' : 'border-white/10'} text-white rounded-2xl pl-14 pr-6 py-4 text-base font-medium focus:outline-none transition-all duration-300 hover:border-red-500/50`}
                                                style={{ colorScheme: 'dark' }}
                                            />
                                        </div>
                                    </div>

                                    {/* Time */}
                                    <div className="relative group">
                                        <label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-2 block ml-1">
                                            Time
                                        </label>
                                        <div className="relative">
                                            <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                                            <select
                                                name="time"
                                                value={formData.time}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('time')}
                                                onBlur={() => setFocusedField('')}
                                                className={`w-full bg-neutral-800 border-2 ${focusedField === 'time' ? 'border-red-500' : 'border-white/10'} text-white rounded-2xl pl-14 pr-12 py-4 text-base font-medium appearance-none cursor-pointer focus:outline-none transition-all duration-300 hover:border-red-500/50`}
                                            >
                                                <option value="">Select time</option>
                                                <option value="11:00">11:00 AM</option>
                                                <option value="11:30">11:30 AM</option>
                                                <option value="12:00">12:00 PM</option>
                                                <option value="12:30">12:30 PM</option>
                                                <option value="13:00">1:00 PM</option>
                                                <option value="13:30">1:30 PM</option>
                                                <option value="14:00">2:00 PM</option>
                                                <option value="18:00">6:00 PM</option>
                                                <option value="18:30">6:30 PM</option>
                                                <option value="19:00">7:00 PM</option>
                                                <option value="19:30">7:30 PM</option>
                                                <option value="20:00">8:00 PM</option>
                                            </select>
                                            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="relative group">
                                    <label className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-2 block ml-1">
                                        Location
                                    </label>
                                    <div className="relative">
                                        <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                                        <select
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('location')}
                                            onBlur={() => setFocusedField('')}
                                            className={`w-full bg-neutral-800 border-2 ${focusedField === 'location' ? 'border-red-500' : 'border-white/10'} text-white rounded-2xl pl-14 pr-12 py-4 text-base font-medium appearance-none cursor-pointer focus:outline-none transition-all duration-300 hover:border-red-500/50`}
                                        >
                                            <option value="">Choose location</option>
                                            <option value="downtown">Downtown Branch</option>
                                            <option value="mall">Mall of America</option>
                                            <option value="airport">Airport Terminal</option>
                                            <option value="broadway">Broadway Street</option>
                                        </select>
                                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    className="relative w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500 hover:from-red-700 hover:via-red-600 hover:to-orange-600 text-white font-black text-lg py-5 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-[1.02] uppercase tracking-wider mt-6 group overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        <span>Confirm Reservation</span>
                                        <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </button>

                                {/* Info Text */}
                                <p className="text-center text-gray-500 text-xs mt-4">
                                    By booking, you agree to our terms and conditions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationSection;