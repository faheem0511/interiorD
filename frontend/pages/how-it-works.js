import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar"
export default function HowItWorks() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const steps = [
    {
      title: "Start with the Style Quiz",
      number: "01",
      description: "Answer a few questions about your space, preferences, and budget so we can match you with the best designers.",
      image: "/step1.jpg",
      features: ["5-minute quiz", "Style matching", "Budget planning", "Space analysis"]
    },
    {
      title: "Meet Your Designers",
      number: "02", 
      description: "You'll receive two initial design concepts from expert designers. Pick the one you love to continue collaborating.",
      image: "/step2.jpg",
      features: ["2 design concepts", "Expert designers", "Portfolio review", "Designer chat"]
    },
    {
      title: "Collaborate Online",
      number: "03",
      description: "Work 1-on-1 with your chosen designer to revise layouts, color schemes, and furniture plans until you're happy.",
      image: "/step3.jpg", 
      features: ["Real-time collaboration", "Unlimited revisions", "3D previews", "Live feedback"]
    },
    {
      title: "Bring Your Vision to Life",
      number: "04",
      description: "Receive a curated shopping list with exclusive discounts and a 3D visual plan to transform your room.",
      image: "/step4.jpg",
      features: ["Shopping list", "Exclusive discounts", "3D room plan", "Installation guide"]
    },
  ];

  return (


    <div className="min-h-screen">

      <Navbar />
      {/* Enhanced Hero Section - Original Design Preserved */}
      <section className="hero-section relative min-h-screen bg-center bg-cover overflow-hidden" style={{ backgroundImage: "url('/h1.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/10 to-black/60"></div>
        
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl pointer-events-none"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
          transition={{ type: "spring", damping: 30 }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-white text-4xl md:text-7xl italic mb-6 leading-tight"
            >
              Design, Collaborate,
              <span className="block bg-white bg-clip-text text-transparent">
                Transform
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-gray-200 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Work with our award-winning interior designers to make your dream space come true! 
              Interior design has never been so convenient, simple and fun!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#846A4D] text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
              >
                Get Started Now
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                Watch Demo
                <span className="ml-2">▶</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-semi-bold mb-6 text-gray-900">
            How It Works
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our easy 4-step interior design process saves you time and delivers
            beautiful results that exceed your expectations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {steps.map((step, index) => {
              // Layout logic: 0=left, 1=center, 2=right, 3=center
              const isCenter = index === 1 || index === 3;
              const isLeft = index === 0;
              
              return (
                <div
                  key={index}
                  className={`${isCenter ? 'flex flex-col items-center' : `flex flex-col lg:flex-row items-center gap-16 ${!isLeft ? 'lg:flex-row-reverse' : ''}`}`}
                >
                  {isCenter ? (
                    // Center Layout (Steps 2 & 4)
                    <>
                      {/* Text Section - Top */}
                      <div className="w-full max-w-4xl mb-12">
                        {/* Step Number Circle with Title */}
                        <div className="flex items-center justify-center mb-6">
                          <div className="w-20 h-20 bg-[#846A4D]/80 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg mr-4">
                            {step.number}
                          </div>
                          <h3 className="text-4xl font-semi-bold text-balck">
                            {step.title}
                          </h3>
                        </div>
                        
                        <p className="text-gray-700 text-xl leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                          {step.description}
                        </p>

                        {/* Features list */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                          {step.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-sm text-gray-700 bg-gray-50 rounded-lg px-4 py-3"
                            >
                              <div className="w-2 h-2 bg-[#846A4D] rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Image Section - Bottom - BIGGER */}
                      <div className="w-full">
                        <div className="relative overflow-hidden">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-[500px] md:h-[600px]"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    // Side Layout (Steps 1 & 3)
                    <>
                      {/* Image Section */}
                      <div className="lg:w-1/2 w-full">
                        <div className="relative rounded-3xl overflow-hidden">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-96 object-cover"
                          />
                        </div>
                      </div>

                      {/* Text Section */}
                      <div className="lg:w-1/2 w-full">
                        {/* Step Number Circle with Title */}
                        <div className="flex items-center mb-6">
                          <div className="w-20 h-20 bg-[#846A4D]/80 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                            {step.number}
                          </div>
                          <h3 className="text-4xl font-semi-bold text-black">
                            {step.title}
                          </h3>
                        </div>
                        
                        <p className="text-gray-700 text-xl leading-relaxed mb-8">
                          {step.description}
                        </p>

                        {/* Features list */}
                        <div className="grid grid-cols-2 gap-4">
                          {step.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-sm text-gray-700 bg-gray-50 rounded-lg px-4 py-3"
                            >
                              <div className="w-2 h-2 bg-[#846A4D] rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}