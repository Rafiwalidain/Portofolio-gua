import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
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
      {/* <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={10} intensity={10} castShadow={false} shadow-mapSize={1024} /> */}
      <pointLight intensity={20} />
      <primitive object={computer.scene} scale={isMobile ? 0.5 : 1} position={isMobile ? [1, -3, 0.5] : [2, -1.4, -5]} rotation={[-0.01, 1, 0]} />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas frameloop="always" shadows dpr={[1]} camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
