import { useEffect, useState } from "react"
import { useStatus } from "./useStatus"

import { getPokemonNames } from "../services/pokeapi"

const INITIAL_PAGE = 0

export function usePokemonNames() {
  const [status, setStatus, STATUS] = useStatus()

  const [page, setPage] = useState(INITIAL_PAGE)
  const [pokemonNames, setPokemonNames] = useState([])

  useEffect(() => {
    setStatus(STATUS.PENDING)
    getPokemonNames({ page: INITIAL_PAGE })
      .then((pokemonNames) => {
        setPokemonNames(pokemonNames.pokemonNames)
        setStatus(STATUS.RESOLVED)
      })
      .catch((e) => {
        console.error(e)
        setStatus(STATUS.REJECTED)
      })
  }, [STATUS, setStatus])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    getPokemonNames({ page }).then((nextPokemonNames) => {
      setPokemonNames((prevPokemonNames) => prevPokemonNames.concat(nextPokemonNames.pokemonNames))
    })
  }, [page])

  return { pokemonNames, status, setPage }
}
