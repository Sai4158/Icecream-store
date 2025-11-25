"use client";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function LoyaltyMeltdown() {
  const { cartCount } = useCart();
  const progress = Math.min((cartCount / 10) * 100, 100);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-white/50 flex items-center gap-4 w-80 hidden md:flex">
      <div className="flex-1">
        <div className="flex justify-between text-xs font-bold mb-1">
          <span>MELTDOWN REWARD</span>
          <span>{cartCount}/10 Scoops</span>
        </div>
        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden relative">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-black relative"
          >
            {/* Drip Effect */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute right-0 bottom-0 w-2 h-2 bg-purple-500 rounded-full translate-y-1/2"
            />
          </motion.div>
        </div>
      </div>
      <div className="text-2xl">🎁</div>
    </div>
  );
}
