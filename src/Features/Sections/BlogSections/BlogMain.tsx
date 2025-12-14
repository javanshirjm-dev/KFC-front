import { useState } from 'react';
import { Search, Calendar, User, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const BlogPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const allPosts = [
        {
            image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=1200&q=80",
            title: "The Secret Recipe: KFC's 11 Herbs & Spices Mystery",
            excerpt: "Discover the legendary story behind Colonel Sanders' secret recipe that has remained locked in a vault for decades. Learn about the unique blend that makes KFC chicken irresistible.",
            author: "Marcus Johnson",
            date: "March 24, 2024",
            comments: 35,
            category: "Original Recipe"
        },
        {
            image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=1200&q=80",
            title: "Zinger Burger Evolution: A Spicy Success Story",
            excerpt: "From its humble beginnings to becoming a global sensation, explore how the Zinger became one of KFC's most iconic menu items and a fan favorite worldwide.",
            author: "Sarah Mitchell",
            date: "March 23, 2024",
            comments: 28,
            category: "Burgers"
        },
        {
            image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=1200&q=80",
            title: "Bucket Meals: Perfect for Every Occasion",
            excerpt: "Whether it's game night, family gatherings, or office parties, discover why KFC buckets have become the go-to choice for feeding groups and creating memories.",
            author: "Tom Anderson",
            date: "March 22, 2024",
            comments: 42,
            category: "Family Meals"
        },
        {
            image: "https://www.thesouthafrican.com/wp-content/uploads/2025/10/feature-kfc.jpg.optimal.jpg",
            title: "Crispy vs Original: The Great KFC Debate",
            excerpt: "Dive into the friendly rivalry between Extra Crispy and Original Recipe fans. Which coating reigns supreme? We explore what makes each style unique.",
            author: "Jennifer Lee",
            date: "March 21, 2024",
            comments: 19,
            category: "Chicken Styles"
        },
        {
            image: "https://images.ctfassets.net/wtodlh47qxpt/20O6So7pfw8LmaNQ5yG8L/14dc9f15bb0e060b99f2fdd869313c68/A-34924-0.jpg",
            title: "Hot Wings Heat Scale: Finding Your Perfect Spice Level",
            excerpt: "From mild to fiery hot, KFC's wing varieties cater to every heat preference. Learn about the different spice levels and what makes each one special.",
            author: "Alex Rodriguez",
            date: "March 20, 2024",
            comments: 31,
            category: "Wings"
        },
        {
            image: "https://www.allrecipes.com/thmb/okff_w2aH050Lsx70HsCmg8DmI8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-KFC-meal-2x1-47e17b6af3604404becfa5cdf50bd7a5.jpg",
            title: "The Perfect Sides: More Than Just Chicken",
            excerpt: "KFC's signature sides like coleslaw, mashed potatoes, and biscuits complete the meal. Discover the history and recipes behind these beloved accompaniments.",
            author: "Rachel Green",
            date: "March 19, 2024",
            comments: 24,
            category: "Sides"
        },
        {
            image: "https://kfc.nl/wp-content/uploads/2025/10/251727_KFC_W6_HomepageBanner_Mobile_1720x21503-860x1075.jpg",
            title: "Colonel Sanders: The Man Behind the Legend",
            excerpt: "Take a journey through the remarkable life of Harland Sanders, from his humble beginnings to building one of the world's most recognizable fast-food empires.",
            author: "William Brooks",
            date: "March 18, 2024",
            comments: 45,
            category: "Brand History"
        },
        {
            image: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2020-04/kfc%281000x562%29.jpg",
            title: "Around the World: KFC's Global Menu Variations",
            excerpt: "From Japan's original chicken to India's spicy options, explore how KFC adapts its menu to local tastes while maintaining its signature quality.",
            author: "Nina Patel",
            date: "March 17, 2024",
            comments: 22,
            category: "International"
        }
    ];

    const popularPosts = [
        {
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
            title: "Budget Issues Force The Our To Become",
            date: "24th March 2024"
        },
        {
            image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80",
            title: "The Best Products That Shape Fashion",
            date: "25th March 2024"
        },
        {
            image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=80",
            title: "The Best Products That Shape Fashion",
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

    // Pagination logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(allPosts.length / postsPerPage);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="w-full bg-white py-16 px-6">
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Main Content - Blog Posts */}
                    <div className="lg:col-span-2">
                        <div className="space-y-12">
                            {currentPosts.map((post, index) => (
                                <article key={index} className="group">
                                    {/* Featured Image */}
                                    <div className="relative overflow-hidden mb-6">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-[400px] object-cover"
                                        />
                                    </div>

                                    {/* Post Meta Info */}
                                    <div className="flex flex-wrap items-center gap-6 mb-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MessageCircle className="w-4 h-4" />
                                            <span>{post.comments} Comments</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                    </div>

                                    {/* Post Title */}
                                    <h2 className="text-3xl font-light text-gray-900 mb-4 group-hover:text-red-500 transition-colors cursor-pointer">
                                        {post.title}
                                    </h2>

                                    {/* Post Excerpt */}
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {post.excerpt}
                                    </p>

                                    {/* Read More Link */}
                                    <button className="text-red-500 font-medium hover:text-red-600 transition-colors">
                                        Read More →
                                    </button>

                                    {/* Divider */}
                                    {index < currentPosts.length - 1 && (
                                        <div className="mt-12 border-b border-gray-200"></div>
                                    )}
                                </article>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-16 flex items-center justify-center gap-2">
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="p-2 border border-gray-300 hover:border-red-500 hover:text-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => paginate(index + 1)}
                                    className={`w-10 h-10 border transition-colors ${currentPage === index + 1
                                        ? 'bg-red-500 text-white border-red-500'
                                        : 'border-gray-300 hover:border-red-500 hover:text-red-500'
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="p-2 border border-gray-300 hover:border-red-500 hover:text-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-10">

                        {/* Search Widget */}
                        <div>
                            <h3 className="text-gray-900 text-xl font-medium mb-4">
                                Search
                            </h3>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search articles..."
                                    className="w-full bg-white border border-gray-300 px-4 py-3 pr-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                />
                                <button className="absolute right-0 top-0 bottom-0 bg-red-500 hover:bg-red-600 text-white px-4 transition-colors">
                                    <Search className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Popular Posts */}
                        <div>
                            <h3 className="text-gray-900 text-xl font-medium mb-4">
                                Popular Posts
                            </h3>
                            <div className="space-y-4">
                                {popularPosts.map((post, index) => (
                                    <div key={index} className="flex gap-4 group cursor-pointer">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-20 h-20 object-cover"
                                        />
                                        <div className="flex-1">
                                            <h4 className="text-gray-900 text-sm mb-2 group-hover:text-red-500 transition-colors line-clamp-2">
                                                {post.title}
                                            </h4>
                                            <div className="flex items-center gap-2 text-gray-500 text-xs">
                                                <Calendar className="w-3 h-3" />
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Categories */}
                        <div>
                            <h3 className="text-gray-900 text-xl font-medium mb-4">
                                Categories
                            </h3>
                            <div className="space-y-2">
                                {categories.map((category, index) => (
                                    <button
                                        key={index}
                                        className="w-full flex items-center justify-between bg-white hover:bg-gray-50 text-gray-900 px-4 py-3 border border-gray-200 hover:border-red-500 transition-colors"
                                    >
                                        <span>{category.name}</span>
                                        <span className="text-gray-500 text-sm">
                                            ({category.count})
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

export default BlogPage;