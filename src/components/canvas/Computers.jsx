import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const group = React.useRef();
  const computer = useGLTF("./desktop_pc/scene.glb");
  const { actions } = useAnimations(computer.animations, group);

  useEffect(() => {
    if (actions && actions["Take 001"]) {
      actions["Take 001"].reset().setLoop(THREE.LoopRepeat).play();
    }
  }, [actions]);

  return (
    <group ref={group}>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={20} />
      <primitive object={computer.scene} scale={isMobile ? 0.1 : 0.47} position={isMobile ? [0.5, 2.3, 0.2] : [-9, 0.9, -5]} rotation={isMobile ? [-0, 1, 0] : [-0.01, 1, 0]} />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 450px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas frameloop="always" shadows dpr={[1]} camera={{ position: [20, 3, 5], fov: 20 }} gl={{ preserveDrawingBuffer: true, alpha: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
