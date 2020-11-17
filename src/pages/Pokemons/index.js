import React, { useState, useRef, useCallback, useEffect } from "react"
import { Logo, Spinner, Search, PokemonList } from "../../components"
import { usePokemonNames } from "../../hooks/usePokemonNames"
import { useNearScreen } from "../../hooks/useNearScreen"
import { STATUS } from "../../hooks/useStatus"
import debounce from "just-debounce-it"
import { Container, Description, LogoWrapper, ListContainer, SpinnerContainer } from "./styles"

import { getPokemonByKeyword } from "../../services/pokeapi"

export const Pokemons = () => {
  const { pokemonNames, firstLoadStatus, nextLoadStatus, setPage } = usePokemonNames()
  const [searchPokemonNames, setSearchPokemonNames] = useState([])
  const [searchKeyword, setSearchKeyword] = useState()
  const visorRef = useRef()
  const { isNearScreen } = useNearScreen({
    distance: "1000px",
    externalRef: !(firstLoadStatus === STATUS.IDLE || firstLoadStatus === STATUS.PENDING) && visorRef,
    once: false,
  })

  const debounceNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 100),
    []
  )

  useEffect(() => {
    if (isNearScreen) debounceNextPage()
  })

  function renderNextPokemons() {
    if ((nextLoadStatus === STATUS.IDLE || nextLoadStatus === STATUS.PENDING) && !searchKeyword) {
      return (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )
    }

    if (nextLoadStatus === STATUS.REJECTED) {
      return <ListContainer>Error</ListContainer>
    }

    return null
  }

  function renderPokemons() {
    if (firstLoadStatus === STATUS.IDLE || firstLoadStatus === STATUS.PENDING) {
      return (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )
    }

    if (firstLoadStatus === STATUS.REJECTED) {
      return <ListContainer>Error</ListContainer>
    }

    if (firstLoadStatus === STATUS.RESOLVED) {
      if (searchPokemonNames.length === 0 && searchKeyword) {
        return <div>No results</div>
      }
      const PokemonListToRender = searchPokemonNames.length > 0 ? searchPokemonNames : pokemonNames
      return (
        <>
          <ListContainer>
            <PokemonList pokemons={PokemonListToRender} />
          </ListContainer>
          {renderNextPokemons()}
          <div ref={visorRef} />
        </>
      )
    }

    return null
  }

  async function handleOnChange(keyword) {
    setSearchKeyword(keyword)
    setSearchPokemonNames(await getPokemonByKeyword(keyword))
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
      {renderPokemons()}
    </Container>
  )
}
