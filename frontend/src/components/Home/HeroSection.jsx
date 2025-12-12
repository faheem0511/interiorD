export default function Hero() {
  return (
    <section className="hero-section relative h-screen bg-center bg-cover" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/50 to-black/10"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-white text-5xl md:text-7xl font-serif mb-4" style={{ fontFamily: "'Playfair Display', 'Georgia', serif", fontWeight: 400, letterSpacing: '-0.02em', lineHeight: '1.15' }}>
            Get a Designer<br />Space You'll Love
          </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
          Work with top designers + AI-generated layouts for your dream interior.
        </p>
        <button className="bg-[#846A4D] hover:bg-[#6F5234]
         text-white font-semi-bold py-5 px-8 rounded-lg text-lg shadow-lg mb-4">
          Start My Transformation
        </button>
     
      </div>
    </section>
  );
}