import { useState } from "react"

export function useCounter() {
  const [count, setCount] = useState(0)
  
  function increment() {
    setCount((oldCount) => oldCount + 1)
  }
  
  function decrement() {
    setCount((oldCount) => {
      if (oldCount <= 0) {
        return 0
      } else {
        return oldCount - 1
      }
    })
  }
  
  function reset() {
    setCount(0)
  }

  return {
    count,
    increment,
    decrement,
    reset
  }
}