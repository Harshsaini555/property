"use client";

import Link from "next/link";

const MapCards = () => {
  const mapCards = [
    {
      id: 1,
      name: "Greater Noida",
      image: "/greater-noida/1.jpg",
      link: "/greater-noida-maps"
    },
    {
      id: 2,
      name: "YEIDA",
      image: "/yeida-maps/0.jpg",
      link: "/yeida-maps"
    },
    {
      id: 3,
      name: "Jaypee Sports City",
      image: "/jaypee-sports-city/7.jpg",
      link: "/jaypee-sports-city"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Explore <span className="text-[#0F828C]">Location Maps</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">Browse detailed maps of prime locations</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {mapCards.map((card) => (
            <div key={card.id} className="bg-[#dff2f7] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-4 sm:p-5 lg:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">{card.name}</h3>
                <div className="mb-4 sm:mb-6">
                  <img 
                    src={card.image} 
                    alt={card.name}
                    className="w-full h-40 sm:h-44 lg:h-48 object-cover rounded-lg hover:scale-105 transition-transform"
                  />
                </div>
                <Link 
                  href={card.link}
                  className="inline-block bg-[#0F828C] text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 text-sm sm:text-base rounded-lg hover:bg-[#0d6b73] transition-colors w-full sm:w-auto"
                >
                  View Maps
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapCards;