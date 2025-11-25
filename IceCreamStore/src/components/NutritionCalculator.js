"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { Activity, ChevronUp } from "lucide-react";

export default function NutritionCalculator() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [stats, setStats] = useState({ calories: 0, sugar: 0, protein: 0 });

  useEffect(() => {
    // Calculate stats based on cart items
    // Assuming base values per item type for demo purposes
    const newStats = cart.reduce((acc, item) => {
      const quantity = item.quantity || 1;
      return {
        calories: acc.calories + (250 * quantity),
        sugar: acc.sugar + (22 * quantity),
        protein: acc.protein + (4 * quantity)
      };
    }, { calories: 0, sugar: 0, protein: 0 });
    
    setStats(newStats);
  }, [cart]);

  if (cart.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-2">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="liquid-glass p-6 rounded-3xl shadow-2xl w-72 mb-2"
          >
            <h3 className="font-playfair font-bold text-xl mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-green-500" />
              Real-Time Nutrition
            </h3>
            
            <div className="space-y-4">
              <StatRow label="Calories" value={stats.calories} max={2000} color="bg-green-500" unit="kcal" />
              <StatRow label="Sugar" value={stats.sugar} max={50} color="bg-orange-500" unit="g" />
              <StatRow label="Protein" value={stats.protein} max={100} color="bg-blue-500" unit="g" />
            </div>
            
            <p className="text-xs text-gray-400 mt-4 text-center">
              Based on {cart.reduce((c, i) => c + i.quantity, 0)} items in cart
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="liquid-glass-dark text-white px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 hover:bg-black/80 transition-all"
      >
        <Activity className="w-4 h-4" />
        <span>{isOpen ? "Hide Facts" : "Nutrition"}</span>
        <ChevronUp className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </motion.button>
    </div>
  );
}

function StatRow({ label, value, max, color, unit }) {
  const percentage = Math.min((value / max) * 100, 100);
  
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600">{label}</span>
        <span className="font-bold">{value}{unit}</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${color}`}
        />
      </div>
    </div>
  );
}
