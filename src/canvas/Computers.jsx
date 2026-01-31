import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

/**
 * 1. Model Sub-Component
 * Hooks like useGLTF must be used in a child of <Canvas>
 */
const Model = ({ isMobile }) => {
  const { scene } = useGLTF("/pc_optimized.glb", true);
  
  return (
    <primitive 
      object={scene} 
      scale={isMobile ? 0.9 : 1.5}
      position={isMobile ? [0, -3, -2.2] : [0, -3.2, -1.5]}
      rotation={[-0.01, -0.2, -0.1]} 
    />
  );
}

/**
 * 2. Lighting and Scene setup
 * Focused on the middle of the model
 */
const Computers = ({ isMobile }) => {
  return (
    <mesh>
      {/* Overall ambient light */}
      <hemisphereLight intensity={1.5} groundColor='black' />
      
      {/* Focused Spotlight: Positioned at X:0 to hit the middle */}
      <spotLight
        position={[0, 40, 10]} 
        angle={0.15}
        penumbra={1}
        intensity={Math.PI * 2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      
      {/* Front Fill Light: Hits the screen and keyboard center */}
      <pointLight 
        position={[0, 0, 5]} 
        intensity={Math.PI} 
      />

      {/* Top Light: Adds shine to the top edges */}
      <pointLight 
        position={[0, 10, 0]} 
        intensity={0.8} 
      />

      <Model isMobile={isMobile} />
    </mesh>
  );
};

/**
 * 3. Main Export Component
 * Handles the environment and Canvas engine
 */
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
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      // Position the camera to look at the center [0,0,0]
      camera={{ position: [20, 3, 15], fov: 45 }}
      gl={{ 
        preserveDrawingBuffer: true, 
        powerPreference: "high-performance",
        antialias: true 
      }}
    >
      {/* The Loader and 3D logic must be inside Suspense */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          // Focus target is the center of the laptop
          target={[0, -0.5, 0]}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      
      {/* Boosts performance by pre-calculating the scene */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;