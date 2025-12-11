import { useState } from 'react';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const TeamSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const teamMembers = [
        {
            image: "https://i0.wp.com/www.bridgedetroit.com/wp-content/uploads/2025/01/black-chefs-1.png?fit=2910%2C1936&ssl=1",
            role: "Chief Executive Officer",
            name: "ALEXANDER LESLIE"
        },
        {
            image: "https://cookingwithjade.com/wp-content/uploads/2023/02/Chef-Gregory-Gourdet-1.webp",
            role: "Sr Table Manager",
            name: "RICHARD LUCAS"
        },
        {
            image: "https://hips.hearstapps.com/hmg-prod/images/host-judge-gordon-ramsay-in-the-hells-kitchen-semi-finals-news-photo-1718650477.jpg?crop=1.00xw:0.650xh;0,0.0433xh&resize=480:*",
            role: "Head Chef",
            name: "GORDON RAMSAY"
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

        </div>
    );
};

export default TeamSection;
