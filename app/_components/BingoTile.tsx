"use client";

type BingoTileProps = {
    text: string;
    checked: boolean;
    onToggle: () => void;
};

export default function BingoTile({
    text,
    checked,
    onToggle,
    }: BingoTileProps) {
    return (
        <button
        onClick={onToggle}
        className={`bingo-tile ${checked ? "checked" : ""}`}
        >
        {text}
        </button>
    );
}