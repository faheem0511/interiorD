import Navbar from "../navbar"; 
import Footer from "../Footer";
import { useRouter } from "next/router";

export default function StyleQuiz() {
  const router=useRouter();
  const steps = [
    {
      id: 1,
      title: "Answer Quick Questions",
      desc: "Tell us about your preferences, lifestyle, and favorite design inspirations.",
      icon: "📝",
    },
    {
      id: 2,
      title: "Discover Your Style",
      desc: "We’ll analyze your answers and reveal your unique interior design style instantly.",
      icon: "🎨",
    },
    {
      id: 3,
      title: "Get Matched With Designers",
      desc: "Connect with professional interior designers who can bring your vision to life.",
      icon: "🏡",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero-section relative h-screen bg-center bg-cover"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            What Is My <br /> Interior Design Style?
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
            Take our free interior design quiz to determine your unique
            decorating style.
          </p>
          <button className="bg-decorilla-blue/100 hover:bg-decorilla-blue/90 text-white font-bold py-5 px-10 rounded-lg text-lg shadow-lg mb-4 transition"
           onClick={()=> router.push("/goToQuiz")}
           >
            Start My Transformation
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            How Our Interior Design Style Quiz Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-decorilla-blue">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
