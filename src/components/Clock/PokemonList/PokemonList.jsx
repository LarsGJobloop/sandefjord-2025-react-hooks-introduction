import { useFetchJson } from "../../../hooks/useFetchJson";

const url = "https://pokeapi.co/api/v2/pokemon"

export function PokemonList() {
  const { data, error, isLoading } = useFetchJson(url)

  return (
    <ul>
      {
        isLoading ? <p>Loading..</p>
        : error ? <p>Error: {error}</p>
        : data.results.map((pokemon) => {
          return (
            <li key={pokemon.name}>
              <PokemonCard pokemon={pokemon} />
            </li>
          )
        })
      }
    </ul>
  )
}

function PokemonCard({pokemon}) {
  const { data, error, isLoading } = useFetchJson(pokemon.url)

  return (
    <div>
      <p>{pokemon.name}</p>
      {
        isLoading ? <p>Loading..</p>
        : error ? <p>Error: {error}</p>
        : (
          <img src={data.sprites.front_default} alt="" />
        )
      }
    </div>
  )
}