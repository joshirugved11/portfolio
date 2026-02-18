"use client";

import { useState, useEffect } from "react";
import GlassCard from "../../../components/GlassCard";

export default function TicTacToe() {
  const emptyBoard = Array(9).fill(null);

  const [board, setBoard] = useState(emptyBoard);
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState("X"); // Human = X

  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  const checkWinner = (b) => {
    for (let [a, b2, c] of winPatterns) {
      if (b[a] && b[a] === b[b2] && b[a] === b[c]) {
        return b[a];
      }
    }
    if (!b.includes(null)) return "draw";
    return null;
  };

  // 🔥 MINIMAX ALGORITHM
  const minimax = (newBoard, isMaximizing) => {
    const result = checkWinner(newBoard);

    if (result === "O") return 1;   // Computer win
    if (result === "X") return -1;  // Human win
    if (result === "draw") return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (newBoard[i] === null) {
          newBoard[i] = "O";
          let score = minimax(newBoard, false);
          newBoard[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (newBoard[i] === null) {
          newBoard[i] = "X";
          let score = minimax(newBoard, true);
          newBoard[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const bestMove = () => {
    let bestScore = -Infinity;
    let move;

    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        const newBoard = [...board];
        newBoard[i] = "O";
        let score = minimax(newBoard, false);
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }

    return move;
  };

  const handleClick = (i) => {
    if (board[i] || winner || turn !== "X") return;

    const newBoard = [...board];
    newBoard[i] = "X";
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
    } else {
      setTurn("O");
    }
  };

  // Computer move
  useEffect(() => {
    if (turn === "O" && !winner) {
      const timer = setTimeout(() => {
        const move = bestMove();
        if (move !== undefined) {
          const newBoard = [...board];
          newBoard[move] = "O";
          setBoard(newBoard);

          const result = checkWinner(newBoard);
          if (result) {
            setWinner(result);
          } else {
            setTurn("X");
          }
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [turn, board, winner]);

  const resetGame = () => {
    setBoard(emptyBoard);
    setWinner(null);
    setTurn("X");
  };

  return (
    <div className="container py-5">
      <h1 className="section-title">Tic Tac Toe</h1>

      <GlassCard className="text-center">
        {winner === "draw" ? (
          <h2>It's a Draw!</h2>
        ) : winner ? (
          <h2>{winner === "X" ? "You Win! 🎉" : "Computer Wins 🤖"}</h2>
        ) : (
          <h2>Turn: {turn === "X" ? "You (X)" : "Computer (O)"}</h2>
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
              onClick={() => handleClick(i)}
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

        <button className="btn btn-glass mt-3" onClick={resetGame}>
          Reset Game
        </button>
      </GlassCard>
    </div>
  );
}
