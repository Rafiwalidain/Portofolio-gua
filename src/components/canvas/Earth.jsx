import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { canvas } from "framer-motion/client";

const Earth = () => {
  const earth = useGLTF("./planet/scene.glb");

  return <primitive object={earth.scene} scale={2} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate autoRotateSpeed={0.4} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
