import { getTiles } from "@/utils/bingo-api";
import { Suspense } from "react";

async function TilesData() {
  const tiles = await getTiles();

  return (
    <div>
      {tiles?.map(tile => (
        <p key={tile.id}>{tile.text}</p>
      ))}
    </div>
  );
}


export default function Tiles() {
  return (
    <Suspense fallback={<div>Loading tiles...</div>}>
      <TilesData />
    </Suspense>
  );
}