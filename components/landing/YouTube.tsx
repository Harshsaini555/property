"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

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
      title: "Luxury Villa Tour - Noida Extension",
      description: "Take a virtual tour of our premium villa project",
      thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "https://youtube.com"
    },
    {
      id: 2,
      title: "Investment Opportunities 2024",
      description: "Discover the best investment opportunities in real estate",
      thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "https://youtube.com"
    },
    {
      id: 3,
      title: "Client Success Stories",
      description: "Hear from our satisfied clients about their experience",
      thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "https://youtube.com"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Watch Our Latest Videos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
      </div>
    </section>
  );
};

export default YouTube;