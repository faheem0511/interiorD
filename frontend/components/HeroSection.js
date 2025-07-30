export default function Hero() {
  return (
    <section className="hero-section relative h-screen bg-center bg-cover" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Get a Designer Space You'll Love
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
          Work with top designers + AI-generated layouts for your dream interior.
        </p>
        <button className="bg-decorilla-blue/100 hover:bg-decorilla-blue/90
         text-white font-bold py-5 px-10 rounded-lg text-lg shadow-lg mb-4">
          Start My Transformation
        </button>
        <p className="text-gray-400">Voted Best Online Interior Design Services by Forbes</p>
      </div>
    </section>
  );
}