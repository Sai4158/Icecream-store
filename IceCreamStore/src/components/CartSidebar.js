"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartSidebar() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md liquid-glass z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-2xl font-bold font-playfair text-black">
                Your Cart
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-400 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="text-center text-gray-500 mt-20">
                  <p className="text-lg">Your cart is empty.</p>
                  <p className="text-sm">Add some delicious flavors!</p>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
                  >
                    <div className="relative w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{item.name}</h3>
                      <p className="text-black font-semibold">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-sm font-medium w-4 text-center text-gray-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors self-start"
                    >
                      <Trash2 size={18} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100 bg-gray-50/50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500">Subtotal</span>
                <span className="text-2xl font-bold text-gray-900">${cartTotal.toFixed(2)}</span>
              </div>
              <button
                disabled={cart.length === 0}
                className="w-full liquid-glass-dark text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
