"use client";

import { useEffect, useState } from "react";

import BingoTile from "./BingoTile";
import { generateBoard, BingoTileData } from "./TileObjects";

export default function BingoBoard() {
  const [tiles, setTiles] = useState<BingoTileData[]>([]);

  useEffect(() => {
    setTiles(generateBoard());
  }, []);

  function toggleTile(id: number) {
    setTiles((prev) =>
      prev.map((tile) =>
        tile.id === id && !tile.free
          ? { ...tile, checked: !tile.checked }
          : tile
      )
    );
  }

  return (
    <div className="bingo-board">
      {tiles.map((tile) => (
        <BingoTile
          key={tile.id}
          text={tile.text}
          checked={tile.checked}
          onToggle={() => toggleTile(tile.id)}
        />
      ))}
    </div>
  );
}