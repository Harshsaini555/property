"use client";

import { useState } from "react";

interface CalculationResults {
  groundCoverage: string;
  groundCoverageArea: string;
  farArea: string;
  minConstructionArea: string;
  minConstructionSqFt: string;
  halfGroundCoverage: string;
}

const ConstructionCalculator = () => {
  const [plotArea, setPlotArea] = useState("");
  const [results, setResults] = useState<CalculationResults | null>(null);

  const calculateValues = () => {
    const area = parseFloat(plotArea);
    if (!area) return;

    let groundCoverage, far, minConstructionPercent;
    
    if (area <= 300) {
      groundCoverage = 0.75;
      far = 1.8;
      minConstructionPercent = 20.80;
    } else if (area <= 500) {
      groundCoverage = 0.65;
      far = 1.8;
      minConstructionPercent = 18.05;
    } else if (area <= 1000) {
      groundCoverage = 0.55;
      far = 1.5;
      minConstructionPercent = 18.33;
    } else if (area <= 2000) {
      groundCoverage = 0.45;
      far = 1.5;
      minConstructionPercent = 15.00;
    } else {
      groundCoverage = 0.40;
      far = 1.0;
      minConstructionPercent = 20.00;
    }

    const groundCoverageArea = area * groundCoverage;
    const farArea = area * far;
    const minConstructionArea = farArea * (minConstructionPercent / 100);
    const minConstructionSqFt = minConstructionArea * 10.764;
    const halfGroundCoverage = groundCoverageArea / 2;

    setResults({
      groundCoverage: (groundCoverage * 100).toFixed(0),
      groundCoverageArea: groundCoverageArea.toFixed(2),
      farArea: farArea.toFixed(2),
      minConstructionArea: minConstructionArea.toFixed(2),
      minConstructionSqFt: minConstructionSqFt.toFixed(3),
      halfGroundCoverage: halfGroundCoverage.toFixed(2)
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Plot Area (Sq Mtr)
          </label>
          <input
            type="number"
            value={plotArea}
            onChange={(e) => setPlotArea(e.target.value)}
            placeholder="Enter plot area"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none"
          />
        </div>
        <div className="flex items-end">
          <button
            onClick={calculateValues}
            className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Calculate
          </button>
        </div>
      </div>

      {results && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">Ground Coverage</h4>
            <p className="text-2xl font-bold text-amber-600">{results.groundCoverage}%</p>
            <p className="text-sm text-gray-600">{results.groundCoverageArea} Sq Mtr</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Floor Area Ratio</h4>
            <p className="text-2xl font-bold text-blue-600">{results.farArea} Sq Mtr</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Min Construction</h4>
            <p className="text-2xl font-bold text-green-600">{results.minConstructionArea} Sq Mtr</p>
            <p className="text-sm text-gray-600">{results.minConstructionSqFt} Sq Ft</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2">50% Ground Coverage</h4>
            <p className="text-2xl font-bold text-purple-600">{results.halfGroundCoverage} Sq Mtr</p>
          </div>
        </div>
      )}
    </div>
  );
};

const ConstructionContent = () => {
  const floorAreaData = [
    ["Plot Area (Sq Mtr)", "Ground Coverage", "Ground Coverage (Sq Mtr)", "Floor Area Ratio (FAR)", "Floor Area Ratio (Sq Mtr)", "Min Construction (% of FAR)", "Min Construction (Sq Mtr)", "APPOX (Sq Mtr)", "Min Construction (Sq Ft)", "APPOX (Sq Ft)"],
    ["300", "75%", "300 x 75% = 225", "180", "300 x 1.8 = 540", "20.80", "540 x 20.80% = 112.32", "112.50", "1209.002", "1210.00"],
    ["500", "65%", "500 x 65% = 325", "180", "500 x 1.8 = 900", "18.05", "900 x 18.05% = 162.45", "162.50", "1748.597", "1749.00"],
    ["1000", "55%", "1000 x 55% = 550", "150", "1000 x 1.5 = 1500", "18.33", "1500 x 18.33% = 274.95", "275.00", "2959.537", "2960.00"],
    ["2000", "45%", "2000 x 45% = 900", "150", "2000 x 1.5 = 3000", "15.00", "3000 x 15.00% = 450.00", "450.00", "4843.760", "4844.00"],
    ["4000", "40%", "4000 x 40% = 1600", "100", "4000 x 1.0 = 4000", "20.00", "4000 x 20.00% = 800.00", "800.00", "8611.128", "8612.00"]
  ];

  const groundCoverageData = [
    ["Plot Area (Sq Mtr)", "Ground Coverage", "Ground Coverage (Sq Mtr)", "50% of Ground Coverage (Sq Mtr)", "Min Construction (Sq Ft)", "APPOX (Sq Ft)"],
    ["300", "75%", "300 x 75% = 225", "112.50", "1209.002", "1210.00"],
    ["500", "65%", "500 x 65% = 325", "162.50", "1748.597", "1749.00"],
    ["1000", "55%", "1000 x 55% = 550", "275.00", "2959.537", "2960.00"],
    ["2000", "45%", "2000 x 45% = 900", "450.00", "4843.760", "4844.00"],
    ["4000", "40%", "4000 x 40% = 1600", "800.00", "8611.128", "8612.00"]
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className=" bg-white">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Construction Site"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl  "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6" >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight" style={{fontFamily: 'Caveat'}}>
                Building Dreams into{" "}
                <span className="text-transparent bg-clip-text bg-red-500">
                  Reality
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed" >
                Trusted Construction Experts for 25+ Years
              </p>
              <p className="text-lg text-gray-500 leading-relaxed" >
                Edition Realty redefines real estate consultancy across Greater Noida, the Yamuna Expressway corridor, and Gurgaon. Our expertise spans property sales, purchases, rentals, leases, and valuations — all backed by strategic investment guidance and seamless documentation.
             </p>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">100%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Title */}
      <section className="pt-20 mt-10 mb-8 bg-white">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Construction Calculation & Project Details
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Section A - Floor Area Ratio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              A. Calculation Details (As per Floor Area Ratio)
            </h3>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white text-black">
                    {floorAreaData[0].map((header, index) => (
                      <th key={index} className="px-4 py-12 text-left font-semibold text-sm whitespace-nowrap">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {floorAreaData.slice(1).map((row, rowIndex) => (
                    <tr 
                      key={rowIndex}
                    >
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className={`px-4 py-4 text-sm text-gray-700 whitespace-nowrap border-b border-gray-100 ${[0, 1, 7, 9].includes(cellIndex) ? 'font-bold' : ''}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section B - Ground Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              B. Calculation Details (As per Ground Coverage)
            </h3>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white text-black">
                    {groundCoverageData[0].map((header, index) => (
                      <th key={index} className="px-6 py-10 text-left font-semibold text-sm whitespace-nowrap">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {groundCoverageData.slice(1).map((row, rowIndex) => (
                    <tr 
                      key={rowIndex} 
                    >
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className={`px-6 py-4 text-sm text-black whitespace-nowrap border-b border-gray-100 ${[0, 1, 3, 5].includes(cellIndex) ? 'font-bold' : ''}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Construction Calculator
            </h3>
          </div>
          
          <div className="  p-8   max-w-4xl mx-auto">
            <ConstructionCalculator />
          </div>
        </div>
      </section>

    </div>
  );
};

export default ConstructionContent;