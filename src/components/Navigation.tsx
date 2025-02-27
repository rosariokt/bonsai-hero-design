
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className={`font-bold text-xl ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}>
              Indo Cipanas Bonsai
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`${
              isScrolled ? "text-gray-600" : "text-white"
            } hover:text-green-500 transition-colors`}>
              About Us
            </a>
            <a href="#products" className={`${
              isScrolled ? "text-gray-600" : "text-white"
            } hover:text-green-500 transition-colors`}>
              Products
            </a>
            <a href="#process" className={`${
              isScrolled ? "text-gray-600" : "text-white"
            } hover:text-green-500 transition-colors`}>
              Process
            </a>
            <a href="#testimonials" className={`${
              isScrolled ? "text-gray-600" : "text-white"
            } hover:text-green-500 transition-colors`}>
              Testimonials
            </a>
            <a href="#faq" className={`${
              isScrolled ? "text-gray-600" : "text-white"
            } hover:text-green-500 transition-colors`}>
              FAQ
            </a>
            <a
              href="#footer"
              className={`px-4 py-2 rounded-lg ${
                isScrolled
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              } transition-colors`}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <span className={`sr-only ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}>
              Open menu
            </span>
            {/* Add mobile menu implementation if needed */}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
