"use client";

import { useState, useEffect } from "react";
import GlassCard from "../../../components/GlassCard";

export default function MemoryGame() {
  const icons = ["🔥","⭐","💎","🎵","⚡","🌙"];
  const pairs = [...icons, ...icons].sort(() => Math.random() - 0.5);

  const [cards, setCards] = useState(
    pairs.map((val) => ({ val, flipped: false, matched: false }))
  );
  const [flipped, setFlipped] = useState([]);
  const [moves, setMoves] = useState(0);

  const flip = (i) => {
    if (cards[i].flipped || cards[i].matched) return;
    const newCards = [...cards];
    newCards[i].flipped = true;
    setCards(newCards);
    setFlipped([...flipped, i]);
  };

  useEffect(() => {
    if (flipped.length === 2) {
      setMoves((m) => m + 1);
      const [a, b] = flipped;
      const newCards = [...cards];

      if (cards[a].val === cards[b].val) {
        newCards[a].matched = true;
        newCards[b].matched = true;
      } else {
        setTimeout(() => {
          newCards[a].flipped = false;
          newCards[b].flipped = false;
          setCards([...newCards]);
        }, 700);
      }

      setTimeout(() => setFlipped([]), 600);
      setCards(newCards);
    }
  }, [flipped]);

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
