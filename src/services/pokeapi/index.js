import axios from "axios"
import { API_URL } from "../settings"

export function getPokemonNames({ limit = 25, page = 0 }) {
  const apiURL = `${API_URL}/pokemon?offset=${page * limit}&limit=${limit}`

  return axios.get(apiURL).then((response) => {
    const { data } = response
    const { results } = data

    const pokemonNames = results.map((pokemon) => pokemon.name)

    return {
      pokemonNames,
    }
  })
}

export function getPokemonData({ pokemon }) {
  return axios.get(`${API_URL}/pokemon/${pokemon}`).then((response) => {
    const { data } = response
    const { id, types, height, abilities } = data
    const typesArray = types.map((type) => type.type.name)
    const habilitiesArray = abilities.map((hability) => hability.ability.name)

    return {
      id,
      height,
      types: typesArray,
      habilities: habilitiesArray,
    }
  })
}
