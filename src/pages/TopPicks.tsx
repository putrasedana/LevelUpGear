import React from 'react';
import { Crown, Trophy, DollarSign, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const TopPicks = () => {
  const topPicksCategories = [
    {
      icon: Crown,
      title: "Editor's Choice",
      description: "Our top-rated products across all categories",
      color: "from-yellow-600 to-orange-600",
      products: [
        {
          name: 'SteelSeries Arctis 7P Wireless Gaming Headset',
          image: 'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=400',
          rating: 5,
          price: '$149',
          category: 'Gaming Headset',
          features: ['Wireless 2.4GHz', '24-hour battery', 'DTS Headphone:X 2.0'],
          affiliateLink: '#',
          badge: 'Editor\'s Choice'
        },
        {
          name: 'Audio-Technica AT2020USB+ Cardioid Condenser',
          image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400',
          rating: 5,
          price: '$169',
          category: 'USB Microphone',
          features: ['Studio-grade sound', 'USB plug-and-play', 'Zero-latency monitoring'],
          affiliateLink: '#',
          badge: 'Editor\'s Choice'
        },
        {
          name: 'Elgato HD60 S+ Capture Card',
          image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400',
          rating: 5,
          price: '$199',
          category: 'Capture Card',
          features: ['4K60 HDR capture', 'Ultra-low latency', 'Instant gameview'],
          affiliateLink: '#',
          badge: 'Editor\'s Choice'
        }
      ]
    },
    {
      icon: DollarSign,
      title: "Best Value",
      description: "Maximum performance for your budget",
      color: "from-green-600 to-emerald-600",
      products: [
        {
          name: 'HyperX Cloud Alpha S Gaming Headset',
          image: 'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=400',
          rating: 4,
          price: '$129',
          category: 'Gaming Headset',
          features: ['Dual Chamber Drivers', '7.1 Surround Sound', 'Memory foam'],
          affiliateLink: '#',
          badge: 'Best Value'
        },
        {
          name: 'Blue Yeti USB Microphone',
          image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400',
          rating: 4,
          price: '$99',
          category: 'USB Microphone',
          features: ['Multiple pickup patterns', 'Real-time headphone monitoring', 'Plug \'n play'],
          affiliateLink: '#',
          badge: 'Best Value'
        },
        {
          name: 'AVerMedia Live Gamer Mini',
          image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400',
          rating: 4,
          price: '$89',
          category: 'Capture Card',
          features: ['1080p60 recording', 'Plug & play', 'Zero-lag pass-through'],
          affiliateLink: '#',
          badge: 'Best Value'
        }
      ]
    },
    {
      icon: Trophy,
      title: "Premium Picks",
      description: "Top-tier gear for professionals",
      color: "from-purple-600 to-pink-600",
      products: [
        {
          name: 'SteelSeries Arctis Pro Wireless',
          image: 'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=400',
          rating: 5,
          price: '$329',
          category: 'Gaming Headset',
          features: ['Hi-Res audio certified', 'Dual wireless', 'DTS Headphone:X v2.0'],
          affiliateLink: '#',
          badge: 'Premium'
        },
        {
          name: 'Shure SM7B Dynamic Microphone',
          image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400',
          rating: 5,
          price: '$399',
          category: 'XLR Microphone',
          features: ['Broadcast standard', 'Internal shock isolation', 'Electromagnetic hum rejection'],
          affiliateLink: '#',
          badge: 'Premium'
        },
        {
          name: 'Elgato 4K60 Pro MK.2',
          image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400',
          rating: 5,
          price: '$249',
          category: 'Capture Card',
          features: ['4K60 HDR10 capture', 'PCIe interface', 'Zero-lag passthrough'],
          affiliateLink: '#',
          badge: 'Premium'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <Star className="h-10 w-10 text-yellow-400 mr-3" />
            Top Picks & Recommendations
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our carefully curated selection of the best gaming and streaming gear. Each product has been thoroughly tested and evaluated by our expert team.
          </p>
        </div>

        {/* Categories */}
        {topPicksCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
            <section key={categoryIndex} className="mb-16">
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`p-4 bg-gradient-to-r ${category.color} rounded-xl mr-4`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  <p className="text-gray-400">{category.description}</p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, productIndex) => (
                  <ProductCard key={productIndex} {...product} />
                ))}
              </div>
            </section>
          );
        })}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our full reviews database contains over 120+ products across all categories. 
            Use our advanced search and filtering to find the perfect gear for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105">
              Browse All Reviews
            </button>
            <button className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-lg font-medium transition-all">
              Request a Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPicks;