import { useState } from 'react'
import { Square } from './components/Square.jsx'
import { ResetButton } from './components/ResetButton.jsx'

const TURNS = {
  X: '❌',
  O: '⭕'
}

function App() {
  const [turn, setTurn] = useState(TURNS.X)
    
  const [board, setBoard] = useState(Array(9).fill(null))
    
    
  const updateBoard = (index) => {
    if (!board[index]) {
      const newTurn = (turn === TURNS.X) ? TURNS.O : TURNS.X
      setTurn(newTurn)
      
      const newBoard = Array.from(board)
      newBoard[index] = turn
      setBoard(newBoard)
    }
  }

  const resetGame = () => {
    setTurn(TURNS.X)
    setBoard(Array(9).fill(null))
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <ResetButton resetGame={resetGame}>Reiniciar Juego</ResetButton>
      <section className='gameBoard'>
        {board.map((board, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              { board }
            </Square>
          );
          })}
      </section>
      <section className='turns'>
        <Square isSelected={turn===TURNS.X}>{ TURNS.X }</Square>
        <Square isSelected={turn===TURNS.O}>{ TURNS.O }</Square>
      </section>
    </>
  )
}
export default App
