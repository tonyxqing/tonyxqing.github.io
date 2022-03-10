import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import Box from "./Box";
import { vector, color } from "./types";

export function MeshAnim({
  position,
  rotation,
  grid: { width, height, sep },
  zFromCoord,
  colorFromCoord,
  anim: { init, update },
}: {
  position: vector;
  rotation: vector;
  grid: { width: number; height: number; sep: number };
  zFromCoord: (x: number, y: number, t: number) => number;
  colorFromCoord: (x: number, y: number, z: number, t: number) => color;

  anim: {
    init: number;
    update: (t: number) => number;
  };
}) {
  const mesh = useRef<JSX.IntrinsicElements>();
  let t = init;
  //vertex buffer
  let { positions, colors, normals } = useMemo(() => {
    let positions = [],
      colors = [],
      normals = [];

    for (let yi = 0; yi < height; yi++) {
      for (let xi = 0; xi < width; xi++) {
        let x = sep * (xi - (width - 1) / 2);
        let y = sep * (yi - (height + 1) / 2);
        let z = zFromCoord(x, y, t);
        let color = colorFromCoord(x, y, z, t);

        positions.push(x, y, z);

        colors.push(color.r, color.g, color.b);
        normals.push(0, 0, 1);
      }
    }

    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors),
      normals: new Float32Array(normals),
    };
  }, [width, height, sep, zFromCoord, colorFromCoord]);

  let indicies = useMemo(() => {
    let indicies = [];
    let i = 0;
    for (let yi = 0; yi < height - 1; yi++) {
      for (let xi = 0; xi < width - 1; xi++) {
        indicies.push(i, i + 1, i + width + 1);
        indicies.push(i + width + 1, i + width, i);
        i++;
      }
      i++;
    }
    return new Uint16Array(indicies);
  }, [width, height]);

  let posRef = useRef(),
    colorRef = useRef();

  useFrame(() => {
    t = update(t);

    positions = posRef.current!;
    colors = colorRef.current!;
    console.log(positions, colors);
    let i = 0;
    for (let yi = 0; yi < height; yi++) {
      for (let xi = 0; xi < width; xi++) {
        positions[i + 2] = zFromCoord(positions[i], positions[i + 1], t);

        let c = colorFromCoord(
          positions[i],
          positions[i + 1],
          positions[i + 2],
          t
        );
        colors[i] = c.r;
        colors[i + 1] = c.g;
        colors[i + 2] = c.b;
        i += 3;
      }
    }

    (posRef.current as any).needsUpdate = true;
    (colorRef.current as any).needsUpdate = true;
  });
  return (
    <mesh ref={mesh} position={position} rotation={rotation}>
      <bufferGeometry>
        <bufferAttribute
          ref={posRef}
          attachObject={["attributes", "position"]}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          ref={colorRef}
          attachObject={["attributes", "color"]}
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "normal"]}
          array={normals}
          count={normals.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="index"
          array={indicies}
          count={indicies.length}
          itemSize={1}
        />
      </bufferGeometry>
      <meshStandardMaterial
        vertexColors
        side={THREE.DoubleSide}
        // wireframe={true}
      />
    </mesh>
  );
}

export function Anim() {
  return (
    <>
      {/* <MeshAnim
        position={[1, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        grid={{ width: 100, height: 100, sep: 0.2 }}
      /> */}
      <Box position={[-1, 0, 0]} />
      <Box position={[1, 0, 0]} />
    </>
  );
}

export default MeshAnim;
