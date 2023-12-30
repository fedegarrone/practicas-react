import { useState } from 'react'
import { Square } from './components/Square.jsx'
import { ResetButton } from './components/ResetButton.jsx'
import confetti from 'canvas-confetti'
import { WinnerModal } from './components/WinnerModal.jsx'


const TURNS = {
  X: '❌',
  O: '⭕'
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [turn, setTurn] = useState(() => {
    const prevTurn = window.localStorage.getItem('turn')
    if (prevTurn) return prevTurn

    return TURNS.X
  })
  
  const [board, setBoard] = useState(() => {
    const prevBoard = window.localStorage.getItem('board')
    console.log(prevBoard)
    if (prevBoard) return JSON.parse(prevBoard)

    return Array(9).fill(null)
  })
  
  const [winner, setWinner] = useState(() => {
    const prevWinner = window.localStorage.getItem('winner')
    if(prevWinner !== 'null') return prevWinner
    
    return null
  })

  const [winnerCombo, setWinnerCombo] = useState(() => {
    const prevWinnerCombo = window.localStorage.getItem('winnerCombo')
    if (prevWinnerCombo) return prevWinnerCombo

    return [null, null, null]
  })

  const isWinner = (index) => { 
    if (winnerCombo.includes(index)) {
      return true
    } else {
      return false
    }
  }
    

  const checkWinner = (board) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (board[a] &&
        board[a] === board[b] &&
        board[b] === board[c]) {
          confetti()
          setWinnerCombo(combo)
          window.localStorage.setItem('winnerCombo',JSON.stringify(combo))
          return turn
        }
    }
    return null
  }

  const updateBoard = (index) => {
    if (!(board[index] || winner)) {
      const newBoard = Array.from(board)
      newBoard[index] = turn
      setBoard(newBoard)
      window.localStorage.setItem('board',JSON.stringify(newBoard))
      
      const newWinner = checkWinner(newBoard)
      setWinner(newWinner)
      window.localStorage.setItem('winner',newWinner)
      
      const newTurn = (turn === TURNS.X) ? TURNS.O : TURNS.X
      setTurn(newTurn)
      window.localStorage.setItem('turn',newTurn)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    window.localStorage.removeItem('board')
    setTurn(TURNS.X)
    window.localStorage.removeItem('turn')
    setWinner(null)
    window.localStorage.removeItem('winner')
    setWinnerCombo([null,null,null])
    window.localStorage.removeItem('winnerCombo')
  }

  return (
    <>
      <h1>Ta-Te-Ti</h1>
      <ResetButton resetGame={resetGame}>Reiniciar Juego</ResetButton>
      <section className='gameBoard'>
        {board.map((board, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard} isWinner={isWinner(index)}>
              { board }
            </Square>
          );
          })}
      </section>
      <section className='turns'>
        <Square isSelected={turn===TURNS.X}>{ TURNS.X }</Square>
        <Square isSelected={turn===TURNS.O}>{ TURNS.O }</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
    </>
  )
}
export default App
