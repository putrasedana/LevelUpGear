import React from 'react';
import { BookOpen, Clock, User, ArrowRight } from 'lucide-react';

const Guides = () => {
  const guides = [
    {
      title: 'The Complete Guide to Choosing Your First Gaming Headset',
      excerpt: 'Everything you need to know about picking the perfect gaming headset for your setup, budget, and gaming style.',
      readTime: '8 min read',
      author: 'Alex Johnson',
      category: 'Beginner Guide',
      image: 'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      title: 'Best Streaming Microphones for Every Budget (2025)',
      excerpt: 'From budget USB mics to professional XLR setups, find the perfect microphone for your streaming needs.',
      readTime: '12 min read',
      author: 'Sarah Chen',
      category: 'Buying Guide',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'How to Set Up Your First Streaming Studio',
      excerpt: 'Step-by-step guide to building a professional streaming setup without breaking the bank.',
      readTime: '15 min read',
      author: 'Mike Torres',
      category: 'Setup Guide',
      image: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Capture Cards Explained: Do You Really Need One?',
      excerpt: 'Understanding when you need a capture card and which one to choose for your streaming setup.',
      readTime: '6 min read',
      author: 'Emma Davis',
      category: 'Technical Guide',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Wireless vs Wired Gaming Headsets: The Ultimate Comparison',
      excerpt: 'Pros and cons of wireless and wired gaming headsets to help you make the right choice.',
      readTime: '10 min read',
      author: 'David Kim',
      category: 'Comparison',
      image: 'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Audio Settings Guide for Crystal Clear Stream Audio',
      excerpt: 'Optimize your audio settings in OBS and other streaming software for professional sound quality.',
      readTime: '7 min read',
      author: 'Lisa Rodriguez',
      category: 'Technical Guide',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const categories = [
    'All Guides',
    'Beginner Guide',
    'Buying Guide', 
    'Setup Guide',
    'Technical Guide',
    'Comparison'
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <BookOpen className="h-10 w-10 text-purple-400 mr-3" />
            Guides & Tips
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Expert guides, tutorials, and tips to help you make informed decisions and get the most out of your gaming and streaming gear.
          </p>
        </div>

        {/* Featured Guide */}
        {guides.find(guide => guide.featured) && (
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                    Featured Guide
                  </span>
                  <span className="text-purple-400 text-sm font-medium">
                    {guides.find(guide => guide.featured)?.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {guides.find(guide => guide.featured)?.title}
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  {guides.find(guide => guide.featured)?.excerpt}
                </p>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <User className="h-4 w-4" />
                    <span className="text-sm">{guides.find(guide => guide.featured)?.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{guides.find(guide => guide.featured)?.readTime}</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-all transform hover:scale-105">
                  <span>Read Full Guide</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={guides.find(guide => guide.featured)?.image}
                  alt="Featured guide"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                index === 0
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.filter(guide => !guide.featured).map((guide, index) => (
            <article
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden group hover:border-purple-500/50 transition-all duration-300 hover:bg-gray-800/70"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-purple-400 text-sm font-medium">{guide.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {guide.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{guide.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{guide.readTime}</span>
                    </div>
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center space-x-1 transition-colors">
                    <span>Read</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105">
            Load More Guides
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guides;