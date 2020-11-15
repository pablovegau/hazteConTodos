import React, { useState } from "react"
import { Logo, Spinner, Search, PokemonList } from "../../components"
import { usePokemonNames } from "../../hooks/usePokemonNames"
import { STATUS } from "../../hooks/useStatus"
import { Container, Description, LogoWrapper, ListContainer, SpinnerContainer } from "./styles"

export const Pokemons = () => {
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
      return <ListContainer>Error</ListContainer>
    }

    if (status === STATUS.RESOLVED) {
      const PokemonListToRender = searchPokemonNames.length > 0 ? searchPokemonNames : pokemonNames
      return (
        <ListContainer>
          <PokemonList pokemons={PokemonListToRender} />
        </ListContainer>
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
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Description>
        <p>Generation 1</p>
        <p>151 pokemons</p>
      </Description>
      <Search handleOnChange={handleOnChange} />
      {renderPokemon()}
      <button onClick={handleLoadMore}>Load more</button>
    </Container>
  )
}
