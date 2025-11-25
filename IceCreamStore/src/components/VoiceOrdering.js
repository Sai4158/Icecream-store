"use client";
import { useState, useEffect } from "react";
import { Mic, MicOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VoiceOrdering() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      setSupported(true);
    }
  }, []);

  const toggleListening = () => {
    if (!supported) return;

    if (isListening) {
      setIsListening(false);
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setTranscript(text);
      // Here we would parse the text and add to cart
      // For demo, we just show what was heard
      setTimeout(() => setTranscript(""), 3000);
    };

    recognition.start();
  };

  if (!supported) return null;

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <AnimatePresence>
        {transcript && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-full left-0 mb-4 bg-black text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium"
          >
            "{transcript}"
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleListening}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-colors ${
          isListening ? "bg-red-500 text-white animate-pulse" : "bg-white text-black"
        }`}
      >
        {isListening ? <MicOff size={24} /> : <Mic size={24} />}
      </motion.button>
    </div>
  );
}
