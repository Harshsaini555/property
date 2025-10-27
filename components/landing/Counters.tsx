"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Home, Building, MapPin } from "lucide-react";

const CounterCard = ({ icon: Icon, number, label, delay }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = number / 100;
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= number) {
            clearInterval(interval);
            return number;
          }
          return Math.min(prev + increment, number);
        });
      }, 20);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [number, delay]);

  return (
    <div
      className="bg-white rounded-2xl p-4  transition-all text-center group hover:scale-105"
    >
      <h3 className="text-3xl font-bold text-gray-900 mb-2">
        {Math.floor(count).toLocaleString()}+
      </h3>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
};

const Counters = () => {
  const stats = [
    { icon: Home, number: 3000, label: "Happy Clients" },
    { icon: Building, number: 2800, label: "Apartments" },
    { icon: Home, number: 2500, label: "Houses & Villas" },
    { icon: MapPin, number: 4500, label: "Other Properties" },
  ];

  return (
    <section className="py-17 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <CounterCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counters;