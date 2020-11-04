import React from "react"

import { Container } from "./styles"

export const PokemonListCard = ({ name = "unown" }) => {
  return (
    <Container>
      <img
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
      />
      {name}
    </Container>
  )
}
