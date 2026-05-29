export const tilePool = [
    "Mold",
    "Pneumonia",
    "Hurricane",
    "Shocked Baby",
    "Lost House",
    "Fire",
    "Electricity",
    "Explosion",
    "Stabbing",
    "Burns",
    "EKG",
    "Mutilation(TOO MUCH?)",
    "Homeless Shelter",
    "Missing Stairs",
    "Car Accident",
    "Freak Highway Accident",
    "Train Collision",
    "Nissen Fundoplication",
    "Tetralogy of Fallot",
    "Heart Reconstruction",
    "Valve Replacement",
    "Cellulitis",
    "Right Bundle Branch Block",
    "Pleural Effusion",
    "Water Sports",
]

export type BingoTileData = {
  id: number;
  text: string;
  checked: boolean;
  free?: boolean;
};

export function generateBoard(): BingoTileData[] {
  const shuffled = shuffleArray(tilePool);

  const selected = shuffled.slice(0, 24);

  const board: BingoTileData[] = selected.map((text, index) => ({
    id: index,
    text,
    checked: false,
  }));

  // Insert free space in center
  board.splice(12, 0, {
    id: 999,
    text: "FREE",
    checked: true,
    free: true,
  });

  return board;
}

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}