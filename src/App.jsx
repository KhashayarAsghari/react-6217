import { useState } from "react"

export default function App() {
  const [number, setNumber] = useState(100)

  function increment() {
    setNumber(number + 1)
    setNumber(number + 1)
    setNumber(number + 1)
    setNumber((prev) => {return prev + 1})
    setNumber(prev => prev + 1)
  }

  function decrement() {
    setNumber(number - 1)
  }

  return (
    <>
      <button onClick={increment}>+</button>
      <span>{number}</span>
      <button onClick={decrement}>-</button>
    </>
  )
}
