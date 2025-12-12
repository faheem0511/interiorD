  // pages/portfolio.js
 "use client";
  import Head from "next/head";
  import dynamic from "next/dynamic";
  import { motion } from "framer-motion";
        
  const ReactCompareImage = dynamic(() => import("react-compare-image"), {
    ssr: false,
  });

  export default function Portfolio() {
    return (
      <>
    <section className="hero-section relative h-screen bg-center bg-cover overflow-hidden" style={{ backgroundImage: "url('/h3.jpg')" }}>
    {/* Base dark overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    
    {/* Simple window light beams aligned with 3 windows */}
    <div className="absolute inset-0">
      {/* Left window light */}
      <div className="absolute top-0 left-[15%] w-[20%] h-[40%] bg-gradient-to-b from-white/40 via-white/20 to-transparent blur-sm"></div>
      
      {/* Center window light */}
      <div className="absolute top-0 left-[40%] w-[20%] h-[40%] bg-gradient-to-b from-white/40 via-white/20 to-transparent blur-sm"></div>
      
      {/* Right window light */}
      <div className="absolute top-0 right-[25%] w-[15%] h-[45%] bg-gradient-to-b from-white/40 via-white/20 to-transparent blur-sm"></div>
    </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-serif">
              Interior Design Ideas & Transformations
            </h1>
            <p className="text-lg text-gray-800 mb-6">
              Browse our curated selection of beautifully transformed rooms with stunning before & after makeovers.
            </p>
            <button className="bg-[#846A4D] text-white px-6 py-3 rounded-2xl shadow-lg transition duration-300">
              Start Your Project
            </button>
        
        </div>
      </section>

        {/* Before/After Showcase */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              See the Difference
            </motion.h2>

            <motion.div
              className="rounded-xl shadow-lg overflow-hidden mb-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <ReactCompareImage
                leftImage="/h1.jpg"
                rightImage="/h3.jpg"
                sliderPositionPercentage={0.5}
                leftImageLabel="Before"
                rightImageLabel="After"
              />
            </motion.div>

            <div className="text-center">
              <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition">
                View Full Design Details
              </button>
            </div>
          </div>
        </section>

        {/* More Designs (Optional) */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8 text-gray-800 text-center">
              More Stunning Transformations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="shadow-xl rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <ReactCompareImage
                    leftImage={"p1.jpg"}
                    rightImage={"p2.jpg"}
                    sliderPositionPercentage={0.5}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    
      </>
    );
  }
