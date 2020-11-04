import axios from "axios"

export function getPokemonNames({ offset = 20, limit = 20 }) {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    .then((response) => response.data.results.map((pokemon) => pokemon.name))
}

export function getPokemonData({ pokemon }) {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
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
