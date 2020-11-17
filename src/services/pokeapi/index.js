import axios from "axios"
import { API_URL } from "../settings"

export async function getPokemonNames({ limit = 25, page = 0 }) {
  const apiURL = `${API_URL}/pokemon?offset=${page * limit}&limit=${limit}`

  return await axios.get(apiURL).then((response) => {
    const { data } = response
    const { results } = data

    const pokemonNames = results.map((pokemon) => pokemon.name)

    return {
      pokemonNames,
    }
  })
}

export async function getPokemonByKeyword(keyword) {
  console.log("getPokemonByKeyword -> keyword", keyword)
  const apiURL = `${API_URL}/pokemon`
  const count = await (await axios.get(apiURL)).data.count
  const { pokemonNames } = await getPokemonNames({ limit: count })
  const pokemonsByKeyword = pokemonNames.filter((pokemonName) => pokemonName.includes(keyword))

  return pokemonsByKeyword
}

export async function getPokemonData({ pokemon }) {
  return await axios.get(`${API_URL}/pokemon/${pokemon}`).then((response) => {
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
