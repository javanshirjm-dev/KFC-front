import { MapPin, Phone, Mail } from 'lucide-react';

const ContactInfoCards = () => {
    const contactInfo = [
        {
            icon: <MapPin className="w-16 h-16" strokeWidth={2} />,
            title: "ADDRESS LINE",
            content: "Bowery St, New York, 37 USA NY 10013, USA",
            bgColor: "bg-white",
            textColor: "text-gray-900",
            iconColor: "text-green-600"
        },
        {
            icon: <Phone className="w-16 h-16" strokeWidth={2} />,
            title: "PHONE NUMBER",
            content: "+1255 - 568 - 6523 4374-221 +1255 - 568 - 6523",
            bgColor: "bg-gradient-to-br from-green-600 to-green-700",
            textColor: "text-white",
            iconColor: "text-white"
        },
        {
            icon: <Mail className="w-16 h-16" strokeWidth={2} />,
            title: "MAIL ADRESS",
            content: "email@example.com info@yourdomain.com",
            bgColor: "bg-white",
            textColor: "text-gray-900",
            iconColor: "text-green-600"
        }
    ];

    return (
        <div className="w-full bg-gray-100 py-16 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-8xl mx-auto">
                    {contactInfo.map((item, index) => (
                        <div
                            key={index}
                            className={`${item.bgColor} rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                        >
                            <div className="flex flex-col items-center text-center space-y-6">
                                {/* Icon */}
                                <div className={`${item.iconColor} animate-fade-in`}>
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className={`${item.textColor} text-2xl font-black uppercase tracking-wide`}>
                                    {item.title}
                                </h3>

                                {/* Content */}
                                <p className={`${item.textColor === 'text-white' ? 'text-white' : 'text-gray-600'} text-lg font-medium leading-relaxed`}>
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.6s ease-out;
                }
            `}</style>
        </div>
    );
};

export default ContactInfoCards;