"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";

const VideoCard = ({ video, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      className="relative group cursor-pointer"
      onClick={() => window.open(video.url, '_blank')}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-white fill-current" />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
          <p className="text-sm opacity-90">{video.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const YouTube = () => {
  const videos = [
    {
      id: 1,
      title: "Eta-1 Greater Noida Sector",
      description: "Luxury Plots available for sale in near pari chowk",
      thumbnail: "/yt-1.png",
      url: "https://www.youtube.com/watch?v=LNMheB_eQfM"
    },
    {
      id: 2,
      title: "Delta-2 Greater Noida",
      description: "near pari chowk , greater noida authority",
      thumbnail: "/yt-2.png",
      url: "https://www.youtube.com/watch?v=RSDjaHk_iWs"
    },
    {
      id: 3,
      title: "Swarn Nagri ",
      description: "Greater Noida Luxury Plots available for sale",
      thumbnail: "/yt-3.png",
      url: "https://www.youtube.com/watch?v=JKz6sugmy8Q"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Watch Our Latest Videos</h2>
          <p className="text-[14px] md:text-[1rem] text-gray-600 max-w-2xl mx-auto">
            Get insights into our properties and success stories through our video content
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              delay={index * 0.2}
            />
          ))}
        </div>
        <div className="text-center pt-16">
          <Link href={"https://youtube.com/@yamunaexpresswaydevelopment?si=IZq0lfjn4tugWtLT"}
          target="_blank"
          className="underline text-gray-500 hover:text-gray-900"
          >more videos..</Link>
        </div>
      </div>
    </section>
  );
};

export default YouTube;