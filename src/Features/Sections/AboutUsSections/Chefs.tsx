import { useState } from 'react';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router';

const TeamSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const navigate = useNavigate();

    const teamMembers = [
        {
            image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=600&q=80",
            role: "Head Chef",
            name: "LESLIE ALEXANDER"
        },
        {
            image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80",
            role: "Sr Table Manager",
            name: "HENRY LUCAS"
        },
        {
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
            role: "Senoir Cooker",
            name: "MATEO LEVI"
        }
    ];

    return (
        <div className="w-full bg-gray-50 py-35 px-6">
            <h1
                className="text-6xl font-extrabold text-center mb-25"
                style={{ fontFamily: 'Barlow, sans-serif' }}
            >
                MEET OUR EXPERT CHEFS
            </h1>

            <div className="container mx-auto max-w-7xl">
                <div className="grid md:grid-cols-3 gap-12">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="relative group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Dotted Border Frame */}
                            <div className="absolute -top-6 -left-6 right-6 bottom-24 border-2 border-dashed border-green-600 rounded-3xl"></div>

                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-3xl shadow-xl">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-[450px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Overlay */}
                                <div
                                    className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${hoveredIndex === index
                                        ? "opacity-100"
                                        : "opacity-0"
                                        }`}
                                ></div>

                                {/* Social Icons */}
                                <div
                                    className={`absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 transition-all duration-500 ${hoveredIndex === index
                                        ? "translate-x-0 opacity-100"
                                        : "-translate-x-20 opacity-0"
                                        }`}
                                >
                                    {[
                                        { icon: <Facebook className="w-5 h-5" />, color: 'bg-green-600' },
                                        { icon: <Twitter className="w-5 h-5" />, color: 'bg-green-600' },
                                        { icon: <Linkedin className="w-5 h-5" />, color: 'bg-green-600' },
                                        { icon: <Youtube className="w-5 h-5" />, color: 'bg-green-600' }
                                    ].map((social, i) => (
                                        <button
                                            key={i}
                                            className={`${social.color} hover:bg-green-700 text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg`}
                                        >
                                            {social.icon}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Text */}
                            <div className="text-center mt-8 space-y-2">
                                <p className="text-green-600 text-lg font-bold">
                                    {member.role}
                                </p>
                                <h3 className="text-gray-900 text-2xl font-black">
                                    {member.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* yolluyan duyme */}
            <div className="text-center mt-16">
                <button
                    onClick={() => navigate("/chefpage")}
                    className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                >
                    MEET OUR TEAM
                </button>
            </div>
        </div>
    );
};

export default TeamSection;
