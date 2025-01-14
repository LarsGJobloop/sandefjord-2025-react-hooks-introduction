import { useCounter } from './hooks/useCounter'
import './App.css'


function App() {
  const {count, decrement, increment, reset} = useCounter()

  return (
    <div>
      <p>Count = {count}</p>

      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
