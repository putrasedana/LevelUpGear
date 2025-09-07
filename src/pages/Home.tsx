import React from "react";
import {
  ArrowRight,
  Headphones,
  Mic,
  Video,
  Settings,
  Star,
  TrendingUp,
} from "lucide-react";
import ProductCard from "../components/ProductCard";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const categories = [
    {
      icon: Headphones,
      name: "Gaming Headsets",
      description: "Crystal clear audio for competitive gaming",
      count: "45+ Reviews",
    },
    {
      icon: Mic,
      name: "Streaming Microphones",
      description: "Professional audio for content creators",
      count: "30+ Reviews",
    },
    {
      icon: Video,
      name: "Capture Cards",
      description: "Stream and record in stunning quality",
      count: "20+ Reviews",
    },
    {
      icon: Settings,
      name: "Streaming Software",
      description: "Tools to enhance your streaming workflow",
      count: "25+ Reviews",
    },
  ];

  const featuredProducts = [
    {
      name: "SteelSeries Arctis 7P Wireless Gaming Headset",
      image:
        "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      price: "$149",
      category: "Gaming Headset",
      features: ["Wireless 2.4GHz", "24-hour battery", "DTS Headphone:X 2.0"],
      affiliateLink: "#",
    },
    {
      name: "Audio-Technica AT2020USB+ Cardioid Condenser",
      image:
        "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      price: "$169",
      category: "USB Microphone",
      features: [
        "Studio-grade sound",
        "USB plug-and-play",
        "Zero-latency monitoring",
      ],
      affiliateLink: "#",
    },
    {
      name: "Elgato HD60 S+ Capture Card",
      image:
        "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4,
      price: "$199",
      category: "Capture Card",
      features: ["4K60 HDR capture", "Ultra-low latency", "Instant gameview"],
      affiliateLink: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Ultimate Hub for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Gaming & Streaming Gear
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the best gaming headsets, streaming microphones, capture
            cards, and accessories. Expert reviews, detailed comparisons, and
            honest recommendations to level up your setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-lg font-medium text-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-105">
              <span>Find Your Perfect Setup</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-lg font-medium text-lg transition-all">
              Browse Top Picks
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-300 text-lg">
              Find the perfect gear for your gaming and streaming needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 group hover:border-purple-500/50 transition-all duration-300 hover:bg-gray-800/70 cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full mb-4 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all">
                      <Icon className="h-8 w-8 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {category.description}
                    </p>
                    <span className="text-purple-400 text-sm font-medium">
                      {category.count}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Star className="h-8 w-8 text-yellow-400 mr-3" />
                Top Picks This Month
              </h2>
              <p className="text-gray-300 text-lg">
                Hand-picked by our experts for exceptional quality and value
              </p>
            </div>
            <button className="hidden md:flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-medium transition-colors">
              <span>View All Reviews</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-4xl font-bold text-white">120+</h3>
              <p className="text-gray-300">Products Reviewed</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-4xl font-bold text-white">50K+</h3>
              <p className="text-gray-300">Happy Readers</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-4">
                <Settings className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-4xl font-bold text-white">3 Years</h3>
              <p className="text-gray-300">of Expert Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Newsletter />
        </div>
      </section>
    </div>
  );
};

export default Home;
