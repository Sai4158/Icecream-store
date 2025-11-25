"use client";
import { motion } from "framer-motion";

export default function ScoopCam() {
  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <h2 className="text-xl font-bold font-mono">LIVE SCOOP CAM</h2>
          </div>
          <span className="text-gray-500 font-mono text-sm">KITCHEN 01 • 1080p</span>
        </div>

        <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-white/10">
          {/* Simulated Video Feed (Placeholder Animation) */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
             {/* Abstract "Kitchen" Activity */}
             <div className="absolute inset-0 opacity-20">
                <motion.div 
                  animate={{ x: [-20, 20, -20], opacity: [0.5, 0.8, 0.5] }} 
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl"
                />
                <motion.div 
                  animate={{ x: [20, -20, 20], opacity: [0.3, 0.6, 0.3] }} 
                  transition={{ duration: 7, repeat: Infinity }}
                  className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-200 rounded-full blur-3xl"
                />
             </div>
             
             {/* Simulated Scanlines */}
             <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />

             <div className="text-center z-10">
               <motion.div
                 animate={{ opacity: [1, 0.5, 1] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="text-red-500 font-bold font-mono text-2xl tracking-widest border-2 border-red-500 px-4 py-1 rounded"
               >
                 LIVE FEED
               </motion.div>
             </div>
          </div>
          
          {/* Overlay UI */}
          <div className="absolute bottom-4 left-4 font-mono text-xs text-green-400">
            BITRATE: 4500kbps
          </div>
        </div>
      </div>
    </section>
  );
}
