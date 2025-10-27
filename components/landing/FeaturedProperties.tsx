"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Home } from "lucide-react";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";


const FeaturedProperties = () => {
  const testimonials = [
    {
      id: 1,
      title: "Luxury Villa",
      name: "Luxury Villa",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      size: "2500 sq ft",
      facing: "North Facing",
      price: "₹2.5 Cr"
    },
    {
      id: 2,
      title: "Modern Apartment",
      name: "Modern Apartment",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      size: "1800 sq ft",
      facing: "East Facing",
      price: "₹1.8 Cr"
    },
    {
      id: 3,
      title: "Penthouse Suite",
      name: "Penthouse Suite",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      size: "3200 sq ft",
      facing: "South Facing",
      price: "₹4.2 Cr"
    },
    {
      id: 4,
      title: "Garden Villa",
      name: "Garden Villa",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      size: "2800 sq ft",
      facing: "West Facing",
      price: "₹3.1 Cr"
    },
    {
      id: 5,
      title: "Sky Apartment",
      name: "Sky Apartment",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      size: "2200 sq ft",
      facing: "North-East Facing",
      price: "₹2.8 Cr"
    }
  ];



  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-xl text-gray-600">Discover our premium property collection</p>
        </div>

        <div className="flex overflow-hidden">
          
           <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
      
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;