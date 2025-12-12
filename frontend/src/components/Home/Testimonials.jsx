"use client";
export default function Testimonials() {
  const testimonials = [
    {
      quote: "DecorAI transformed my living room into a space I love coming home to!",
      author: "Sarah J., New York"
    },
    {
      quote: "The designer understood my style perfectly and stayed within my budget.",
      author: "Michael T., Chicago"
    },
    {
      quote: "So much easier than trying to figure it all out myself. Worth every penny!",
      author: "Lisa M., Los Angeles"
    },
    {
      quote: "Amazing attention to detail and incredible results. Highly recommend!",
      author: "David R., Miami"
    }
  ];

  return (
    <section className="py-12 md:py-20 relative h-auto min-h-[100vh] md:h-[100vh]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      />
      
      {/* Gradient Overlay for better visual hierarchy */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-4 relative z-10 flex flex-col justify-center h-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white drop-shadow-lg px-4">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-sm sm:max-w-lg md:max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white/15">
              {/* Decorative quote icon */}
              <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-6 h-6 md:w-8 md:h-8 bg-[#846A4D] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              
              {/* Card content */}
              <div className="pt-3 md:pt-4">
                <p className="text-base md:text-lg italic mb-4 md:mb-6 text-white leading-relaxed font-light">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-1 mr-3 md:mr-4"></div>
                  <p className="font-semibold text-white/90 text-xs md:text-sm tracking-wide">
                    {testimonial.author}
                  </p>
                </div>
              </div>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}