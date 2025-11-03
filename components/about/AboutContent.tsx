"use client";

import Services from "@/components/landing/Services";
import Agents from "@/components/landing/Agents";

const AboutContent = () => {
  return (
    <div className="pt-32">
      {/* Hero Section with Blurred Background */}
      <section className="relative bottom-10  h-80 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
      }}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-6xl md:text-8xl font-bold text-white text-center" style={{fontFamily: 'Caveat'}}>
            About Us
          </h1>
        </div>
      </section>

      {/* Text Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side Text */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-[14px] md:text-[1rem]   text-gray-600 leading-relaxed" >
                Edition Realty redefines real estate consultancy across Greater Noida, the Yamuna Expressway corridor, and Gurgaon. With over 25 years of undefeated success, we have established ourselves as the most trusted name in luxury real estate.
              </p>
              <p className="text-[14px] md:text-[1rem]  text-gray-600 leading-relaxed" >
                Our expertise spans property sales, purchases, rentals, leases, and valuations — all backed by strategic investment guidance and seamless documentation. We believe in building dreams into reality through exceptional service and unwavering commitment to excellence.
              </p>
            </div>

            {/* Right Side Text */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-[14px] md:text-[1rem]  text-gray-600 leading-relaxed" >
                To provide unparalleled real estate services that exceed client expectations while maintaining the highest standards of integrity, professionalism, and innovation in every transaction.
              </p>
              <p className="text-[14px] md:text-[1rem]  text-gray-600 leading-relaxed" >
                We are committed to helping individuals and families find their perfect homes while ensuring investors make informed decisions that yield maximum returns. Our personalized approach ensures every client receives dedicated attention and expert guidance.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-blue-800 font-semibold italic text-[14px] md:text-[1rem] " >
                  "Your dream home is not just a destination, it's a journey we take together."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <Services />

      {/* Our Agents Section */}
      <Agents />

      {/* Contact Us Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 lg:px-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-[14px] md:text-[1rem]  text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team today and let us help you make your real estate dreams a reality.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;