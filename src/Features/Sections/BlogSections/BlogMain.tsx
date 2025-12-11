import { useState } from 'react';
import { Search, Calendar, User, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const BlogPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const allPosts = [
        {
            image: "https://images.unsplash.com/photo-1619454016518-697bc231e7cb?w=1200&q=80",
            title: "Quick Cravings: Unraveling Fast Food Delights",
            excerpt: "There are many variations of passages available, but majority have suffered. If you are going to use a passage, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
            author: "Shikhon Ha",
            date: "March 24, 2024",
            comments: 35,
            category: "Fast Food"
        },
        {
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=80",
            title: "The Art of Crafting Perfect Burgers at Home",
            excerpt: "Discover the secrets behind creating restaurant-quality burgers in your own kitchen. From selecting the right meat blend to perfecting your cooking technique.",
            author: "Michael Chen",
            date: "March 23, 2024",
            comments: 28,
            category: "Burgers"
        },
        {
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80",
            title: "Pizza Night: Traditional Italian Recipes Revealed",
            excerpt: "Learn authentic Italian pizza-making techniques passed down through generations. From dough preparation to the perfect sauce balance.",
            author: "Sofia Romano",
            date: "March 22, 2024",
            comments: 42,
            category: "Pizza"
        },
        {
            image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1200&q=80",
            title: "Healthy Fast Food: Making Better Choices",
            excerpt: "Not all fast food has to be unhealthy. Explore options and tips for making nutritious choices when you're on the go.",
            author: "Emma Watson",
            date: "March 21, 2024",
            comments: 19,
            category: "Fast Food"
        },
        {
            image: "https://images.unsplash.com/photo-1562007908-17c67e878c88?w=1200&q=80",
            title: "Dessert Dreams: Creating Instagram-Worthy Treats",
            excerpt: "Master the art of plating and presentation with these stunning dessert ideas that taste as good as they look.",
            author: "James Baker",
            date: "March 20, 2024",
            comments: 31,
            category: "Desserts"
        },
        {
            image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200&q=80",
            title: "The Ultimate Guide to Craft Beverages",
            excerpt: "From artisanal sodas to specialty coffees, explore the world of craft beverages and how to make them at home.",
            author: "Lisa Thompson",
            date: "March 19, 2024",
            comments: 24,
            category: "Beverages"
        },
        {
            image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=1200&q=80",
            title: "Street Food Culture Around the World",
            excerpt: "Take a culinary journey through the best street food destinations and learn what makes each cuisine unique.",
            author: "Carlos Rodriguez",
            date: "March 18, 2024",
            comments: 45,
            category: "Fast Food"
        },
        {
            image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=1200&q=80",
            title: "Burger Innovation: Beyond the Classic",
            excerpt: "Explore creative burger variations from around the globe. From exotic toppings to unexpected flavor combinations.",
            author: "David Kim",
            date: "March 17, 2024",
            comments: 22,
            category: "Burgers"
        },
        {
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80",
            title: "Wood-Fired Pizza: Techniques and Tips",
            excerpt: "Understanding the science and art behind wood-fired pizza ovens and how to achieve that perfect crispy crust.",
            author: "Marco Bianchi",
            date: "March 16, 2024",
            comments: 38,
            category: "Pizza"
        },
        {
            image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1200&q=80",
            title: "Sweet Sensations: Chocolate Dessert Masterclass",
            excerpt: "Dive deep into the world of chocolate desserts with professional techniques and recipes from top pastry chefs.",
            author: "Sarah Mitchell",
            date: "March 15, 2024",
            comments: 29,
            category: "Desserts"
        },
        {
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80",
            title: "Fresh Smoothie Recipes for Every Season",
            excerpt: "Healthy, delicious smoothie combinations that will energize your day and support your wellness goals.",
            author: "Rachel Green",
            date: "March 14, 2024",
            comments: 16,
            category: "Beverages"
        },
        {
            image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=1200&q=80",
            title: "Fast Food Industry Trends in 2024",
            excerpt: "An in-depth look at how technology and consumer preferences are shaping the future of fast food.",
            author: "Tom Anderson",
            date: "March 13, 2024",
            comments: 33,
            category: "Fast Food"
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