import React from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const CakeCard = ({ cake }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Image container */}
      <div className="relative overflow-hidden">
        <img
          src={cake.image}
          alt={cake.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart size={18} className="text-gray-600 hover:text-pink-500 transition-colors duration-200" />
        </div>
        <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {cake.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {cake.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {cake.description}
        </p>
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">(4.8)</span>
        </div>

        {/* Price and button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-pink-600">
  ₹{cake.price_inr} {/* Changed from ${cake.price} to ₹{cake.price_inr} */}
</span>
          </div>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2 font-medium shadow-md hover:shadow-lg">
            <ShoppingCart size={16} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;