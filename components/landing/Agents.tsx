"use client";

import { motion } from "framer-motion";
import { Linkedin, MessageCircle, Mail } from "lucide-react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const AgentCard = ({ agent, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all text-center group"
    >
      <div className="relative mb-6">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full"></div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{agent.name}</h3>
      <p className="text-blue-600 font-medium mb-4">{agent.title}</p>
      <p className="text-gray-600 mb-6">{agent.description}</p>
      
      <div className="flex justify-center space-x-4">
        <a
          href={agent.linkedin}
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href={agent.whatsapp}
          className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
        <a
          href={agent.email}
          className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
};

const Agents = () => {
   const agents = [
    {
      quote:
        "25+ years of experience in luxury real estate with exceptional client satisfaction.",
      name: "Mr. Ajesh",
      designation: "Head of Property Consultant",
      src: "/Ajesh.jpeg",
    },
    {
      quote:
        "Expert in property investment strategies and market analysis for maximum returns",
      name: "Mr. Dinesh Khtana",
      designation: "Marketing Executive",
      src: "/Dinesh.jpeg",
    },
    {
      quote:
        "Specializes in high-end residential properties and personalized client service.",
      name: "Mr. Vaaren Kapasiya",
      designation: "Marketing Executive",
      src: "/Vaaren.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Agents</h2>
          <p className="text-[14px] md:text-[1rem] text-gray-600 max-w-2xl mx-auto">
            Our experienced team of professionals is here to guide you through your real estate journey
          </p>
        </motion.div>
        
        <AnimatedTestimonials testimonials={agents} />
      </div>
    </section>
  );
};

export default Agents;