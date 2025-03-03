
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navLinks = [
    { href: "/#about", label: "About Us" },
    { href: "/#products", label: "Products" },
    { href: "/#process", label: "Process" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#faq", label: "FAQ" },
    { href: "/about", label: "Company" },
    { href: "/privacy", label: "Privacy" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-white shadow-md" : "md:bg-transparent bg-white/90 backdrop-blur-sm"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center z-50">
              <span className={`font-bold text-xl transition-colors ${
                isScrolled || isMobileMenuOpen ? "text-gray-900" : "md:text-white text-gray-900"
              }`}>
                Indo Cipanas Bonsai
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`${
                      isScrolled ? "text-gray-600" : "text-white"
                    } hover:text-green-500 transition-colors`}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`${
                      isScrolled ? "text-gray-600" : "text-white"
                    } hover:text-green-500 transition-colors`}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-lg ${
                  isScrolled
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-white text-gray-900 hover:bg-gray-100"
                } transition-colors`}
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMobileMenuClick}
              className="md:hidden z-50 p-2 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-gray-900"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white transition-opacity duration-300 md:hidden ${
            isMobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
          style={{ zIndex: 40 }}
        >
          <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-4">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xl font-medium text-gray-900 hover:text-green-600 transition-colors"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-xl font-medium text-gray-900 hover:text-green-600 transition-colors"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link
              to="/contact"
              className="w-full max-w-xs px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Overlay backdrop for mobile menu */}
      <div
        className={`fixed inset-0 bg-black/50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ zIndex: 30 }}
        onClick={closeMobileMenu}
      />
    </>
  );
};

export default Navigation;
