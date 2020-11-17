import { useEffect, useState } from "react"
import { useStatus } from "./useStatus"

import { getPokemonNames } from "../services/pokeapi"

const INITIAL_PAGE = 0

export function usePokemonNames() {
  const { status: firstLoadStatus, setStatus: setFirstLoadStatus, STATUS } = useStatus()
  const { status: nextLoadStatus, setStatus: setNextLoadStatus } = useStatus()

  const [page, setPage] = useState(INITIAL_PAGE)
  const [pokemonNames, setPokemonNames] = useState([])

  useEffect(() => {
    setFirstLoadStatus(STATUS.PENDING)
    getPokemonNames({ page: INITIAL_PAGE })
      .then((pokemonNames) => {
        setPokemonNames(pokemonNames.pokemonNames)
        setFirstLoadStatus(STATUS.RESOLVED)
      })
      .catch((e) => {
        console.error(e)
        setFirstLoadStatus(STATUS.REJECTED)
      })
  }, [STATUS, setFirstLoadStatus])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    setNextLoadStatus(STATUS.PENDING)
    getPokemonNames({ page })
      .then((nextPokemonNames) => {
        setPokemonNames((prevPokemonNames) => prevPokemonNames.concat(nextPokemonNames.pokemonNames))
        setNextLoadStatus(STATUS.RESOLVED)
      })
      .catch((e) => {
        console.error(e)
        setNextLoadStatus(STATUS.REJECTED)
      })
  }, [STATUS, page, setNextLoadStatus])

  return { pokemonNames, firstLoadStatus, nextLoadStatus, setPage }
}
