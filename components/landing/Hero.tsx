"use client";

import { Building, Target, Home, MessageCircle, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="home" className="bg-white px-8 py-4 pt-32">
      {/* Welcome Heading */}
      <div className="text-center mb-16">
        <p className="text-4xl  text-gray-600 mb-2">Welcome to</p>
        <h1 className="text-5xl font-sans md:text-6xl font-semibold text-gray-900">
          Edition Realty<span className="text-orange-600">®</span>
        </h1>
      </div>

      {/* About & Mission Section */}
      <div className="container mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Modern Building"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right - About & Mission Boxes */}
          <div className="space-y-8">
            {/* About Us Box */}
            <div className="relative bg-white p-6 rounded-lg overflow-hidden">
              {/* Background grid */}
              <div
                className={cn(
                  "absolute inset-0",
                  "[background-size:40px_40px]",
                  "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                  "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )}
              />

              {/* Content */}
              <div className="relative flex items-center mb-4">
                <Building className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">About Us</h3>
              </div>

              <p className="relative text-gray-600 leading-relaxed">
                Edition Realty is a trusted real estate consultancy dedicated to helping clients buy, sell, rent, and invest in properties across Greater Noida, Yamuna Expressway, and Gurgaon. We offer expert advice, documentation support, and end-to-end solutions for all your property needs.
              </p>
            </div>

            {/* Our Mission Box */}
            <div className="relative bg-white p-6 rounded-lg overflow-hidden">
              {/* Subtle grid background */}
              <div
                className={cn(
                  "absolute inset-0 ", // make grid subtle
                  "[background-size:40px_40px]",
                  "[background-image:linear-gradient(to_right,#f2f2f2_1px,transparent_1px),linear-gradient(to_bottom,#f2f2f2_1px,transparent_1px)]",
                  "dark:[background-image:linear-gradient(to_right,#2d2d2d_1px,transparent_1px),linear-gradient(to_bottom,#2d2d2d_1px,transparent_1px)]"
                )}
              />

              {/* Foreground content */}
              <div className="relative flex items-center mb-4 z-10">
                <Target className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
              </div>

              <p className="relative text-gray-600 leading-relaxed z-10">
                Our mission is to redefine the real estate experience through transparency,
                professionalism, and innovation — turning your property goals into reality.
              </p>
            </div>

          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;