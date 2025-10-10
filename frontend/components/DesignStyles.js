import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Enhanced styles data with additional images for gallery
const designStyles = [
  {
    name: "Modern",
    image: "/modern.jpg",
    description: "Clean lines, neutral colors, and open spaces",
    count: "1,240+ Projects",
    color: "from-[blue-600 to-blue-800]",
    gallery: ["/hero-bg.jpg", "/modern-2.jpg", "/modern-3.jpg"]
  },
  {
    name: "Traditional",
    image: "/traditional.jpg",
    description: "Classic elegance with rich details",
    count: "980+ Projects",

  },
  {
    name: "Transitional",
    image: "/transitional.jpg", 
    description: "Balance between traditional and contemporary",
    count: "1,150+ Projects",

  },
  {
    name: "Industrial",
    image: "/industrial.jpg",
    description: "Raw materials and urban sophistication",
    count: "870+ Projects",
    color: "from-slate-600 to-slate-800",
    gallery: ["/industrial.jpg", "/industrial-2.jpg", "/industrial-3.jpg"]
  }
];

export default function DesignStyles() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePopup = (image, name) => {
    setSelectedImage({ src: image, name });
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
  };

  return (
    <>
    {/* bg-gradient-to-r from-decorilla-blue to-purple-600 */}
      <section className="py-10 bg-gradient-to-b from-gray-300 via-white to-gray-50 relative overflow-hidden">
        {/* Background decoration */}

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Enhanced Section Header */}
          <div className="text-center mb-8">
    
            <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
              Our Design
              <span className="block bg-[#846A4D] to-purple-600 bg-clip-text text-transparent pb-4">
                Styles
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore curated aesthetics perfected by our designers. Each style tells a unique story 
              and creates spaces that reflect your personality.
            </p>
          </div>

          {/* Enhanced Styles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {designStyles.map((style, index) => (
              <StyleCard 
                key={index}
                style={style}
                onImageClick={openImagePopup}
                index={index}
              />
            ))}
          </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center px-8 py-4 bg-[#846A4D] to-purple-600 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Browse All Styles
                </Link>

              </div>
        </div>
      </section>

      {/* Image Popup Modal */}
      {selectedImage && (
        <ImagePopup 
          image={selectedImage} 
          onClose={closeImagePopup} 
        />
      )}
    </>
  );
}

// Enhanced Style Card Component
function StyleCard({ style, onImageClick, index }) {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl h-96 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Main Image */}
      <div className="relative h-full cursor-pointer" onClick={() => onImageClick(style.image, style.name)}>
        <Image
          src={style.image}
          alt={style.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* Content */}
        <div className="absolute bg-[#846A4D]/40 inset-0 flex flex-col justify-between p-6 text-white">
          {/* Top badge */}
          <div className="self-start">

          </div>

          {/* Bottom content */}
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-3xl text-gray-200 font-bold mb-3 drop-shadow-lg">{style.name}</h3>
            <p className="text-gray-200 mb-4 opacity-90 leading-relaxed">{style.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-200">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                {style.count}
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hover overlay with enhanced button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-sm transition-all duration-300">
        <div className="text-center transform scale-95 group-hover:scale-100 transition-transform duration-300">
          <button 
            className="px-8 py-3 bg-[#F7F2EC] text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-2"
            onClick={(e) => {
              e.stopPropagation();
              onImageClick(style.image, style.name);
            }}
          >
            View Details
          </button>

        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

// Image Popup Component
function ImagePopup({ image, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-300 group"
        aria-label="Close"
      >
        <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image container */}
      <div className="relative max-w-5xl max-h-[90vh] w-full">
        <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={image.src}
            alt={image.name}
            fill
            className="object-contain"
            sizes="90vw"
            quality={100}
          />
          
          {/* Image info overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{image.name} Style</h3>
            <p className="text-gray-300">Click outside to close</p>
          </div>
        </div>
      </div>

      {/* Click outside to close */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={onClose}
      ></div>
    </div>
  );
}