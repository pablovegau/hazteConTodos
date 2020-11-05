import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PokemonCard } from "../../components"
import { getPokemonData } from "../../services/pokeapi"
import { useStatus } from "../../hooks/useStatus"

import { Container } from "./styles"

export const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState({})
  const [status, setStatus, STATUS] = useStatus()
  const { pokemon } = useParams()

  useEffect(() => {
    setStatus(STATUS.PENDING)
    getPokemonData({ pokemon })
      .then((pokemonData) => {
        setPokemonData(pokemonData)
        setStatus(STATUS.RESOLVED)
      })
      .catch((e) => {
        console.error(e)
        setStatus(STATUS.REJECTED)
      })
  }, [pokemon])

  function renderPokemonCard() {
    if (status === STATUS.IDLE || status === STATUS.PENDING) {
      return <Container>Loading...</Container>
    }

    if (status === STATUS.REJECTED) {
      return <Container>Error</Container>
    }

    if (status === STATUS.RESOLVED) {
      return (
        <Container>
          <PokemonCard
            extended={true}
            id={pokemonData.id}
            height={pokemonData.height}
            habilities={pokemonData.habilities}
            types={pokemonData.types}
            name={pokemon}
          />
        </Container>
      )
    }

    return null
  }

  return <>{renderPokemonCard()}</>
}
