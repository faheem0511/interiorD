export default function AIPreview() {
  return (
    <section className="py-28 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-light mb-6">
              <span className="font-medium">AI-Powered</span> Design Suggestions
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our system learns your preferences to generate personalized layouts in seconds
            </p>
            <button className="flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Try the AI Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <div className="lg:w-1/2 relative">
            {/* Mock AI interface */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-gray-900 rounded-lg overflow-hidden h-80 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-blue-400 text-5xl mb-4">✨</div>
                  <h3 className="text-xl font-medium mb-2">Generating Design</h3>
                  <p className="text-gray-400">Analyzing your 237 style preferences...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}