import React, { useMemo } from "react";
import World from "./Frogger/World";
import { Link } from "react-router-dom";
import { GrowingExp, Ripple, Terrain } from "./Frogger/MeshTypes";
import { useParams } from "react-router-dom";

// usinfg react-three-fiber which allows us to use three.js more declaritvely.
export default function Frogger() {
  const meshtype = useParams().MeshType;
  const mesh = useMemo(() => {
    return meshtype === "GrowingExp" ? (
      <World children={<GrowingExp position={[0, 0, 0]} />} />
    ) : meshtype === "Ripple" ? (
      <World children={<Ripple position={[0, 0, 0]} />} />
    ) : meshtype === "Terrain" ? (
      <World
        children={
          <Terrain position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        }
      />
    ) : (
      <></>
    );
  }, [meshtype]);
  return (
    <div>
      <div>
        <Link to="/Test/GrowingExp">GrowingExp</Link>
        <Link to="/Test/Ripple"> Ripple </Link>
        <Link to="/Test/Terrain"> Terrain </Link>
      </div>
      {mesh}
    </div>
  );
}
