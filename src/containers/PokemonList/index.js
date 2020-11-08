import React, { useEffect, useState } from "react"
import { SimplePokemonCard, Search, Spinner } from "../../components"
import { getPokemonNames } from "../../services/pokeapi"
import { useStatus } from "../../hooks/useStatus"

import { Container, SpinnerContainer } from "./styles"

export const PokemonList = () => {
  const [pokemonNames, setPokemonNames] = useState([])
  const [searchPokemonNames, setSearchPokemonNames] = useState([])
  const [status, setStatus, STATUS] = useStatus()

  useEffect(() => {
    const firstGenerationPokemonsCount = 151
    setStatus(STATUS.PENDING)
    getPokemonNames({ offset: 0, limit: firstGenerationPokemonsCount })
      .then((pokemonNames) => {
        setPokemonNames(pokemonNames)
        setStatus(STATUS.RESOLVED)
      })
      .catch((e) => {
        console.error(e)
        setStatus(STATUS.REJECTED)
      })
  }, [])

  function renderPokemon() {
    if (status === STATUS.IDLE || status === STATUS.PENDING) {
      return (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )
    }

    if (status === STATUS.REJECTED) {
      return <Container>Error</Container>
    }

    if (status === STATUS.RESOLVED) {
      const PokemonListToRender = searchPokemonNames.length > 0 ? searchPokemonNames : pokemonNames
      return (
        <Container>
          {PokemonListToRender.map((pokemonName) => (
            <SimplePokemonCard key={pokemonName} name={pokemonName} />
          ))}
        </Container>
      )
    }

    return null
  }

  function handleOnChange(event) {
    const pokemonNamesFilteredBySearchValue = pokemonNames.filter((pokemonName) =>
      pokemonName.toLowerCase().includes(event.target.value)
    )
    setSearchPokemonNames(pokemonNamesFilteredBySearchValue)
  }

  return (
    <>
      <Search handleOnChange={handleOnChange} />
      {renderPokemon()}
    </>
  )
}
