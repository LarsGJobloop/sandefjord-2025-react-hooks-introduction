import { useEffect, useState } from "react"

export function Clock() {
  const [time, setTime] = useState((Date.now() / 1000).toFixed(0));

  useEffect(
    () => {
      console.log("Setting up timer")
      const intervalId = setInterval(
        () => {setTime((Date.now() / 1000).toFixed(0))},
        1000
      )
      
      return () => {
        console.log("Clearing the timer")
        clearInterval(intervalId)
      }
    },
    []
  )

  return (
    <div>
      <p>{time}s</p>
    </div>
  )
}