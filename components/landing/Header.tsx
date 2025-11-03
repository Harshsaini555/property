"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`absolute top-12 left-0 right-0 z-50  ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-auto  flex items-center justify-between">
        <div className="flex items-center">
          <img src="/property_logo.png"  className="h-28 w-auto" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-600 transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          
          <div className="relative" onMouseEnter={() => setIsMapOpen(true)}
                onMouseLeave={() => setIsMapOpen(false)}>
             <button
                className={`text-gray-800 transition-colors flex items-center gap-1 relative group ${
                  isMapOpen ? "text-blue-600" : "hover:text-blue-600"
                }`}
              >
              Map
              <ChevronDown className="w-4 h-4" />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </button>
            {isMapOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0  bg-white rounded-lg shadow-lg py-2 min-w-[200px]"
              >
                
                <Link href="/greater-noida-maps" onClick={() => setIsMapOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Greater Noida Maps
                </Link>
                <Link href="/yeida-maps" onClick={() => setIsMapOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Yeida Maps
                </Link>
                <Link href="/jaypee-sports-city" onClick={() => setIsMapOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Jaypee Sports City
                </Link>
              </motion.div>
            )}
          </div>
          
          <Link href="/contact" className="text-gray-800 hover:text-blue-600 transition-colors relative group">
            Contact Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/construction" className="text-gray-800 hover:text-blue-600 transition-colors relative group">
            Construction
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-800 hover:text-blue-600 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link href="/"  className="block text-gray-800 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about"  className="block text-gray-800 hover:text-blue-600 transition-colors">
              About
            </Link>
            <div>
              <button
                onClick={() => setIsMapOpen(!isMapOpen)}
                className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition-colors"
              >
                Map
                <ChevronDown className="w-4 h-4" />
              </button>
              {isMapOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link 
                    href="/greater-noida-maps" 
                    onClick={() => { setIsMapOpen(false);}} 
                    className="block text-gray-600 hover:text-blue-600 py-3 px-2 cursor-pointer touch-manipulation"
                  >
                    Greater Noida Maps
                  </Link>
                  <Link 
                    href="/yeida-maps" 
                    onClick={() => { setIsMapOpen(false);}} 
                    className="block text-gray-600 hover:text-blue-600 py-3 px-2 cursor-pointer touch-manipulation"
                  >
                    Yeida Maps
                  </Link>
                  <Link 
                    href="/jaypee-sports-city" 
                    onClick={() => { setIsMapOpen(false);}} 
                    className="block text-gray-600 hover:text-blue-600 py-3 px-2 cursor-pointer touch-manipulation"
                  >
                    Jaypee Sports City
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contact"  className="block text-gray-800 hover:text-blue-600 transition-colors">
              Contact Us
            </Link>
            <Link href="/construction" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-800 hover:text-blue-600 transition-colors">
              Construction
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;