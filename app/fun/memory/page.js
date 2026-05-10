"use client";

import { useEffect, useRef, useState } from "react";
import GlassCard from "../../../components/GlassCard";

const icons = ["🔥", "⭐", "💎", "🎵", "⚡", "🌙"];

const shuffleCards = () => {
  const pairs = [...icons, ...icons];
  for (let i = pairs.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
  }
  return pairs.map((val) => ({ val, flipped: false, matched: false }));
};

export default function MemoryGame() {
  const [cards, setCards] = useState(shuffleCards);
  const [flipped, setFlipped] = useState([]);
  const [moves, setMoves] = useState(0);
  const resetTimeoutRef = useRef(null);

  const flip = (i) => {
    if (flipped.length === 2) return;

    const currentFlipped = flipped;
    if (currentFlipped.includes(i)) return;

    const nextFlipped = [...currentFlipped, i];

    setCards((currentCards) => {
      if (currentCards[i].flipped || currentCards[i].matched) return currentCards;

      const nextCards = [...currentCards];
      nextCards[i] = { ...nextCards[i], flipped: true };

      if (nextFlipped.length === 2) {
        const [a, b] = nextFlipped;
        setMoves((m) => m + 1);

        if (nextCards[a].val === nextCards[b].val) {
          nextCards[a] = { ...nextCards[a], matched: true };
          nextCards[b] = { ...nextCards[b], matched: true };
          setFlipped([]);
        } else {
          setFlipped(nextFlipped);
          resetTimeoutRef.current = setTimeout(() => {
            setCards((latestCards) => {
              const resetCards = [...latestCards];
              resetCards[a] = { ...resetCards[a], flipped: false };
              resetCards[b] = { ...resetCards[b], flipped: false };
              return resetCards;
            });
            setFlipped([]);
          }, 700);
        }
      } else {
        setFlipped(nextFlipped);
      }

      return nextCards;
    });
  };

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="container py-5">
      <h1 className="section-title">Memory Flip Game</h1>

      <GlassCard>
        <h4>Moves: {moves}</h4>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 80px)",
            gap: "10px",
            justifyContent: "center",
            marginTop: "20px"
          }}
        >
          {cards.map((c, i) => (
            <button
              key={i}
              onClick={() => flip(i)}
              className="btn btn-glass"
              style={{
                height: "80px",
                fontSize: "2rem",
                color: "#fff",
              }}
            >
              {c.flipped || c.matched ? c.val : "❔"}
            </button>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
