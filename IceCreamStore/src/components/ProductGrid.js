"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const flavors = [
  {
    id: 1,
    name: "Classic Vanilla",
    description: "Rich, creamy, and made with real Madagascar vanilla beans.",
    image: "/images/vanilla_scoop.png",
    color: "#f3e5ab",
    price: 4.99,
  },
  {
    id: 2,
    name: "Midnight Chocolate",
    description: "Decadent dark chocolate made from premium cocoa.",
    image: "/images/chocolate_scoop.png",
    color: "#3e2723",
    price: 5.49,
  },
  {
    id: 3,
    name: "Mint Chip",
    description: "Cool mint refreshment with crunchy chocolate chips.",
    image: "/images/mint_scoop.png",
    color: "#80cbc4",
    price: 5.49,
  },
  {
    id: 4,
    name: "Strawberry Cheesecake",
    description: "Creamy cheesecake ice cream with strawberry swirl and graham chunks.",
    image: "/images/strawberry_cheesecake_scoop.png",
    color: "#ff80ab",
    price: 5.99,
  },
  {
    id: 5,
    name: "Cookie Dough",
    description: "Vanilla ice cream loaded with chocolate chip cookie dough.",
    image: "/images/cookie_dough_scoop.png",
    color: "#e1c699",
    price: 5.99,
  },
  {
    id: 6,
    name: "Pistachio Dream",
    description: "Nutty and sweet pistachio ice cream with roasted nuts.",
    image: "/images/mint_scoop.png",
    color: "#c5e1a5",
    price: 6.49,
  },
  {
    id: 7,
    name: "Mango Sorbet",
    description: "Refreshing dairy-free sorbet made with ripe mangoes.",
    image: "/images/vanilla_scoop.png",
    color: "#ffcc80",
    price: 4.99,
  },
  {
    id: 8,
    name: "Coffee Buzz",
    description: "Bold espresso ice cream for coffee lovers.",
    image: "/images/chocolate_scoop.png",
    color: "#8d6e63",
    price: 5.49,
  },
  {
    id: 9,
    name: "Rocky Road",
    description: "Chocolate ice cream with marshmallows and almonds.",
    image: "/images/chocolate_scoop.png",
    color: "#5d4037",
    price: 5.99,
  },
  {
    id: 10,
    name: "Salted Caramel",
    description: "Sweet caramel ice cream with a hint of sea salt.",
    image: "/images/vanilla_scoop.png",
    color: "#ffecb3",
    price: 5.49,
  },
];

export default function ProductGrid() {
  const { addToCart } = useCart();

  return (
    <section id="flavors" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center font-playfair">Our Flavors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {flavors.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative liquid-glass rounded-3xl p-6 overflow-hidden"
          >
            <div className="h-64 relative mb-6 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: index * 0.2 }}
                className="w-full h-full relative z-10 flex items-center justify-center"
              >
                 {/* Placeholder for 3D model or image */}
                 <div 
                  className="w-48 h-48 rounded-full shadow-2xl"
                  style={{ backgroundColor: product.color }}
                 />
              </motion.div>
              <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500" />
            </div>

            <h3 className="text-2xl font-bold mb-2 font-playfair">{product.name}</h3>
            <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
            
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">${product.price}</span>
              <button 
                onClick={() => addToCart(product)}
                className="liquid-glass-dark text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-black/80 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
