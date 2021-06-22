import React, { Suspense } from "react";

// 3js
import { Canvas } from "react-three-fiber";
// import { Loader } from "drei";
import { OrbitControls } from "drei";
import Lights from "components/app/three/lights";
import IJNtext from "components/app/three/model/IJNtext";

export default function home() {
  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [0, 0, 7], fov: 40 }}
      >
        <Lights />
        <Suspense fallback={null}>
          <IJNtext />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </>
  );
}
