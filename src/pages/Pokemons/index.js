import React, { useState, useRef, useCallback, useEffect } from "react"
import { Logo, Search, PokemonList, RenderByStatus } from "../../components"
import { usePokemonNames } from "../../hooks/usePokemonNames"
import { useNearScreen } from "../../hooks/useNearScreen"
import { STATUS } from "../../hooks/useStatus"
import debounce from "just-debounce-it"
import { Container, Description, LogoWrapper, ListContainer } from "./styles"

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

  const PokemonListToRender = searchPokemonNames.length > 0 ? searchPokemonNames : pokemonNames

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
      <RenderByStatus status={firstLoadStatus}>
        {searchPokemonNames.length === 0 && searchKeyword ? (
          <div>No results</div>
        ) : (
          <>
            <ListContainer>
              <PokemonList pokemons={PokemonListToRender} />
            </ListContainer>
            <RenderByStatus status={nextLoadStatus} />
            <div ref={visorRef} />
          </>
        )}
      </RenderByStatus>
    </Container>
  )
}
