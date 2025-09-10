import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import ProductCard from "../components/ProductCard";

const Reviews = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );

  // Update URL when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "headsets", label: "Gaming Headsets" },
    { value: "microphones", label: "Microphones" },
    { value: "capture-cards", label: "Capture Cards" },
    { value: "software", label: "Streaming Software" },
  ];

  const products = [
    {
      name: "SteelSeries Arctis 7P Wireless Gaming Headset",
      image:
        "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      price: "$149",
      category: "Gaming Headset",
      features: ["Wireless 2.4GHz", "24-hour battery", "DTS Headphone:X 2.0"],
      affiliateLink: "#",
      badge: "Editor's Choice",
    },
    {
      name: "HyperX Cloud Alpha S Gaming Headset",
      image:
        "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4,
      price: "$129",
      category: "Gaming Headset",
      features: ["Dual Chamber Drivers", "7.1 Surround Sound", "Memory foam"],
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
      badge: "Best Value",
    },
    {
      name: "Blue Yeti USB Microphone",
      image:
        "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4,
      price: "$99",
      category: "USB Microphone",
      features: [
        "Multiple pickup patterns",
        "Real-time headphone monitoring",
        "Plug 'n play",
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
    {
      name: "AVerMedia Live Gamer Mini",
      image:
        "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4,
      price: "$89",
      category: "Capture Card",
      features: ["1080p60 recording", "Plug & play", "Zero-lag pass-through"],
      affiliateLink: "#",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      product.category
        .toLowerCase()
        .includes(selectedCategory.replace("-", " "));
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-8 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
            Product Reviews
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            In-depth reviews and honest opinions on the latest gaming and
            streaming gear. Find your perfect match with our detailed analysis.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for products, brands, or features..."
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              />
            </div>

            {/* Category Filter */}
            <div className="relative min-w-[200px]">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 appearance-none cursor-pointer"
              >
                {categories.map((category) => (
                  <option
                    key={category.value}
                    value={category.value}
                    className="bg-gray-800"
                  >
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-400">
            Showing {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
            {searchTerm && ` for "${searchTerm}"`}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <Search className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No products found
            </h3>
            <p className="text-gray-400 mb-4">
              Try adjusting your search terms or category filter
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                handleCategoryChange("all");
              }}
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
