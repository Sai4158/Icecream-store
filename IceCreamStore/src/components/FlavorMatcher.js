"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    id: 1,
    text: "What's your current vibe?",
    options: [
      { text: "Chill & Relaxed", value: "chill" },
      { text: "Energetic & Wild", value: "wild" },
      { text: "Cozy & Comforting", value: "cozy" },
    ],
  },
  {
    id: 2,
    text: "Pick a texture:",
    options: [
      { text: "Smooth & Creamy", value: "smooth" },
      { text: "Crunchy & Chunky", value: "crunchy" },
      { text: "Fruity & Icy", value: "fruity" },
    ],
  },
];

const results = {
  "chill-smooth": "Classic Vanilla",
  "chill-crunchy": "Mint Chip",
  "chill-fruity": "Mango Sorbet",
  "wild-smooth": "Coffee Buzz",
  "wild-crunchy": "Cookie Dough",
  "wild-fruity": "Strawberry Cheesecake",
  "cozy-smooth": "Midnight Chocolate",
  "cozy-crunchy": "Pistachio Dream",
  "cozy-fruity": "Strawberry Cheesecake",
};

export default function FlavorMatcher() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (value) => {
    const newAnswers = [...answers, value];
    if (step < questions.length - 1) {
      setAnswers(newAnswers);
      setStep(step + 1);
    } else {
      // Calculate result
      const key = `${newAnswers[0]}-${value}`;
      setResult(results[key] || "Classic Vanilla");
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Flavor Matcher AI</h2>
        
        <div className="bg-white p-8 rounded-3xl shadow-xl min-h-[300px] flex items-center justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="w-full"
              >
                <h3 className="text-2xl font-bold mb-8">{questions[step].text}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {questions[step].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="p-4 rounded-xl border-2 border-gray-100 hover:border-pink-500 hover:bg-pink-50 transition-all font-medium text-lg"
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <p className="text-gray-500 mb-2">Your perfect match is...</p>
                <h3 className="text-4xl font-bold text-black mb-6">
                  {result}
                </h3>
                <button
                  onClick={reset}
                  className="px-6 py-2 liquid-glass-dark text-white rounded-full font-bold hover:bg-black/80 transition-colors"
                >
                  Try Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
