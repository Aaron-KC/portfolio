import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

// 1. Pass isMobile as a prop to the Model
const Model = ({ isMobile }) => {
  const { scene } = useGLTF("/pc_optimized.glb", true);
  
  return (
    <primitive 
      object={scene} 
      // Fixed typo: cale -> scale
      scale={isMobile ? 0.9 : 1.5}
      position={isMobile ? [0, -3, -2.2] : [0, -3.2, -1.5]}
      rotation={[-0.01, -0.2, -0.1]} 
    />
  );
}

const Computers = ({ isMobile }) => {
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={Math.PI}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight intensity={Math.PI} />
      {/* 2. Pass the prop down one more level */}
      <Model isMobile={isMobile} />
    </mesh>
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
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 15], fov: 45 }}
      gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={[0, -0.5, 0]}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;