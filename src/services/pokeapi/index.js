import axios from "axios"

export function getPokemonNames({ offset = 20, limit = 20 }) {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    .then((response) => response.data.results.map((pokemon) => pokemon.name))
}
