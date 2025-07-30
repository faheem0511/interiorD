import Image from 'next/image';
import Link from 'next/link';
// Styles data moved to a separate config file (or keep here if preferred)
const designStyles = [
  {
    name: "Modern",
    image: "/hero-bg.jpg",
    description: "Clean lines, neutral colors, and open spaces",
    count: "1,240+ Projects"
  },
  {
    name: "Traditional",
    image: "/traditional.jpg",
    description: "Classic elegance with rich details",
    count: "980+ Projects"
  },
  {
    name: "Transitional",
    image: "/transitional.jpg", 
    description: "Balance between traditional and contemporary",
    count: "1,150+ Projects"
  },
  {
    name: "Industrial",
    image: "/industrial.jpg",
    description: "Raw materials and urban sophistication",
    count: "870+ Projects"
  }
];

export default function DesignStyles() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Our Design Styles</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore curated aesthetics perfected by our designers
          </p>
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {designStyles.map((style, index) => (
            <StyleCard 
              key={index}
              name={style.name}
              image={style.image}
              description={style.description}
              count={style.count}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/styles"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Browse All Styles
          </Link>
        </div>
      </div>
    </section>
  );
}

// Extracted Style Card Component
function StyleCard({ name, image, description, count }) {
  return (
    <div className="group relative overflow-hidden rounded-xl h-80 shadow-md hover:shadow-lg transition-shadow">
      {/* Image with hover effect */}
      <div className="relative h-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-gray-200 mb-3">{description}</p>
          <div className="flex items-center text-sm text-gray-300">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {count}
          </div>
        </div>
      </div>
      
      {/* Hidden hover content */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition-opacity">
        <button className="px-6 py-2 bg-white text-gray-900 rounded-full font-medium">
          View Examples
        </button>
      </div>
    </div>
  );
}