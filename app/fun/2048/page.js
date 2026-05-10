"use client";

import { useCallback, useEffect, useState } from "react";
import GlassCard from "../../../components/GlassCard";

const emptyGrid = () => Array.from({ length: 4 }, () => Array(4).fill(0));

const cloneGrid = (grid) => grid.map((row) => [...row]);

const addTile = (grid) => {
  const nextGrid = cloneGrid(grid);
  const spots = [];

  nextGrid.forEach((row, rIdx) =>
    row.forEach((val, cIdx) => {
      if (val === 0) spots.push([rIdx, cIdx]);
    })
  );

  if (spots.length === 0) return nextGrid;

  const [r, c] = spots[Math.floor(Math.random() * spots.length)];
  nextGrid[r][c] = 2;
  return nextGrid;
};

const createInitialGrid = () => addTile(addTile(emptyGrid()));

const slide = (row) => row.filter(Boolean).concat(Array(4).fill(0)).slice(0, 4);

const combine = (row) => {
  const nextRow = [...row];
  for (let i = 0; i < 3; i += 1) {
    if (nextRow[i] && nextRow[i] === nextRow[i + 1]) {
      nextRow[i] *= 2;
      nextRow[i + 1] = 0;
    }
  }
  return nextRow;
};

const rotate = (matrix) => matrix[0].map((_, i) => matrix.map((row) => row[i]));

export default function Game2048() {
  const [grid, setGrid] = useState(createInitialGrid);

  const move = useCallback((dir) => {
    setGrid((currentGrid) => {
      let nextGrid = cloneGrid(currentGrid);

      for (let i = 0; i < dir; i += 1) nextGrid = rotate(nextGrid);

      nextGrid = nextGrid.map((row) => slide(combine(slide(row))));
      for (let i = 0; i < 3; i += 1) nextGrid = rotate(nextGrid);

      const changed = nextGrid.some((row, rowIdx) =>
        row.some((value, colIdx) => value !== currentGrid[rowIdx][colIdx])
      );

      return changed ? addTile(nextGrid) : currentGrid;
    });
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") move(0);
      if (e.key === "ArrowUp") move(1);
      if (e.key === "ArrowRight") move(2);
      if (e.key === "ArrowDown") move(3);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [move]);

  return (
    <div className="container py-5">
      <h1 className="section-title">2048 Puzzle</h1>

      <GlassCard>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 80px)",
            gap: "10px",
            margin: "20px auto",
          }}
        >
          {grid.flat().map((v, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                height: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5rem",
                color: "#fff",
                background: v === 0
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(125,249,255,0.4)",
              }}
            >
              {v || ""}
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
