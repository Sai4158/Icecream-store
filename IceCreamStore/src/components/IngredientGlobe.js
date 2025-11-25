"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, useTexture } from "@react-three/drei";
import { useRef, useState } from "react";

function Marker({ position, label, onClick }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <group position={position}>
      <mesh 
        onClick={onClick} 
        onPointerOver={() => setHovered(true)} 
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color={hovered ? "#ff4081" : "#ffffff"} emissive={hovered ? "#ff4081" : "#000000"} />
      </mesh>
      {hovered && (
        <Html distanceFactor={10}>
          <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl w-48 text-center transform -translate-x-1/2 -translate-y-full mt-[-10px]">
            <h4 className="font-bold text-gray-900">{label.title}</h4>
            <p className="text-xs text-gray-500">{label.desc}</p>
          </div>
        </Html>
      )}
    </group>
  );
}

function Earth() {
  const colorMap = useTexture('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg');
  
  return (
    <group>
      {/* Real Earth Textured */}
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial 
          map={colorMap}
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>
      {/* Atmosphere Glow */}
      <mesh scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshBasicMaterial 
          color="#42a5f5" 
          transparent 
          opacity={0.05} 
          side={2} 
          blending={2} // AdditiveBlending
        />
      </mesh>
    </group>
  );
}

export default function IngredientGlobe() {
  const locations = [
    { pos: [1.2, 0.5, 0.5], title: "Madagascar", desc: "World-renowned Vanilla Beans" },
    { pos: [0.2, 0.8, 1.2], title: "Belgium", desc: "Rich, Dark Cocoa" },
    { pos: [-0.5, 0.2, 1.3], title: "California", desc: "Fresh Strawberries" },
    { pos: [0.8, 1.2, -0.2], title: "Italy", desc: "Pistachios & Hazelnuts" },
  ];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            Sourced from the <br />
            <span className="text-blue-500">
              Ends of the Earth
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            We travel the globe to find the finest ingredients. Spin the globe to see where your favorite flavors begin their journey.
          </p>
          <div className="flex gap-4">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="font-bold text-xl mb-1">4</h3>
              <p className="text-sm text-gray-400">Continents</p>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="font-bold text-xl mb-1">100%</h3>
              <p className="text-sm text-gray-400">Ethical Trade</p>
            </div>
          </div>
        </div>

        <div className="h-[400px] md:h-[500px] w-full relative">
          <Canvas camera={{ position: [0, 0, 4.5] }}>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
            <pointLight position={[-10, -10, -5]} intensity={1} color="#2196f3" />
            <Earth />
            {locations.map((loc, i) => (
              <Marker key={i} position={loc.pos} label={loc} />
            ))}
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 1.5} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
