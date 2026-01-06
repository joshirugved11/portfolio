"use client";

import { useEffect, useState } from "react";
import GlassCard from "../../../components/GlassCard";

export default function SnakeGame() {
  const size = 20;
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([5, 5]);
  const [dir, setDir] = useState([0, 1]);
  const [gameOver, setGameOver] = useState(false);

  const moveFood = () => {
    setFood([
      Math.floor(Math.random() * size),
      Math.floor(Math.random() * size),
    ]);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowUp") setDir([-1, 0]);
      if (e.key === "ArrowDown") setDir([1, 0]);
      if (e.key === "ArrowLeft") setDir([0, -1]);
      if (e.key === "ArrowRight") setDir([0, 1]);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];
        const newHead = [head[0] + dir[0], head[1] + dir[1]];

        if (
          newHead[0] < 0 ||
          newHead[1] < 0 ||
          newHead[0] >= size ||
          newHead[1] >= size ||
          prev.some((p) => p[0] === newHead[0] && p[1] === newHead[1])
        ) {
          setGameOver(true);
          return prev;
        }

        let newSnake = [newHead, ...prev];
        if (newHead[0] === food[0] && newHead[1] === food[1]) {
          moveFood();
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [dir, food]);

  return (
    <div className="container py-5">
      <h1 className="section-title">Snake Game</h1>

      <GlassCard>
        {gameOver && <h2>Game Over!</h2>}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${size}, 20px)`
          }}
        >
          {Array.from({ length: size }).map((_, r) =>
            Array.from({ length: size }).map((_, c) => {
              const isSnake = snake.some((p) => p[0] === r && p[1] === c);
              const isFood = food[0] === r && food[1] === c;

              return (
                <div
                  key={`${r}-${c}`}
                  style={{
                    width: 20,
                    height: 20,
                    background: isSnake
                      ? "rgba(125,249,255,0.8)"
                      : isFood
                      ? "#ff5959"
                      : "rgba(255,255,255,0.05)",
                    borderRadius: 4,
                  }}
                ></div>
              );
            })
          )}
        </div>
      </GlassCard>
    </div>
  );
}
