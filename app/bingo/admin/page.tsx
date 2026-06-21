import { getTiles } from "@/utils/bingo-api";
import { Suspense } from "react";

import ToggleActiveButton from "@/components/bingo/active-toggle";

async function TilesData() {
  const tiles = await getTiles();

  return (
    <div>
      <ul>
        {tiles?.map(tile => (
        <li key={tile.id}>
          <p>
            <ToggleActiveButton id={tile.id} active={tile.active} />
            {tile.text}
          </p>
        </li>
        ))}
      </ul>
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