import { Square } from "./Square.jsx"
import { ResetButton } from "./ResetButton.jsx"

export function WinnerModal({ winner, resetGame }) {
  if (!winner) return null

  return (
    <section className="winner-modal">
      <div className="winner">
        <h2>El ganador es:</h2>
        <Square isWinner={true}>
          {winner}
        </Square>
        <ResetButton resetGame={resetGame}>Jugar de Nuevo</ResetButton>
      </div>
    </section>
  )
}