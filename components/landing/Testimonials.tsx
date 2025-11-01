"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialCard = ({ testimonial }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        
        <div className="flex-1 text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <p className="text-gray-600 text-lg mb-6 italic">
            "{testimonial.review}"
          </p>
          
          <div>
            <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-blue-600">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Noida Sector 62",
      rating: 5,
      review: "Exceptional service! They helped us find our dream home within our budget. The team was professional, responsive, and truly understood our needs.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Greater Noida West",
      rating: 5,
      review: "Outstanding experience from start to finish. Their market knowledge and negotiation skills saved us both time and money. Highly recommended!",
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Yeida City",
      rating: 5,
      review: "Professional, reliable, and trustworthy. They made the entire property buying process smooth and stress-free. Thank you for the excellent service!",
    },
    {
      id: 4,
      name: "Sunita Gupta",
      location: "Noida Extension",
      rating: 5,
      review: "Amazing team with deep market insights. They guided us through every step and helped us make the right investment decision. Truly grateful!",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white ">
      <div className="container mx-auto text-[14px] md:text-[1rem] px-4">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className=" text-gray-600 max-w-2xl mx-auto">
            Real experiences from real people who found their dream homes with us
          </p>
        </div>

        <div className="relative">
          <TestimonialCard testimonial={testimonials[currentIndex]} />
          
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;