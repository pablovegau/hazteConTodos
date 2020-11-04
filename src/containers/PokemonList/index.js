import React, { useEffect, useState } from "react"
import { PokemonListCard } from "../../components"
import { getPokemonNames } from "../../services/pokeapi"

import { Container } from "./styles"

export const PokemonList = () => {
  const [pokemonNames, setPokemonNames] = useState([])

  useEffect(() => {
    const firstGenerationPokemonsCount = 151
    getPokemonNames({ offset: 0, limit: firstGenerationPokemonsCount }).then(
      setPokemonNames
    )
  }, [])

  return (
    <Container>
      {pokemonNames.map((pokemonName) => (
        <PokemonListCard key={pokemonName} name={pokemonName} />
      ))}
    </Container>
  )
}
