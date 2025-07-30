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
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}