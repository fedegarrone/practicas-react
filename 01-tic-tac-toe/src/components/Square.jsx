export function Square({ updateBoard, isSelected, index ,children, isWinner }) {
  
  const squareClassName = `square ${isSelected ? "is-selected" : ""} ${isWinner ? "is-winner" : ""}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={squareClassName}>
      {children}
    </div>
  )
}