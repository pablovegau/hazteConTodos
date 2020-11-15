import React, { useState } from "react"
import { SimplePokemonCard, Search, Spinner } from "../../components"
import { usePokemonNames } from "../../hooks/usePokemonNames"
import { STATUS } from "../../hooks/useStatus"

import { Container, SpinnerContainer } from "./styles"

export const PokemonList = () => {
  const { pokemonNames, status, setPage } = usePokemonNames()
  const [searchPokemonNames, setSearchPokemonNames] = useState([])

  function handleLoadMore() {
    setPage((prevPage) => prevPage + 1)
  }

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
          <button onClick={handleLoadMore}>Load more</button>
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
