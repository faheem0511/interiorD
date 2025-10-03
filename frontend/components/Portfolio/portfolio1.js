"use client";
import { useState, useEffect } from "react";

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [portfolioItems, setPortfolioItems] = useState([]);

  const categories = [
    "All",
    "Bedroom",
    "Kitchen",
    "Living Room",
    "Dining Room",
    "Bathroom",
    "Office",
  ];

  // Fetch portfolio items from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/portfolio")
      .then((res) => res.json())
      .then((data) => setPortfolioItems(data));
  }, []);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#F7F2EC] to-white py-20 md:py-28 px-6 md:px-16">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#846A4D]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-[#66310CDA]/5 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <div className="inline-block mb-4">
          <span className="text-[#846A4D] text-sm font-semibold tracking-widest uppercase">
            Our Work
          </span>
          <div className="h-0.5 w-16 bg-[#846A4D] mt-2"></div>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 font-serif">
          Design Portfolio
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
          Discover inspiring spaces crafted by our talented designers. Each
          project tells a unique story of transformation and style.
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-7 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#846A4D] text-white shadow-xl shadow-[#846A4D]/20 scale-105"
                  : "bg-white text-gray-700 hover:bg-[#F7F2EC] border border-gray-200 hover:border-[#846A4D]/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredItems.map((item, index) => (
            <div
              key={item._id}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer bg-gradient-to-br from-[#F7F2EC] to-white aspect-[3/4]"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#846A4D]/20 via-[#66310CDA]/10 to-[#F7F2EC]" />

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#846A4D]/20 to-transparent rounded-bl-full"></div>

              {/* Image overlay with smooth transition */}
              <img
                src={`http://localhost:5000${item.image}`}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-3xl"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="backdrop-blur-md bg-white/95 rounded-2xl p-5 shadow-2xl border border-white/20">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-[#846A4D]/10 text-[#846A4D] text-xs font-semibold rounded-full mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Hover action */}
                  <div className="flex items-center text-[#846A4D] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-3">
                    <span>View Project</span>
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover icon - top right */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl">
                  <svg
                    className="w-5 h-5 text-[#846A4D]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
