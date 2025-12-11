import { useState } from 'react';
import { useNavigate } from 'react-router';

const faqs = [
    {
        question: "What are your opening hours?",
        answer: "We're open Monday to Thursday from 11:00 AM to 10:00 PM, Friday and Saturday from 11:00 AM to 11:00 PM, and Sunday from 12:00 PM to 9:00 PM."
    },
    {
        question: "Do you offer delivery services?",
        answer: "Yes, we offer delivery through our website and major delivery platforms. Free delivery on orders over $30 within a 5-mile radius."
    },
    {
        question: "Are there vegetarian or vegan options?",
        answer: "Absolutely! We have a dedicated section on our menu for vegetarian and vegan options. All items are clearly marked on the menu."
    },
    {
        question: "Can I make reservations for large groups?",
        answer: "Yes, we welcome groups! For parties of 8 or more, we recommend calling ahead at least 24 hours in advance."
    },
    {
        question: "Do you have gluten-free options?",
        answer: "Yes, we offer gluten-free buns and several naturally gluten-free menu items. Please inform your server about any dietary restrictions."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, debit cards, cash, Apple Pay, Google Pay, and PayPal for online orders."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const navigate = useNavigate();

    return (
        <div className="w-full bg-white py-20 sm:py-28 lg:py-36 px-4 sm:px-6">
            <div className="container mx-auto max-w-5xl">

                {/* Header */}
                <div className="text-center mb-16 sm:mb-20 lg:mb-24">
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                        Frequently Asked Questions
                    </h2>

                </div>

                {/* FAQ List */}
                <div className="space-y-1">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-200 last:border-0"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left py-6 sm:py-8 flex items-start justify-between gap-6 group"
                            >
                                <h3 className={`text-lg sm:text-xl lg:text-3xl font-medium transition-colors duration-300 ${openIndex === index ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'
                                    }`}>
                                    {faq.question}
                                </h3>

                                <div className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                    }`}>
                                    <svg className="w-full h-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index
                                    ? 'max-h-96 pb-8'
                                    : 'max-h-0'
                                    }`}
                            >
                                <p className="text-gray-600 text-base sm:text-lg leading-relaxed pr-12">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Contact */}
                <div className="mt-20 sm:mt-24 text-center">
                    <p className="text-gray-500 text-lg mb-6">
                        Still have questions?
                    </p>
                    <button onClick={() => navigate("/contact")} className="bg-gray-900 text-white font-medium px-10 py-4 text-xl rounded-full hover:bg-gray-800 transition-colors">
                        Contact Us
                    </button>
                </div>

            </div>
        </div>
    );
};

export default FAQSection;