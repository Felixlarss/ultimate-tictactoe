import { useState } from 'react'
import '../App.css'

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let line of lines) {
    const [a, b, c] = line

    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return board[a] // "X" eller "O"
    }
  }

  return null
}

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)

  const winner = calculateWinner(board)
  const isDraw = board.every(Boolean) && !winner

  function handleClick(i) {
    if (board[i] || winner) return

    const nextBoard = board.slice()
    nextBoard[i] = isXNext ? 'X' : 'O'

    setBoard(nextBoard)
    setIsXNext(!isXNext)
  }

  function resetGame() {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
  }

  return (
    <div className="flex flex-col items-center gap-4 relative">
      {/* Bräde */}
      <div className="grid grid-cols-3 bg-gray-100 space-x-2 space-y-2 pl-2 pt-2">
        {board.map((value, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="
              size-20
              flex items-center justify-center
              leading-none
              hover:bg-gray-100
            "
          >
            <p className="text-8xl font-bold">
            {value}
            </p>
          </button>
        ))}
      </div>
 {winner && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/90 rounded-2xl">
          <span className="text-white text-9xl font-bold">{winner}</span>
        </div>
      )}
    </div>
  )
}

export default TicTacToe
