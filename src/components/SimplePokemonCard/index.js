import React from "react"
import { Link } from "react-router-dom"

import { useNearScreen } from "../../hooks/useNearScreen"

import { CardContainer, Container } from "./styles"

export const SimplePokemonCard = ({ name = "unown" }) => {
  const { isNearScreen, fromRef } = useNearScreen()
  return (
    <Container ref={fromRef}>
      {isNearScreen ? (
        <Link to={`/pokemon/${name}`}>
          <CardContainer>
            <img
              src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
            />
            {name}
          </CardContainer>
        </Link>
      ) : null}
    </Container>
  )
}
