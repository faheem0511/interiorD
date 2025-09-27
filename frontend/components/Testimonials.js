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
    <section className="py-20 relative h-[100vh]">
      {/* Background Image */}
      <div 
        className="absolute py-16 inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      />
      
      {/* Gradient Overlay for better visual hierarchy */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white/15">
              {/* Decorative quote icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#846A4D] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              
              {/* Card content */}
              <div className="pt-4">
                <p className="text-lg italic mb-6 text-white leading-relaxed font-light">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-1 mr-4"></div>
                  <p className="font-semibold text-white/90 text-sm tracking-wide">
                    {testimonial.author}
                  </p>
                </div>
              </div>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}