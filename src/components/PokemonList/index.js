import React from "react"
import { SimplePokemonCard } from "../../components"

export const PokemonList = ({ pokemons }) => {
  return (
    <>
      {pokemons.map((pokemonName) => (
        <SimplePokemonCard key={pokemonName} name={pokemonName} />
      ))}
    </>
  )
}
