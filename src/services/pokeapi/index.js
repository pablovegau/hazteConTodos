import axios from "axios"

const API = "https://pokeapi.co/api/v2"

export function getPokemonNames({ offset = 20, limit = 20 }) {
  return axios
    .get(`${API}/pokemon?offset=${offset}&limit=${limit}`)
    .then((response) => response.data.results.map((pokemon) => pokemon.name))
}

export function getPokemonData({ pokemon }) {
  return axios.get(`${API}/pokemon/${pokemon}`).then((response) => {
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
