import { useState } from "react";


export default function GoQuiz() {
  const questions = [
    {
      question: "Which color palette do you prefer?",
      options: ["Neutral tones", "Bold & vibrant", "Earthy & natural", "Minimal black & white"],
    },
    {
      question: "What type of furniture appeals to you?",
      options: ["Classic & timeless", "Modern & sleek", "Rustic & natural", "Minimalist"],
    },
    {
      question: "What best describes your dream home?",
      options: ["Elegant & luxurious", "Trendy & stylish", "Cozy & warm", "Clean & simple"],
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = option;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    alert("🎉 Quiz Completed! Your answers: " + JSON.stringify(answers));
    // Here you can navigate to a results page or save data to backend
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <h1>DecorWise</h1>
      </header>

      <main className="flex-grow flex items-center justify-center bg-gray-50 px-4 py-16">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
          {currentStep < questions.length ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {questions[currentStep].question}
              </h2>
              <div className="space-y-4">
                {questions[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    className={`w-full py-3 px-4 rounded-lg border text-left transition ${
                      answers[currentStep] === option
                        ? "bg-decorilla-blue text-white border-decorilla-blue"
                        : "bg-gray-50 hover:bg-gray-100 border-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                {currentStep > 0 && (
                  <button
                    onClick={handlePrev}
                    className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300"
                  >
                    Previous
                  </button>
                )}
                {currentStep < questions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="ml-auto px-6 py-3 bg-decorilla-blue text-white rounded-lg hover:bg-decorilla-blue/90"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    className="ml-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Finish
                  </button>
                )}
              </div>
            </>
          ) : (
            <h2 className="text-xl font-bold text-center">
              🎉 Quiz Completed!
            </h2>
          )}
        </div>
      </main>
    </div>
  );
}
