import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
  FileText,
  Star,
  ArrowRight,
} from "lucide-react";
import RelatedVideos from "../components/RelatedVideos";

interface Product {
  id: string;
  name: string;
  website_url: string;
  logo_url: string;
  pricing: { name: string; url: string; price: string }[];
  tool_overview: string;
  key_features: string[];
  pros: string[];
  cons: string[];
  related_videos: string[];
  related_blogs: { url: string; title: string }[];
  verdict: string;
  category: string;
}

const ProductDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app, you'd fetch this based on the ID
  const product: Product = {
    id: "1",
    name: "SteelSeries Arctis 7P Wireless Gaming Headset",
    website_url: "https://steelseries.com/gaming-headsets/arctis-7p",
    logo_url:
      "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=400",
    pricing: [
      { name: "Amazon", url: "#", price: "$149.99" },
      { name: "Shopee", url: "#", price: "$149.99" },
      { name: "Shopify", url: "#", price: "$149.99" },
      { name: "Shopify", url: "#", price: "$149.99" },
      { name: "Shopify", url: "#", price: "$149.99" },
    ],
    tool_overview:
      "The SteelSeries Arctis 7P is a premium wireless gaming headset designed specifically for PlayStation 5, but also compatible with PC, Mac, and mobile devices. It features lossless 2.4GHz wireless audio, exceptional comfort for long gaming sessions, and crystal-clear communication with the ClearCast microphone. With 24+ hours of battery life and DTS Headphone:X 2.0 surround sound, it's built for serious gamers who demand both performance and comfort.",
    key_features: [
      "Lossless 2.4GHz wireless connection",
      "24+ hour battery life",
      "DTS Headphone:X 2.0 surround sound",
      "ClearCast bidirectional microphone",
      "Steel-reinforced headband",
      "Memory foam ear cushions",
      "Cross-platform compatibility",
      "SteelSeries Engine software support",
    ],
    pros: [
      "Exceptional wireless audio quality with no latency",
      "Outstanding 24+ hour battery life",
      "Extremely comfortable for extended gaming sessions",
      "Crystal clear microphone with noise cancellation",
      "Durable build quality with steel reinforcement",
      "Easy setup across multiple platforms",
      "Excellent surround sound positioning",
      "Lightweight design despite premium build",
    ],
    cons: [
      "Premium price point may not suit all budgets",
      "No active noise cancellation for ambient sounds",
      "Charging cable is relatively short",
      "Limited customization without SteelSeries Engine",
      "Microphone is not detachable",
    ],
    related_videos: [
      "dQw4w9WgXcQ",
      "jNQXAC9IVRw",
      "9bZkp7q19f0",
      "kJQP7kiw5Fk",
      "tgbNymZ7vqY",
      "vTIIMJ9tUc8",
    ],

    related_blogs: [
      {
        url: "#",
        title: "Best Gaming Headsets for PS5 in 2025",
      },
      {
        url: "#",
        title: "Wireless vs Wired Gaming Headsets: Which is Better?",
      },
      {
        url: "#",
        title: "How to Choose the Perfect Gaming Headset",
      },
    ],
    verdict:
      "The SteelSeries Arctis 7P is an outstanding wireless gaming headset that delivers on all fronts - audio quality, comfort, battery life, and build quality. While it comes at a premium price, the investment is justified by its exceptional performance and versatility across multiple platforms. It's particularly excellent for PS5 gamers but works seamlessly with PC and other devices. The combination of lossless wireless audio, incredible battery life, and supreme comfort makes it our top recommendation for serious gamers who want the best wireless gaming experience.",
    category: "Gaming Headset",
  };

  const suggestedProducts = [
    {
      name: "HyperX Cloud Alpha S",
      image:
        "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$129",
      rating: 4,
    },
    {
      name: "Razer BlackShark V2 Pro",
      image:
        "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$179",
      rating: 5,
    },
    {
      name: "Corsair HS80 RGB Wireless",
      image:
        "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "$149",
      rating: 4,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <Link
            to="/reviews"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Reviews
          </Link>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              {/* Product Logo */}
              <div className="flex-shrink-0">
                <img
                  src={product.logo_url}
                  alt={product.name}
                  className="w-28 h-28 md:w-44 md:h-44 lg:w-64 lg:h-64 rounded-2xl object-cover border border-gray-700 shadow-md"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1">
                <div className="mb-3">
                  <span className="inline-block bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                  {product.name}
                </h1>

                {/* Pricing Buttons */}
                <div className="flex flex-wrap gap-4">
                  {product.pricing.map((store) => (
                    <a
                      key={store.name}
                      href={store.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-5 py-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-md"
                    >
                      <span>
                        {store.price}{" "}
                        <span className="font-semibold">From {store.name}</span>
                      </span>
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {product.tool_overview}
            </p>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.key_features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-1 bg-green-600/20 rounded-full">
                      <Check className="h-4 w-4 text-green-400" />
                    </div>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pros & Cons Section */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-green-600/20 rounded-full mr-3">
                  <ThumbsUp className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Pros</h3>
              </div>
              <div className="space-y-3">
                {product.pros.map((pro, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">{pro}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cons */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-red-600/20 rounded-full mr-3">
                  <ThumbsDown className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Cons</h3>
              </div>
              <div className="space-y-3">
                {product.cons.map((con, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">{con}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Verdict Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Verdict</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {product.verdict}
            </p>
          </div>
        </div>

        {/* Related Content Section */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Related Videos */}
            {/* <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-red-600/20 rounded-full mr-3">
                  <Play className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Related Videos</h3>
              </div>
              <div className="space-y-3">
                {product.related_videos.map((video, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <Play className="h-4 w-4 text-red-400 flex-shrink-0" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {video}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div> */}
            <RelatedVideos review={product} />

            {/* Related Blogs */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-blue-600/20 rounded-full mr-3">
                  <FileText className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Related Articles
                </h3>
              </div>
              <div className="space-y-3">
                {product.related_blogs.map((blog, index) => (
                  <a
                    key={index}
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <FileText className="h-4 w-4 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {blog.title}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Products Section */}
        <div className="mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {suggestedProducts.map((suggestedProduct, index) => (
                <div
                  key={index}
                  className="bg-gray-700/30 rounded-xl p-6 group hover:bg-gray-700/50 transition-all"
                >
                  <div className="aspect-square bg-gray-600/50 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={suggestedProduct.image}
                      alt={suggestedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {suggestedProduct.name}
                  </h3>
                  <div className="flex items-center space-x-1 mb-3">
                    {renderStars(suggestedProduct.rating)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white">
                      {suggestedProduct.price}
                    </span>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-all transform hover:scale-105">
                      <span>Check Detail</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
