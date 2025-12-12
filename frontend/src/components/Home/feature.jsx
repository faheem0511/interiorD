"use client";

import React from 'react';
import { Calendar, DollarSign, ShoppingBag } from 'lucide-react';

export default function Feature() {
  const features = [
    {
      icon: Calendar,
      title: "Save Time",
      description: "Realistic 3D model & top professional help to take the guesswork out of the designing process."
    },
    {
      icon: DollarSign,
      title: "Save Money",
      description: "Top talent for up to 80% less than traditional interior design & trade discounts of 5% to 45% at the top vendors."
    },
    {
      icon: ShoppingBag,
      title: "Convenient & Stress Free",
      description: "A fun and easy white-glove service including everything from design to convenient ordering."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white/40 backdrop-blur-lg rounded-2xl border border-white/60 p-10 text-center shadow-xl hover:shadow-2xl hover:bg-white/50 transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
                }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400/30 to-amber-600/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-amber-300/50">
                    <Icon className="w-10 h-10 text-amber-700 stroke-1" />
                  </div>
                </div>
                <h3 className="text-2xl font-light text-gray-800 mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}