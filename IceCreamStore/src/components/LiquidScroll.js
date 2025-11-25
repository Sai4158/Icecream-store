"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function LiquidScroll({ children }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50"
        style={{ scaleX }}
      />
      <div className="relative z-0">
        {/* Floating Blobs Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-zinc-50">
          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
          
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-400/5 rounded-full blur-[120px] mix-blend-multiply"
          />
          <motion.div 
            animate={{ 
              x: [0, -100, 0],
              y: [0, 100, 0],
              scale: [1, 1.5, 1],
              rotate: [0, -60, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-400/5 rounded-full blur-[130px] mix-blend-multiply"
          />
          <motion.div 
            animate={{ 
              x: [0, 50, -50, 0],
              y: [0, 50, 50, 0],
              scale: [1, 1.1, 0.9, 1]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-300/5 rounded-full blur-[100px] mix-blend-multiply"
          />
        </div>
        {children}
      </div>
    </>
  );
}
