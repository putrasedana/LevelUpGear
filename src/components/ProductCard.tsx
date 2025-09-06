import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  name: string;
  image: string;
  rating: number;
  price: string;
  category: string;
  features: string[];
  affiliateLink: string;
  badge?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  rating,
  price,
  category,
  features,
  affiliateLink,
  badge
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 group hover:border-purple-500/50 transition-all duration-300 hover:bg-gray-800/70 relative">
      {badge && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {badge}
        </div>
      )}
      
      <div className="aspect-square bg-gray-700/50 rounded-lg mb-4 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-sm text-purple-400 font-medium">{category}</p>
          <h3 className="text-lg font-semibold text-white line-clamp-2">{name}</h3>
        </div>

        <div className="flex items-center space-x-1">
          {renderStars(rating)}
          <span className="text-sm text-gray-400 ml-2">({rating}.0)</span>
        </div>

        <div className="space-y-1">
          {features.map((feature, index) => (
            <p key={index} className="text-sm text-gray-300">• {feature}</p>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div>
            <p className="text-sm text-gray-400">Starting at</p>
            <p className="text-xl font-bold text-white">{price}</p>
          </div>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-all transform hover:scale-105"
          >
            <span>Check Price</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;