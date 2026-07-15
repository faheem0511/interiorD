"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer";

export default function PortfolioGallery() {

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DATA ================= */
  useEffect(() => {

    const fetchPortfolio = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/portfolio`,
        );

        setPortfolioItems(res.data);
        setLoading(false);

      } catch (err) {
        console.error("Portfolio Fetch Error:", err);
        setLoading(false);
      }
    };

    fetchPortfolio();

  }, []);

  const getImageUrl = (image) => {
    if (!image) return "";

    if (image.startsWith("http")) {
      return image;
    }

    return `${process.env.NEXT_PUBLIC_API_URL}${image}`;
  };
  /* ================= CATEGORIES ================= */

  const categories = [
    "All",
    ...new Set(portfolioItems.map((item) => item.category)),
  ];

  /* ================= FILTER ================= */

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(
        (item) => item.category === activeCategory
      );

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <div className="py-40 text-center text-xl font-semibold text-gray-600">
        Loading Portfolio...
      </div>
    );
  }

  return (
    <>

      {/* ================= SECTION ================= */}
      <section className="relative w-full bg-gradient-to-b from-[#F7F2EC] to-white py-20 md:py-28 px-6 md:px-16">

        {/* Decorative */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#846A4D]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-[#66310CDA]/5 rounded-full blur-3xl"></div>

        {/* ================= HEADER ================= */}
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
            Discover inspiring spaces crafted by our talented designers.
          </p>

        </div>

        {/* ================= FILTER ================= */}
        <div className="max-w-7xl mx-auto mb-16 relative z-10">

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-7 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${activeCategory === category
                  ? "bg-[#846A4D] text-white shadow-xl scale-105"
                  : "bg-white text-gray-700 hover:bg-[#F7F2EC] border cursor-pointer border-gray-300 hover:border-[#846A4D] hover:text-[#846A4D]"
                  }`}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

        {/* ================= GRID ================= */}
        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

            {filteredItems.map((item, index) => (

              <div
                key={item._id}
                onClick={() => setSelectedItem(item)}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer bg-gradient-to-br from-[#F7F2EC] to-white aspect-[3/4]"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >

                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#846A4D]/20 via-[#66310CDA]/10 to-[#F7F2EC]" />

                {/* Image */}
                <img
                  src={getImageUrl(item.image)}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-3xl"
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">

                  <div className="backdrop-blur-md bg-white/95 rounded-2xl p-5 shadow-2xl">

                    <span className="inline-block px-3 py-1 bg-[#846A4D]/10 text-[#846A4D] text-xs font-semibold rounded-full mb-2">
                      {item.category}
                    </span>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <div className="flex items-center text-[#846A4D] font-medium text-sm mt-3">
                      View Project →
                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* ================= ANIMATION ================= */}
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

      {/* ================= MODAL ================= */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedItem(null)} >
          <div className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()} >
            {/* Close Button */}
            <button onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110" >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg> </button> <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 md:h-auto">
                <img src={getImageUrl(selectedItem.image)} alt={selectedItem.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-4 py-2 bg-transparent text-white text-sm font-semibold rounded-full shadow-md backdrop-blur-sm">
                    {selectedItem.category}
                  </span>
                </div>
              </div>
              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
                  {selectedItem.title} </h3> <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {selectedItem.description} </p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-[#846A4D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg> <span>Professional Design Service</span> </div> <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-[#846A4D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg> <span>Custom Furniture Selection</span> </div> <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-[#846A4D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg> <span>3D Visualization Included</span> </div>
                </div>
                <button className="mt-8 bg-[#846A4D] hover:bg-[#66310CDA] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"> Start Your Project
                </button> </div>
            </div>
          </div>
        </div>)}
      <Footer />
    </>
  );
}