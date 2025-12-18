import { useState } from 'react'
import TicTacToe from './components/tictactoe.jsx'
import './App.css'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  return (
    <div className="grid grid-cols-3 rounded-2xl border-5">
    {board.map((value, i) => (
      <TicTacToe />
    ))}
    </div>
  )
}

export default App
