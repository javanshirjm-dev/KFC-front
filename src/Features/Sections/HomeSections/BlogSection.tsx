import { useState, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next'; // Import hook

const BlogSection = () => {
    const { t } = useTranslation(); // Initialize hook
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Define posts using translations
    const blogPosts = [
        {
            image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80",
            category: t('blog_section.posts.post_1.category'),
            categoryColor: "text-red-600",
            date: t('blog_section.posts.post_1.date'),
            title: t('blog_section.posts.post_1.title'),
            delay: "0s"
        },
        {
            image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80",
            category: t('blog_section.posts.post_2.category'),
            categoryColor: "text-red-600",
            date: t('blog_section.posts.post_2.date'),
            title: t('blog_section.posts.post_2.title'),
            delay: "0.2s"
        },
        {
            image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=80",
            category: t('blog_section.posts.post_3.category'),
            categoryColor: "text-red-600",
            date: t('blog_section.posts.post_3.date'),
            title: t('blog_section.posts.post_3.title'),
            delay: "0.4s"
        }
    ];

    return (
        <div className="relative w-full bg-gray-50 py-35 overflow-hidden">

            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 opacity-30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100 opacity-30 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-gray-900 text-5xl lg:text-6xl font-black mb-4 animate-fade-in uppercase">
                        {t('blog_section.title')}
                    </h2>
                    <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className={`group transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                            style={{ transitionDelay: post.delay }}
                        >
                            {/* Card */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">

                                {/* Image Container */}
                                <div className="relative h-80 overflow-hidden shrink-0">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Read More Button on Hover */}
                                    <div className="absolute bottom-6 left-6 right-6 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <Link
                                            to="/blog"
                                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-full flex items-center justify-center gap-2"
                                        >
                                            {t('blog_section.read_more')}
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    {/* Category and Date */}
                                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                                        <span className={`${post.categoryColor} font-bold text-sm uppercase tracking-wider`}>
                                            {post.category}
                                        </span>
                                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                                            <Calendar className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-gray-900 text-xl font-bold group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                                        {post.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link
                        to="/blog"
                        className="group bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center gap-3"
                    >
                        {t('blog_section.view_all')}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </div>

            <style>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default BlogSection;