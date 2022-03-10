import React from "react";
import "./World.scss";
import { Canvas } from "@react-three/fiber";
import { Anim } from "./Anim";
import Box from "./Box";

function AnimCanvas() {
  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <Anim />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1, 0, 0]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
}

function World() {
  return (
    <div className="world">
      <div className="anim">
        <AnimCanvas />
      </div>
    </div>
  );
}

export default World;
