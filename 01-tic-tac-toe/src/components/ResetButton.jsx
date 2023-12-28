export function ResetButton({resetGame,children}) {

  const handleClick = () => {
    resetGame()
  }
  
  return (
    <button className="reset-button" onClick={handleClick}>{children}</button>
  )
}