"use client";
import { motion } from "framer-motion";
import { Milk, Leaf, Heart, Award } from "lucide-react";

const ingredients = [
  {
    icon: Milk,
    title: "Fresh Dairy",
    description: "Sourced daily from local, grass-fed cows for unmatched creaminess.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Leaf,
    title: "Real Fruit",
    description: "We use whole, ripe fruits. No artificial flavorings or syrups.",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Small batches churned slowly to ensure perfect texture every time.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Award,
    title: "Premium Cocoa",
    description: "Ethically sourced cocoa beans for deep, rich chocolate flavor.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export default function IngredientsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Only the <span className="text-purple-500">Finest</span> Ingredients
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We refuse to compromise on quality. That's why our ice cream tastes so good.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
            >
              <div className={`w-16 h-16 mx-auto ${item.bg} rounded-full flex items-center justify-center mb-6`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
