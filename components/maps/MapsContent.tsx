"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, X, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import React, { useState, useEffect } from "react";
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

const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [selectedMap, setSelectedMap] = useState<MapData | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [imageScale, setImageScale] = useState(1);

  useEffect(() => {
    if (selectedMap) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [selectedMap]);

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
    <div className="py-12 mt-10">
      {/* Simple Header */}
      <section className=" bg-white border-b">
        <div className="relative w-screen h-[16rem] flex justify-center items-center overflow-hidden">
          {/* Blurred background image */}
          <div
            className="absolute inset-0 bg-cover bg-center blur-sm"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
            }}
          ></div>


          {/* Text stays crisp and visible */}
          <h1 className="relative text-4xl md:text-6xl font-semibold text-white z-10" style={{fontFamily: 'Caveat'}}>
            {heading}
          </h1>
        </div>

        <div className="container mx-auto  px-4 py-4">
          
          
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
      {/* Background overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={() => setSelectedMap(null)}
      />

      {/* Map modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 ">
        <div className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[60vh] md:max-h-[90vh] overflow-auto">
          
          {/* Header */}
          <div className="sticky top-0 bg-white border-b px-6 py-3 flex items-center justify-between z-10">
            <h2 className="md:text-xl text-[0.9rem] font-semibold text-gray-900">
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
                onClick={() => setSelectedMap(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Close"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Map Container */}
          <div
            className="relative flex items-center justify-center bg-gray-100 overflow-hidden touch-none md:h-[70vh] h-[45vh]"
          >
            <div
              className="cursor-grab active:cursor-grabbing transition-transform duration-150 ease-out"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${imageScale})`,
                transformOrigin: "center center",
              }}
              onMouseDown={(e) => {
                e.preventDefault();
                const startX = e.clientX - offset.x;
                const startY = e.clientY - offset.y;

                const handleMouseMove = (e: MouseEvent) => {
                  setOffset({ x: e.clientX - startX, y: e.clientY - startY });
                };

                const handleMouseUp = () => {
                  window.removeEventListener("mousemove", handleMouseMove);
                  window.removeEventListener("mouseup", handleMouseUp);
                };

                window.addEventListener("mousemove", handleMouseMove);
                window.addEventListener("mouseup", handleMouseUp);
              }}
              onTouchStart={(e) => {
                if (e.touches.length === 1) {
                  // Single finger drag
                  const startX = e.touches[0].clientX - offset.x;
                  const startY = e.touches[0].clientY - offset.y;

                  const handleTouchMove = (e: TouchEvent) => {
                    if (e.touches.length === 1) {
                      setOffset({
                        x: e.touches[0].clientX - startX,
                        y: e.touches[0].clientY - startY,
                      });
                    }
                  };

                  const handleTouchEnd = () => {
                    window.removeEventListener("touchmove", handleTouchMove);
                    window.removeEventListener("touchend", handleTouchEnd);
                  };

                  window.addEventListener("touchmove", handleTouchMove);
                  window.addEventListener("touchend", handleTouchEnd);
                } else if (e.touches.length === 2) {
                  // Pinch zoom
                  const dist = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                  );
                  let initialDist = dist;
                  const handlePinch = (e: TouchEvent) => {
                    if (e.touches.length === 2) {
                      const newDist = Math.hypot(
                        e.touches[0].clientX - e.touches[1].clientX,
                        e.touches[0].clientY - e.touches[1].clientY
                      );
                      const zoomFactor = newDist / initialDist;
                      setImageScale((prev) =>
                        Math.min(Math.max(prev * zoomFactor, 0.5), 3)
                      );
                      initialDist = newDist;
                    }
                  };

                  const handlePinchEnd = () => {
                    window.removeEventListener("touchmove", handlePinch);
                    window.removeEventListener("touchend", handlePinchEnd);
                  };

                  window.addEventListener("touchmove", handlePinch);
                  window.addEventListener("touchend", handlePinchEnd);
                }
              }}
            >
              <Image
                width={800}
                height={600}
                src={selectedMap.src}
                alt={selectedMap.name || "Map"}
                className="object-contain select-none"
                draggable={false}
              />
            </div>
          </div>

          {/* Footer buttons */}
          <div className="p-4 border-t flex justify-end">
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = selectedMap.src;
                link.download = `${selectedMap.name || selectedMap.title || "map"}.jpg`;
                link.click();
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download
            </button>
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
