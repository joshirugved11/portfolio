"use client";

import { useState, useEffect } from "react";
import GlassCard from "../../../components/GlassCard";

export default function Game2048() {
  const empty = () => Array(4).fill().map(() => Array(4).fill(0));

  const [grid, setGrid] = useState(empty());

  const addTile = (g) => {
    const spots = [];
    g.forEach((row, rIdx) =>
      row.forEach((val, cIdx) => {
        if (val === 0) spots.push([rIdx, cIdx]);
      })
    );
    if (spots.length === 0) return g;
    const [r, c] = spots[Math.floor(Math.random() * spots.length)];
    g[r][c] = 2;
    return g;
  };

  useEffect(() => {
    let g = addTile(empty());
    g = addTile(g);
    setGrid([...g]);
  }, []);

  const slide = (row) => row.filter(v => v).concat(Array(4).fill(0)).slice(0,4);
  const combine = (row) => {
    for (let i=0;i<3;i++){
      if (row[i] && row[i] === row[i+1]) {
        row[i] *= 2;
        row[i+1] = 0;
      }
    }
    return row;
  };

  const move = (dir) => {
    let g = JSON.parse(JSON.stringify(grid));

    const rotate = (m) => m[0].map((_, i) => m.map(row => row[i]));

    for (let i=0;i<dir;i++) g = rotate(g);

    g = g.map(r => combine(slide(r)));
    for (let i=0;i<3;i++) g = rotate(g);

    setGrid(addTile(g));
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") move(0);
      if (e.key === "ArrowUp") move(1);
      if (e.key === "ArrowRight") move(2);
      if (e.key === "ArrowDown") move(3);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [grid]);

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
