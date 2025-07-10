import React from 'react';
import { Search, ShoppingCart, Heart, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                SweetSpot
              </h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors duration-200 font-medium">
              Cakes
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors duration-200 font-medium">
              Custom Orders
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors duration-200 font-medium">
              Contact
            </a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-pink-500 transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-pink-500 transition-colors duration-200">
              <Heart size={20} />
            </button>
            <button className="text-gray-700 hover:text-pink-500 transition-colors duration-200 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="md:hidden text-gray-700 hover:text-pink-500 transition-colors duration-200">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;