"use client";
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function Last() {
  const [isHovered, setIsHovered] = useState(false);

  const handleScheduleClick = () => {
    alert('Scheduling consultation... This would typically open a booking form or calendar.');
  };

  const handleChatClick = () => {
    alert('Opening chat support... This would typically open a chat widget.');
  };

  return (
    <div className="grid lg:grid-cols-2 min-h-screen relative">
      {/* Image Section */}
      <div className="relative h-full flex justify-center items-center">
        {/* Overlay for image readability */}
        <div className="absolute inset-0 bg-[#846A4D] opacity-10"></div>
        <img
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80"
          alt="Elegant living room with marble fireplace and modern furniture"
          className="w-full max-w-full h-auto object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col bg-[#846A4C]/10 items-center justify-center px-6 py-16 lg:px-20 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-12 leading-tight tracking-wide">
          Think you can't afford beautiful interior design?
          <br />
          Think again.
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Transform your space without breaking the bank. Get in touch with our experts for a personalized consultation.
        </p>

        <button
          onClick={handleScheduleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`${
            isHovered ? 'transform -translate-y-1 shadow-xl' : 'shadow-md'
          } bg-[#846A4D] hover:bg-[#9A7D56] text-white font-semibold px-12 py-4 text-sm md:text-base tracking-widest uppercase transition-all duration-300 ease-in-out rounded-lg`}
        >
          Schedule a Consultation
        </button>

        <div className="mt-8 flex items-center justify-center space-x-6">
          <button
            onClick={handleChatClick}
            className="flex items-center space-x-2 text-[#846A4D] hover:text-[#9A7D56] font-semibold transition-colors duration-300"
          >

          </button>
        </div>
      </div>
    </div>
  );
}
