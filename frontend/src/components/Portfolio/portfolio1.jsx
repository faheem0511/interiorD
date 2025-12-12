"use client";
import { useState } from "react";

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    "All",
    "Bedroom",
    "Kitchen",
    "Living Room",
    "Dining Room",
    "Bathroom",
    "Office",
  ];

  // Static portfolio items with high-quality Unsplash images
  const portfolioItems = [
    {
      id: 1,
      title: "Modern Coastal Living Room",
      category: "Living Room",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      description: "A bright and airy living space with coastal-inspired decor and natural textures."
    },
    {
      id: 2,
      title: "Elegant Master Bedroom",
      category: "Bedroom",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      description: "Luxurious master bedroom featuring plush bedding and sophisticated color palette."
    },
    {
      id: 3,
      title: "Contemporary Kitchen Design",
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
      description: "Sleek modern kitchen with state-of-the-art appliances and marble countertops."
    },
    {
      id: 4,
      title: "Sophisticated Dining Room",
      category: "Dining Room",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      description: "Elegant dining space perfect for entertaining with timeless design elements."
    },
    {
      id: 5,
      title: "Luxurious Master Bathroom",
      category: "Bathroom",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      description: "Spa-like bathroom retreat with premium finishes and tranquil ambiance."
    },
    {
      id: 6,
      title: "Minimalist Home Office",
      category: "Office",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      description: "Clean and productive workspace designed for focus and creativity."
    },
    {
      id: 7,
      title: "Warm Transitional Living Room",
      category: "Living Room",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80",
      description: "Inviting living room blending traditional comfort with contemporary style."
    },
    {
      id: 8,
      title: "Serene Bedroom Retreat",
      category: "Bedroom",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      description: "Peaceful bedroom sanctuary with soft textures and calming neutral tones."
    },
    {
      id: 9,
      title: "Gourmet Chef's Kitchen",
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
      description: "Professional-grade kitchen designed for culinary excellence and style."
    },
    {
      id: 10,
      title: "Formal Dining Space",
      category: "Dining Room",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      description: "Refined dining area featuring statement lighting and classic elegance."
    },
    {
      id: 11,
      title: "Spa-Inspired Bathroom",
      category: "Bathroom",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
      description: "Luxurious bathroom with natural stone and sophisticated fixtures."
    },
    {
      id: 12,
      title: "Executive Office Suite",
      category: "Office",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      description: "Professional office space combining functionality with executive style."
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
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
                key={item.id}
                onClick={() => setSelectedItem(item)}
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
                  src={item.image}
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

      {/* Modal Popup */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-4 py-2 bg-[#846A4D] text-white text-sm font-semibold rounded-full shadow-lg">
                    {selectedItem.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {selectedItem.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-[#846A4D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Professional Design Service</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-[#846A4D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom Furniture Selection</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-[#846A4D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>3D Visualization Included</span>
                  </div>
                </div>

                <button className="mt-8 bg-[#846A4D] hover:bg-[#66310CDA] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
        
      )}


    </>
  );
}