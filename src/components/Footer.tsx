import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Gamepad2, Mail, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/reviews?category=${category}`);
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                <Gamepad2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  LevelUpGear
                </h2>
                <p className="text-sm text-gray-400">
                  Your Ultimate Hub for Gaming & Streaming Gear
                </p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Helping gamers and streamers find the perfect tools to level up
              their setup. From microphones to capture cards, we review the gear
              that matters.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/reviews"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleCategoryClick('headsets')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Headsets
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('microphones')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Microphones
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('capture-cards')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Capture Cards
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('software')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Streaming Software
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 LevelUpGear. All rights reserved. As an affiliate, we earn
            from qualifying purchases.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/privacy-policy"
              className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
