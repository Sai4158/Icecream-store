"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock } from "lucide-react";

export default function SecretMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === "frostbite") {
      setIsOpen(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <section className="py-20 bg-black text-white text-center">
      <div className="max-w-md mx-auto px-4">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="lock"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Lock className="w-12 h-12 mx-auto mb-4 text-gray-500" />
              <h2 className="text-2xl font-bold mb-4">The Vault</h2>
              <p className="text-gray-400 mb-6">Enter the password to access experimental flavors.</p>
              
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password..."
                  className={`flex-1 bg-white/10 border ${error ? "border-red-500" : "border-white/20"} rounded-lg px-4 py-2 focus:outline-none focus:border-white transition-colors`}
                />
                <button 
                  type="submit"
                  className="bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-gray-200 transition-colors"
                >
                  Unlock
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Unlock className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h2 className="text-3xl font-bold mb-8 text-green-400">Access Granted</h2>
              <div className="grid gap-4">
                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                  <h3 className="font-bold text-xl">🌶️ Spicy Mango Habanero</h3>
                  <p className="text-sm text-gray-400">Warning: Extremely Hot</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                  <h3 className="font-bold text-xl">🥓 Maple Bacon Crunch</h3>
                  <p className="text-sm text-gray-400">Breakfast for dessert</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
