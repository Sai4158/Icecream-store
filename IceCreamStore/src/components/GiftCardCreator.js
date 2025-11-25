"use client";
import { useRef, useState } from "react";

export default function GiftCardCreator() {
  const [amount, setAmount] = useState(25);
  const [message, setMessage] = useState("Enjoy a treat!");
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Send a Sweet Gift</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Controls */}
          <div className="space-y-6">
            <div>
              <label className="block font-bold mb-2">Amount</label>
              <div className="flex gap-4">
                {[10, 25, 50, 100].map((val) => (
                  <button
                    key={val}
                    onClick={() => setAmount(val)}
                    className={`px-4 py-2 rounded-lg border ${amount === val ? "liquid-glass-dark text-white border-transparent" : "liquid-glass text-gray-900 border-gray-200 hover:border-black"}`}
                  >
                    ${val}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block font-bold mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                maxLength={50}
              />
            </div>
          </div>

          {/* Preview */}
          <div className="bg-black p-8 rounded-2xl shadow-2xl text-white aspect-video flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
            
            <div className="flex justify-between items-start z-10">
              <span className="font-bold text-2xl">FrostBite</span>
              <span className="font-mono text-xl">${amount}</span>
            </div>
            
            <div className="z-10">
              <p className="text-2xl font-serif italic mb-4">"{message}"</p>
              <p className="text-sm opacity-80">Valid at all locations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
