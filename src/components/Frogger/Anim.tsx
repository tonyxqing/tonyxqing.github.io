import React, { useMemo } from "react";
import * as THREE from "three";

function MeshAnim({
  position,
  rotation,
  grid: { width, height, sep },
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  grid: { width: number; height: number; sep: number };
}) {
  //vertex buffer
  let { positions, colors, normals } = useMemo(() => {
    let positions = [],
      colors = [],
      normals = [];

    for (let yi = 0; yi < height; yi++) {
      for (let xi = 0; xi < width; xi++) {
        let x = sep * (xi - (width - 1) / 2);
        let y = sep * (yi - (height + 1) / 2);
        let z = 0;

        positions.push(x, y, z);

        let color = {
          r: 1,
          g: 1,
          b: 1,
        };

        colors.push(color.r, color.g, color.b);
        normals.push(0, 0, 1);
      }
    }

    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors),
      normals: new Float32Array(normals),
    };
  }, [width, height, sep]);

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
  console.log(positions, colors, normals, indicies);

  return (
    <mesh position={position} rotation={rotation}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={["attributes", "positions"]}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "colors"]}
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "normals"]}
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
        color={"#820263"}
        side={THREE.DoubleSide}
        wireframe={true}
      />
    </mesh>
  );
}

export function Anim() {
  return (
    <MeshAnim
      position={[1, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      grid={{ width: 100, height: 100, sep: 0.2 }}
    />
  );
}
