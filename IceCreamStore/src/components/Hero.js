"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 font-playfair"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Taste the <br />
            <span className="text-blue-600">
              Future
            </span>
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-600 mb-8 max-w-lg font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Liquid smooth. Physics defied. The ultimate ice cream experience.
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#flavors" className="liquid-glass-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl flex items-center justify-center">
              View Flavors
            </a>
            <a href="#about" className="liquid-glass text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center">
              Our Story
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Image
              src="/images/hero_icecream.png"
              alt="Premium Ice Cream"
              width={700}
              height={700}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
          
          {/* Glass Reflection Effect behind image */}
          <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl -z-10 transform scale-110" />
        </motion.div>
      </div>
    </section>
  );
}
