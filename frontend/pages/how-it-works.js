// pages/how-it-works.js
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import tailwindConfig from "@/tailwind.config";
import Footer from "@/components/Footer";
export default function HowItWorks() {

  const steps = [
    {
      title: "1. Start with the Style Quiz",
      description:
        "Answer a few questions about your space, preferences, and budget so we can match you with the best designers.",
      image: "/images/quiz.jpg",
    },
    {
      title: "2. Meet Your Designers",
      description:
        "You'll receive two initial design concepts from expert designers. Pick the one you love to continue collaborating.",
      image: "/images/designers.jpg",
    },
    {
      title: "3. Collaborate Online",
      description:
        "Work 1-on-1 with your chosen designer to revise layouts, color schemes, and furniture plans until you're happy.",
      image: "/images/collaborate.jpg",
    },
    {
      title: "4. Bring Your Vision to Life",
      description:
        "Receive a curated shopping list with exclusive discounts and a 3D visual plan to transform your room.",
      image: "/images/shop.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>How It Works | Atlas Wise</title>
      </Head>
      <Navbar />

    <section className="hero-section relative h-screen bg-center bg-cover" style={{ backgroundImage: "url('/h1.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Design, Collaborate, Transform:<br></br>Our Easy Online Process
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
          Work with our award-winning interior designers to make your dream space come true! Interior design has never been soconvenient, simple and fun!
        </p>
       <button className="bg-decorilla-blue hover:bg-decorilla-blue/90 text-white font-medium px-8 py-3 rounded-lg shadow-md transition">
  Get Started Now
</button>

        <p className="text-gray-400">Voted Best Online Interior Design Services by Forbes</p>
      </div>
    </section>
 

      <section className="bg-white pt-24 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-lg text-gray-600">
            Our easy 4-step interior design process saves you time and delivers
            beautiful results.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2 w-full">
                <Image
                  src="/h2.jpg"
                  alt={step.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg object-cover w-full"
                />
              </div>
              <div className="md:w-1/2 w-full text-left">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
