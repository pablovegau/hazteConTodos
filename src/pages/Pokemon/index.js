import React from "react"
import { PokemonList } from "../../containers/PokemonList"
import { Logo } from "../../components"

import { Container, LogoWrapper } from "./styles"

export const Pokemon = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <PokemonList />
    </Container>
  )
}
