"use client";

import { useCallback, useEffect, useState } from "react";
import GlassCard from "../../../components/GlassCard";

const EMPTY_BOARD = Array(9).fill(null);
const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

const checkWinner = (board) => {
  for (const [a, b, c] of WIN_PATTERNS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  if (!board.includes(null)) return "draw";
  return null;
};

const minimax = (board, isMaximizing) => {
  const result = checkWinner(board);

  if (result === "O") return 1;
  if (result === "X") return -1;
  if (result === "draw") return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i += 1) {
      if (board[i] === null) {
        board[i] = "O";
        const score = minimax(board, false);
        board[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  }

  let bestScore = Infinity;
  for (let i = 0; i < 9; i += 1) {
    if (board[i] === null) {
      board[i] = "X";
      const score = minimax(board, true);
      board[i] = null;
      bestScore = Math.min(score, bestScore);
    }
  }
  return bestScore;
};

export default function TicTacToe() {
  const [board, setBoard] = useState(EMPTY_BOARD);
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState("X");

  const bestMove = useCallback(() => {
    let bestScore = -Infinity;
    let move;

    for (let i = 0; i < 9; i += 1) {
      if (board[i] === null) {
        const nextBoard = [...board];
        nextBoard[i] = "O";
        const score = minimax(nextBoard, false);
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }

    return move;
  }, [board]);

  const handleClick = (i) => {
    if (board[i] || winner || turn !== "X") return;

    const nextBoard = [...board];
    nextBoard[i] = "X";
    setBoard(nextBoard);

    const result = checkWinner(nextBoard);
    if (result) {
      setWinner(result);
    } else {
      setTurn("O");
    }
  };

  useEffect(() => {
    if (turn !== "O" || winner) return undefined;

    const timer = setTimeout(() => {
      const move = bestMove();
      if (move !== undefined) {
        const nextBoard = [...board];
        nextBoard[move] = "O";
        setBoard(nextBoard);

        const result = checkWinner(nextBoard);
        if (result) {
          setWinner(result);
        } else {
          setTurn("X");
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [bestMove, board, turn, winner]);

  const resetGame = () => {
    setBoard(EMPTY_BOARD);
    setWinner(null);
    setTurn("X");
  };

  return (
    <div className="container py-5">
      <h1 className="section-title">Tic Tac Toe</h1>

      <GlassCard className="text-center">
        {winner === "draw" ? (
          <h2>It&apos;s a Draw!</h2>
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
