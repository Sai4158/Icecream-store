"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gray-100 rounded-2xl transform rotate-3 scale-105 -z-10" />
            <Image
              src="/images/hero_icecream.png"
              alt="Our Story"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl bg-white"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Crafting <span className="text-pink-500">Happiness</span>, One Scoop at a Time
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At FrostBite, we believe ice cream is more than just a dessert—it's a memory. 
              Started in a small kitchen with a big dream, we've dedicated ourselves to mastering the art of frozen treats.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We source our milk from local dairy farms, our fruits from sustainable orchards, and our chocolate from ethical growers. 
              Every batch is churned slowly to ensure that perfect, dense, creamy texture you love.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <h3 className="text-3xl font-bold text-purple-600 mb-1">100%</h3>
                <p className="text-gray-500 font-medium">Natural</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <h3 className="text-3xl font-bold text-pink-600 mb-1">50+</h3>
                <p className="text-gray-500 font-medium">Unique Flavors</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
