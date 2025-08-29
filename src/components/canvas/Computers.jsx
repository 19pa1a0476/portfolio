import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene-mobile.glb");

  // ✅ Debugging: force wireframe + red material
  computer.scene.traverse((child) => {
    if (child.isMesh) {
      // Try wireframe first
      // child.material.wireframe = true;

      // Or force basic red material
      child.material = new THREE.MeshBasicMaterial({ color: "red" });
    }
  });

  return (
    <primitive
      object={computer.scene}
      scale={1}              // keep it simple
      position={[0, -1, 0]}  // center-ish
      rotation={[0, 0, 0]}   // no tilt
    />
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
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
    <Canvas
      shadows
      style={{ background: "pink" }}
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 50, position: [0, 1, 5] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={true} />

        {/* Strong lights for testing */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <Computers isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
