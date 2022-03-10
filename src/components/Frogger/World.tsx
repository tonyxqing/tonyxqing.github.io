import React from "react";
import "./World.scss";
import { Canvas } from "@react-three/fiber";
import { MeshAnim, Anim } from "./MeshAnim";
import Box from "./Box";

function AnimCanvas({ children }: { children: JSX.Element }) {
  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      {children}
    </Canvas>
  );
}

function World({ children }: { children: JSX.Element }) {
  return (
    <div className="world">
      <div className="anim">
        <AnimCanvas children={children} />
      </div>
    </div>
  );
}

export default World;
