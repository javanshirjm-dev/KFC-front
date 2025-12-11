import { useState } from 'react';
import { User, Mail, MessageSquare, Send } from 'lucide-react';

const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    return (
        <div className="w-full bg-gray-100 py-20 px-6">
            <div className="container mx-auto max-w-[1500px">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Side - Get in Touch */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-gray-900 text-5xl font-black mb-4">
                                GET IN TOUCH
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arc dolor.
                            </p>
                        </div>

                        {/* Map Container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2sBowery%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="transition-all duration-300 group-hover:scale-105"
                            ></iframe>
                            <div className="absolute inset-0 pointer-events-none border-4 border-white/20 rounded-2xl"></div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-10">
                        <div className="mb-8">
                            <h2 className="text-gray-900 text-5xl font-black mb-4">
                                FILL UP THE FORM
                            </h2>
                            <p className="text-gray-600 text-sm">
                                Your email address will not be published. Required fields are marked <span className="text-red-600">*</span>
                            </p>
                        </div>

                        <div className="space-y-6">

                            {/* Name Input */}
                            <div className="group">
                                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                    <User className="w-5 h-5 text-gray-400" />
                                    <span>Your Name<span className="text-red-600">*</span></span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border-b-2 border-gray-300 focus:border-green-600 outline-none py-3 px-2 text-gray-900 transition-all duration-300 bg-transparent"
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="group">
                                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                    <Mail className="w-5 h-5 text-gray-400" />
                                    <span>Email Address<span className="text-red-600">*</span></span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border-b-2 border-gray-300 focus:border-green-600 outline-none py-3 px-2 text-gray-900 transition-all duration-300 bg-transparent"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div className="group">
                                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                    <MessageSquare className="w-5 h-5 text-gray-400" />
                                    <span>Enter Your Message Here</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full border-b-2 border-gray-300 focus:border-green-600 outline-none py-3 px-2 text-gray-900 transition-all duration-300 bg-transparent resize-none"
                                    placeholder="Write your message..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                className="group relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black text-lg px-10 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    GET IN TOUCH
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactFormSection;