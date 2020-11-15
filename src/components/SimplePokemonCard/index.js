import React from "react"
import { Link } from "react-router-dom"
import { CardContainer, Container } from "./styles"

export const SimplePokemonCard = ({ name = "unown" }) => {
  return (
    <Container>
      <Link to={`/${name}`}>
        <CardContainer>
          <img loading="lazy" src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} />
          {name}
        </CardContainer>
      </Link>
    </Container>
  )
}
