"use client";

import { useState } from "react";
import GlassCard from "../../../components/GlassCard";

export default function TicTacToe() {
  const empty = Array(9).fill(null);
  const [board, setBoard] = useState(empty);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);

  const checkWinner = (b) => {
    const wins = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (let [a,b2,c] of wins) {
      if (b[a] && b[a] === b[b2] && b[a] === b[c]) {
        return b[a];
      }
    }
    return null;
  };

  const play = (i) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = turn;
    const win = checkWinner(newBoard);
    setBoard(newBoard);
    if (win) setWinner(win);
    else setTurn(turn === "X" ? "O" : "X");
  };

  const reset = () => {
    setBoard(empty);
    setWinner(null);
    setTurn("X");
  };

  return (
    <div className="container py-5">
      <h1 className="section-title">Tic Tac Toe</h1>

      <GlassCard className="text-center">
        {winner ? (
          <h2>{winner} Wins!</h2>
        ) : (
          <h2>Turn: {turn}</h2>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 100px)",
            gap: "10px",
            justifyContent: "center",
            margin: "20px auto"
          }}
        >
          {board.map((val, i) => (
            <button
              key={i}
              onClick={() => play(i)}
              className="btn btn-glass"
              style={{
                height: "100px",
                fontSize: "2rem",
                color: "#fff",
              }}
            >
              {val}
            </button>
          ))}
        </div>

        <button className="btn btn-glass mt-3" onClick={reset}>
          Reset Game
        </button>
      </GlassCard>
    </div>
  );
}
