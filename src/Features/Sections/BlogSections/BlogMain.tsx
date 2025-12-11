import { useState } from 'react';
import { Search, Calendar, User, MessageCircle, ArrowRight } from 'lucide-react';

const BlogPostSidebar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const popularPosts = [
        {
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
            title: "BUDGET ISSUES FORCE THE OUR TO BECOME",
            date: "24th March 2024"
        },
        {
            image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80",
            title: "THE BEST PRODUCTS THAT SHAPE FASHION",
            date: "25th March 2024"
        },
        {
            image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=80",
            title: "THE BEST PRODUCTS THAT SHAPE FASHION",
            date: "26th March 2024"
        }
    ];

    const categories = [
        { name: "Burgers", count: 12 },
        { name: "Fast Food", count: 8 },
        { name: "Pizza", count: 15 },
        { name: "Desserts", count: 6 },
        { name: "Beverages", count: 9 }
    ];

    return (
        <div className="w-full bg-gray-50 py-16 px-6">
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Main Content - Blog Post */}
                    <div className="lg:col-span-2">

                        {/* Featured Image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
                            <img
                                src="https://images.unsplash.com/photo-1619454016518-697bc231e7cb?w=1200&q=80"
                                alt="Delicious Burger"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>

                        {/* Post Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-600">
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5 text-green-600" />
                                <span className="font-semibold">Shikhon .Ha</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MessageCircle className="w-5 h-5 text-green-600" />
                                <span className="font-semibold">35 Comments</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-green-600" />
                                <span className="font-semibold">24th March 2024</span>
                            </div>
                        </div>

                        {/* Post Title */}
                        <h1 className="text-gray-900 text-5xl font-black mb-6 leading-tight">
                            QUICK CRAVINGS: UNRAVELING FAST FOOD DELIGHTS
                        </h1>

                        {/* Post Content */}
                        <div className="prose prose-lg max-w-none mb-8">
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                There are many variations of passages of Lorem Ipsum available, but majority have suffered Lorem haca ullamcorper donec ante habi believable. If you are going to use a passage of Lorem Ipsum cibo mundi ea duo donec imperdiet eturpis varius per a augue magna hac. dolor sit amet, teration in some form, by injected humour, or randomised words which don't look ev
                            </p>
                        </div>

                        {/* Read More Button */}
                        <button className="group flex items-center gap-3 text-gray-900 font-bold text-lg hover:text-green-600 transition-colors">
                            <span>Read More</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-10">

                        {/* Search Widget */}
                        <div>
                            <h3 className="text-gray-900 text-2xl font-black mb-6 flex items-center gap-2">
                                <div className="w-1 h-8 bg-green-600"></div>
                                SEARCH
                            </h3>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="SEARCH YOUR KEYWORD..."
                                    className="w-full bg-white border-2 border-gray-200 rounded-lg px-6 py-4 pr-16 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 transition-all shadow-sm"
                                />
                                <button className="absolute right-0 top-0 bottom-0 bg-green-600 hover:bg-green-700 text-white px-6 rounded-r-lg transition-colors">
                                    <Search className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Popular Feeds */}
                        <div>
                            <h3 className="text-gray-900 text-2xl font-black mb-6 flex items-center gap-2">
                                <div className="w-1 h-8 bg-green-600"></div>
                                POPULAR FEEDS
                            </h3>
                            <div className="space-y-6">
                                {popularPosts.map((post, index) => (
                                    <div key={index} className="flex gap-4 group cursor-pointer">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-24 h-24 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-shadow"
                                        />
                                        <div className="flex-1">
                                            <h4 className="text-gray-900 font-bold text-sm mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                                                {post.title}
                                            </h4>
                                            <div className="flex items-center gap-2 text-green-600 text-sm">
                                                <Calendar className="w-4 h-4" />
                                                <span className="font-semibold">{post.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Categories */}
                        <div>
                            <h3 className="text-gray-900 text-2xl font-black mb-6 flex items-center gap-2">
                                <div className="w-1 h-8 bg-green-600"></div>
                                CATEGORIES
                            </h3>
                            <div className="space-y-3">
                                {categories.map((category, index) => (
                                    <button
                                        key={index}
                                        className="w-full flex items-center justify-between bg-white hover:bg-green-600 text-gray-900 hover:text-white font-semibold px-6 py-4 rounded-lg border-2 border-gray-200 hover:border-green-600 transition-all shadow-sm group"
                                    >
                                        <span>{category.name}</span>
                                        <span className="bg-gray-100 group-hover:bg-white group-hover:text-green-600 px-3 py-1 rounded-full text-sm font-bold">
                                            {category.count}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostSidebar;