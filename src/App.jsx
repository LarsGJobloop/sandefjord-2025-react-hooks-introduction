import { useCounter } from './hooks/useCounter'
import './App.css'
import { Clock } from './components/Clock/Clock'
import { PokemonList } from './components/Clock/PokemonList/PokemonList'


function App() {
  const {count, decrement, increment, reset} = useCounter()

  return (
    <div>
      <section>
        <p>Count = {count}</p>

        <div>
          <button onClick={decrement}>Decrement</button>
          <button onClick={increment}>Increment</button>
        </div>
        <button onClick={reset}>Reset</button>
      </section>

      <section>
        <Clock />
      </section>

      <section>
        <PokemonList />
      </section>
    </div>
  )
}

export default App
