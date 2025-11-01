"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gray-900 text-white py-16 text-center md:text-left">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <h1 className="text-xl  mb-6">25 years of excellence in real estate. </h1>
                <p className="text-gray-300">
                  Your trusted real estate consultancy for buying, selling, renting, and investing in properties across Greater Noida, Yamuna Expressway, and Gurgaon.
                </p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <div>
              <h1 className="text-xl font-semibold mb-6">Opening timings</h1>
              <p>
                Mon - Sat 8:00 - 17:30,
                <br/>
                Sunday - Open
              </p>
            </div>
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6">We Provide</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/jaypee-sports-city" className="text-gray-300 hover:text-white transition-colors">
                    Jaypee Sports City
                  </a>
                </li>
                <li>
                  <a href="/greater-noida-maps" className="text-gray-300 hover:text-white transition-colors">
                    Greater Noida Projects
                  </a>
                </li>
                <li>
                  <a href="/yeida-maps" className="text-gray-300 hover:text-white transition-colors">
                    Yeida Projects
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  📧 realtyedition@gmail.com
                </p>
                <p className="text-gray-300">
                  📞 +91 9761118300
                </p>
                <p className="text-gray-300">
                  📍 F-50 suntwilight commercial complex, near delta metro station, Greater Noida, 201310
                </p>
              </div>
              
              <div className="flex space-x-4 mt-6">
                {/* <a
                  href="#"
                  className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a> */}
                <Link
                  href="https://youtube.com/@yamunaexpresswaydevelopment?si=IZq0lfjn4tugWtLT"
                  target="_blank"
                  className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-gray-700 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-center md:text-left">
                Copyright © {currentYear}  All rights reserved. ~Developed by HS Technologies!
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </>
  );
};

export default Footer;