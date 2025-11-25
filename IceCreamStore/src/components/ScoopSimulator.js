"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Cylinder, Float, Text, Environment, ContactShadows } from "@react-three/drei";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

function Scoop({ position, color, ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * 2) * 0.05; // Gentle float
  });

  return (
    <Sphere ref={ref} args={[0.8, 32, 32]} position={position} {...props}>
      <meshStandardMaterial 
        color={color} 
        roughness={0.4} 
        metalness={0.1} 
        bumpScale={0.1}
      />
    </Sphere>
  );
}

function Cone() {
  return (
    <Cylinder args={[0.8, 0, 2.5, 32]} position={[0, -1.5, 0]}>
      <meshStandardMaterial color="#f5cba7" roughness={0.6} />
    </Cylinder>
  );
}

export default function ScoopSimulator() {
  const [scoops, setScoops] = useState([]);
  const [hoveredFlavor, setHoveredFlavor] = useState(null);

  const flavors = [
    { id: "vanilla", name: "Vanilla", color: "#f3e5ab" },
    { id: "chocolate", name: "Chocolate", color: "#3e2723" },
    { id: "strawberry", name: "Strawberry", color: "#ff80ab" },
    { id: "mint", name: "Mint Chip", color: "#80cbc4" },
    { id: "blueberry", name: "Blueberry", color: "#5c6bc0" },
  ];

  const addScoop = (flavor) => {
    if (scoops.length < 4) {
      setScoops([...scoops, { ...flavor, id: Math.random() }]);
    }
  };

  return (
    <section className="h-[80vh] w-full relative overflow-hidden">
      {/* Background handled by LiquidScroll, but adding local depth */}
      <div className="absolute inset-0 bg-white/5 pointer-events-none" />
      <div className="absolute top-10 left-10 z-10 max-w-md">
        <h2 className="text-5xl font-bold mb-2 font-playfair text-black">
          Scoop Simulator
        </h2>
        <p className="text-gray-500 text-lg">Drag, drop, and stack your dream cone in 3D.</p>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 1, 6], fov: 45 }} shadows>
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.3} 
            penumbra={1} 
            intensity={1.5} 
            castShadow 
            shadow-mapSize={[1024, 1024]}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#blue" />
          <Environment preset="sunset" />
          
          <group position={[0, -1, 0]}>
            <Cone />
            {scoops.map((scoop, index) => (
              <Scoop 
                key={scoop.id} 
                position={[0, 0.6 + index * 1.1, 0]} 
                color={scoop.color} 
              />
            ))}
            <ContactShadows position={[0, -3, 0]} opacity={0.5} scale={20} blur={2} far={4.5} />
          </group>
          
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            {/* Floating Particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <mesh key={i} position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 5 - 5]}>
                <sphereGeometry args={[0.05, 8, 8]} />
                <meshStandardMaterial color="white" emissive="white" transparent opacity={0.6} />
              </mesh>
            ))}
          </Float>

          <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
        </Canvas>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4 z-10 px-4">
        {flavors.map((flavor) => (
          <motion.button
            key={flavor.id}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addScoop(flavor)}
            onMouseEnter={() => setHoveredFlavor(flavor.name)}
            onMouseLeave={() => setHoveredFlavor(null)}
            className="w-16 h-16 rounded-full shadow-lg border-4 border-white transition-all"
            style={{ backgroundColor: flavor.color }}
            title={flavor.name}
          />
        ))}
        <button 
          onClick={() => setScoops([])}
          className="px-6 py-3 bg-white/80 backdrop-blur-md rounded-full font-bold text-red-500 shadow-lg hover:bg-white transition-all"
        >
          Reset
        </button>
      </div>

      {/* Hover Label */}
      {hoveredFlavor && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md"
        >
          {hoveredFlavor}
        </motion.div>
      )}
    </section>
  );
}
