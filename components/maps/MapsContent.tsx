"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, X, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

interface MapData {
  index: number;
  name: string;
  title: string;
  src: string;
}

type MapsContentProps = {
  cards: MapData[];
  heading: string;
};

const MapsContent: React.FC<MapsContentProps> = ({ cards = [], heading }) => {
  const [selectedMap, setSelectedMap] = useState<MapData | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [imageScale, setImageScale] = useState(1);

  const filteredMaps = cards.filter(
    (map) => {
      const query = searchQuery.toLowerCase();
      return (
        (map.title?.toLowerCase().includes(query) || false) ||
        (map.name?.toLowerCase().includes(query) || false)
      );
    }
  );

  return (
    <div className="pt-32">
      {/* Simple Header */}
      <section className=" bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{heading}</h1>
            <p className="text-gray-600 text-lg">Browse available property location maps</p>
          </div>
          
          <div className="max-w-md mx-auto pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search maps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg  outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Simple Maps List */}
      <section className="py-12 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredMaps.map((map, index) => (
                <div
                  key={map.index}
                  onClick={() => setSelectedMap(map)}
                  className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {map.title  || `Map ${map.index}`}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Modal */}
      <AnimatePresence>
        {selectedMap && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setSelectedMap(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[60vh] md:max-h-[90vh] overflow-auto">
                <div className="sticky top-0 bg-white border-b px-6 py-2 md:py-4 flex items-center justify-between z-10">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {selectedMap.title || selectedMap.name || `Map ${selectedMap.index}`}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setImageScale(prev => Math.min(prev + 0.25, 3))}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors" 
                      title="Zoom In"
                    >
                      <ZoomIn className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                      onClick={() => setImageScale(prev => Math.max(prev - 0.25, 0.5))}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                      onClick={() => setIsImageZoomed(true)}
                      className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Full Size"
                    >
                      <Maximize2 className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                      onClick={() => setSelectedMap(null)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Close"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="bg-gray-100 rounded-lg overflow-auto mb-6 relative group max-h-[70vh]">
                    <div className="flex items-center justify-center min-h-[400px]">
                      <Image
                        width={800}
                        height={600}
                        alt={selectedMap.name || "Map image"}
                        src={selectedMap.src}
                        className="object-contain cursor-pointer transition-transform duration-200"  
                        style={{ transform: `scale(${imageScale})` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-row-reverse">
                    <button 
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = selectedMap.src;
                        link.download = `${selectedMap.name || selectedMap.title || 'map'}.jpg`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Full Size Image Modal */}
      <AnimatePresence>
        {isImageZoomed && selectedMap && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-[60]"
              onClick={() => setIsImageZoomed(false)}
            />
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
              <div className="relative max-w-[95vw] max-h-[95vh]">
                <button
                  onClick={() => setIsImageZoomed(false)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <Image
                  width={1200}
                  height={900}
                  alt={selectedMap.name || "Map image"}
                  src={selectedMap.src}
                  className="max-w-full max-h-full object-contain cursor-zoom-out"
                  onClick={() => setIsImageZoomed(false)}
                />
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MapsContent;
