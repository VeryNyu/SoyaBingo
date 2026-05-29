"use client";

import { useState } from "react";
import BingoTile from "./BingoTile";

const initialTiles = [
  { id: 1, text: "Mold", checked: false },
  { id: 2, text: "Pneumonia", checked: false },
  { id: 3, text: "Hurricane", checked: false },
  { id: 4, text: "Shocked Baby", checked: false },
  { id: 5, text: "Lost House", checked: false },
  { id: 6, text: "Fire", checked: false },
  { id: 7, text: "Electricity", checked: false },
  { id: 8, text: "Explosion", checked: false },
  { id: 9, text: "Stabbing", checked: false },
  { id: 10, text: "Burns", checked: false },
  { id: 11, text: "EKG", checked: false },
  { id: 12, text: "Mutilation(TOO MUCH?)", checked: false },
  { id: 13, text: "Homeless Shelter", checked: false },
  { id: 14, text: "Missing Stairs", checked: false },
  { id: 15, text: "Car Accident", checked: false },
  { id: 16, text: "Freak Highway Accident", checked: false },
  { id: 17, text: "Train Collision", checked: false },
  { id: 18, text: "Nissen Fundoplication", checked: false },
  { id: 19, text: "Tetralogy of Fallot", checked: false },
  { id: 20, text: "Heart Reconstruction", checked: false },
  { id: 21, text: "Valve Replacement", checked: false },
  { id: 22, text: "Cellulitis", checked: false },
  { id: 23, text: "Right Bundle Branch Block", checked: false },
  { id: 24, text: "Pleural Effusion", checked: false },
  { id: 25, text: "Water Sports", checked: false },
];

export default function BingoBoard() {
  const [tiles, setTiles] = useState(initialTiles);

  function toggleTile(id: number) {
    setTiles((prev) =>
      prev.map((tile) =>
        tile.id === id
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