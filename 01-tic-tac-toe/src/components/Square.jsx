export function Square({ updateBoard, isSelected, index ,children }) {
  
  const squareClassName = `square ${isSelected ? "is-selected" : ""}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={squareClassName}>
      {children}
    </div>
  )
}