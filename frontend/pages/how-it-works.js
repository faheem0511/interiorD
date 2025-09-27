// pages/how-it-works.js
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "@/components/Footer";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
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
      image: "/images/quiz.jpg",

      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      features: ["5-minute quiz", "Style matching", "Budget planning", "Space analysis"]
    },
    {
      title: "Meet Your Designers",
      number: "02", 
      description: "You'll receive two initial design concepts from expert designers. Pick the one you love to continue collaborating.",
      image: "/images/designers.jpg",
    
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      features: ["2 design concepts", "Expert designers", "Portfolio review", "Designer chat"]
    },
    {
      title: "Collaborate Online",
      number: "03",
      description: "Work 1-on-1 with your chosen designer to revise layouts, color schemes, and furniture plans until you're happy.",
      image: "/images/collaborate.jpg", 

      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      features: ["Real-time collaboration", "Unlimited revisions", "3D previews", "Live feedback"]
    },
    {
      title: "Bring Your Vision to Life",
      number: "04",
      description: "Receive a curated shopping list with exclusive discounts and a 3D visual plan to transform your room.",
      image: "/images/shop.jpg",

      color: "from-orange-500 to-red-500", 
      bgColor: "bg-orange-50",
      features: ["Shopping list", "Exclusive discounts", "3D room plan", "Installation guide"]
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Head>
        <title>How It Works | Atlas Wise</title>
      </Head>
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="hero-section relative min-h-screen bg-center bg-cover overflow-hidden" style={{ backgroundImage: "url('/h1.jpg')" }}>
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/10 to-black/60"></div>
        

        {/* Mouse follower */}
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
              className="text-white text-4xl md:text-7xl font-semi-bold font-italic mb-6 leading-tight"
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
                className="bg-decorilla-blue hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
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

      {/* Process Overview Section */}
      <section className="bg-gradient-to-b from-gray-300 via-white to-gray-50 pt-32 pb-20 px-4 relative overflow-hidden">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto   text-center mb-20 relative z-10"
        >
          <motion.div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
          >
            How It Works
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our easy 4-step interior design process saves you time and delivers
            beautiful results that exceed your expectations.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Progress line */}


          <div className="space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                onViewportEnter={() => setActiveStep(index)}
                className={`flex flex-col lg:flex-row items-center gap-16 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="lg:w-1/2 w-full relative group"
                >
                  <div className={`absolute inset-0 ${step.color.replace('from-', 'from-').replace('to-', 'to-')} rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="relative bg-decorilla-blue/50 rounded-3xl p-2  shadow-2xl">
                    <Image
                      src="/h2.jpg"
                      alt={step.title}
                      width={600}
                      height={400}
                      className="rounded-2xl object-cover w-full h-80 shadow-lg"
                    />
                    
                    {/* Floating step number */}
                    <div className={`absolute -top-4 -left-4 w-16 h-16 bg-decorilla-blue rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl`}>
                      {step.number}
                    </div>


                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="lg:w-1/2 w-full"
                >
                  <div className={`${step.bgColor} p-8 rounded-3xl border border-gray-200/50 relative overflow-hidden`}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }}></div>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center mb-4">


                      </div>

                      <h3 className="text-3xl font-bold mb-6 text-gray-800">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {step.description}
                      </p>

                      {/* Features list */}
                      <div className="grid grid-cols-2 gap-3">
                        {step.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                            className="flex items-center text-sm text-gray-700 bg-white/70 rounded-lg px-3 py-2"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full mr-2`}></div>
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}