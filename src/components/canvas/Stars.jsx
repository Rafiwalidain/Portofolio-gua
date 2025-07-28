import { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color="#f272c8" size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const id = Math.random().toString(36).substring(7);
      const newSparkle = {
        id,
        x: e.clientX,
        y: e.clientY,
      };

      setSparkles((prev) => [...prev, newSparkle]);

      // Hapus sparkle setelah 500ms
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
      }, 500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Sparkle Effect */}
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="fixed w-2 h-2 rounded-full bg-white opacity-80 animate-ping-sparkle"
          style={{
            left: s.x,
            top: s.y,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />
      ))}

      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
