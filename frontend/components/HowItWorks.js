export default function HowItWorks() {
  return (

  <section className="relative w-full bg-gray-200 py-20 px-6 md:px-16 overflow-hidden items-center">
    <h2 className="text-3xl md:text-5xl font-semi-bold text-center mb-16 font-serif text-gray-800">
      Experience Online Room Design
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start max-w-7xl mx-auto">
    {/* Left Image */}
      <div className="relative flex flex-col items-center">
        <img
          src="/DiningRoom.jpg"
          alt="Styled Room Mockup"
          className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full object-cover"
        />
      {/* Bottom description */}
        <div className="mt-20 text-center max-w-3xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed">
         Every virtual room design includes concepts from multiple designers to ensure
         you get just the look you're after!
        </div>
      </div>

    <div className="absolute bottom-35 left-[51%] -translate-x-1/2">
      <img
        src="/Arrow.jpg"
        alt="Arrow"
        className="w-35 md:w-36 rotate-[20deg]"
      />
    </div>

    <div className="flex flex-col items-center md:items-start relative">
      {/* Text Above */}
      <p className="mb-5 text-lg md:text-xl text-gray-700 text-center md:text-left leading-relaxed max-w-lg">
        Let our professional interior designers breathe life into your new space
        by creating lifelike online room designs.
      </p>

      {/* Slightly lowered image */}
      <img
        src="/DiningRoom1.jpg"
        alt="Real Designed Room"
        className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full object-cover mt-4 md:mt-10"
      />
    </div>
  </div>


</section>
  );
}