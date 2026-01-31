import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./CanvasLoader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/pc_optimized.glb", true);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        // 1. Bumping scale to 1.5 (much bigger)
        scale={isMobile ? 0.9 : 1.5}

        // 2. Adjust Y-position (middle value) 
        // If it's cut at the bottom, make this LESS negative (e.g., -2.5)
        // If it's cut at the top, make this MORE negative (e.g., -3.5)
        position={isMobile ? [0, -3, -2.2] : [0, -3.2, -1.5]}

        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
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
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      // 1. Move position.z to 15 (further back) 
      // 2. Increase fov to 45 (wide angle to prevent clipping)
      camera={{ position: [20, 3, 15], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          // 3. This centers the camera's focus on the model's actual center
          target={[0, -0.5, 0]}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
