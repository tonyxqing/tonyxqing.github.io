import { MeshAnim } from "./MeshAnim";
import noise, { perlin3 } from "./noise";
import { randomSin } from "./math";
import { vector, color } from "./types";

export function GrowingExp({ position }: { position: vector }) {
  const zFromCoord = (x: number, y: number, t: number) => {
    let cyc = Math.sin(t / 250) - 0.5;
    if (cyc > 0) {
      return -cyc * 2 * Math.exp((-1 * (x ** 2 + y ** 2) ** 0.75) / cyc);
    }
    return -cyc * 2 * Math.exp((-1 * (x ** 2 + y ** 2) ** 0.75) / -cyc);
  };

  const colorFromCoord = (x: number, y: number, z: number, t: number) => {
    let r = Math.sqrt(x ** 2 + y ** 2);

    return {
      b: r / 75,
      g: z / 5,
      r: z,
    };
  };

  return (
    <MeshAnim
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
      grid={{
        width: 100,
        height: 100,
        sep: 0.2,
      }}
      zFromCoord={zFromCoord}
      colorFromCoord={colorFromCoord}
      anim={{
        init: 0,
        update: (t: number) => {
          return t + 1;
        },
      }}
    />
  );
}

export function Ripple({ position }: { position: [number, number, number] }) {
  const zFromCoord = (x: number, y: number, t: number) => {
    return Math.sin(0.1 * (x ** 2 + y ** 2 + t));
  };

  const colorFromCoord = (x: number, y: number, z: number, t: number) => {
    return { r: 0.2 * Math.cos(z), g: z / 5, b: 0.2 }; // r, g, b
  };
  return (
    <MeshAnim
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
      grid={{
        width: 100,
        height: 100,
        sep: 0.1,
      }}
      zFromCoord={zFromCoord}
      colorFromCoord={colorFromCoord}
      anim={{
        init: 0,
        update: (t: number) => {
          return t + 0.1;
        },
      }}
    />
  );
}

export function Terrain({
  position,
  rotation,
}: {
  position: vector;
  rotation: vector;
}) {
  const seed = Math.floor(Math.random() * 2 ** 16);
  noise.seed(seed);

  const sampleNoise = (x: number, y: number, z: number) => {
    let scale = 1 / 8;
    let octaves = 20;
    let persistence = 0.6;
    let lacunarity = 2;

    let amp = 1;
    let freq = 1;

    let v = 0;
    for (let i = 0; i < octaves; i++) {
      v += amp * perlin3(x * freq * scale, y * freq * scale, z);
      amp *= persistence;
      freq *= lacunarity;
    }

    return v;
  };

  const zFromCoord = (x: number, y: number, t: number) => {
    return sampleNoise(x, y, t);
  };

  const colorFromCoord = (x: number, y: number, z: number, t: number) => {
    const localRandom = randomSin();
    const variation = () => {
      return localRandom() * 0.01;
    };

    return {
      r: z + variation(),
      g: z / 5 + variation(),
      b: Math.sqrt(x ** 2 + y ** 2) / 75 + variation(),
    };
  };

  const update = (t: number) => {
    return t + 0.002;
  };

  return (
    <MeshAnim
      position={position}
      rotation={rotation}
      grid={{
        width: 100,
        height: 100,
        sep: 0.2,
      }}
      zFromCoord={zFromCoord}
      colorFromCoord={colorFromCoord}
      anim={{
        init: 0,
        update,
      }}
    />
  );
}
