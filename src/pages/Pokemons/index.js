import React from "react"
import { PokemonList } from "../../containers/PokemonList"
import { Logo } from "../../components"
import { Container, Description, LogoWrapper } from "./styles"

export const Pokemons = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Description>
        <p>Generation 1</p>
        <p>151 pokemons</p>
      </Description>
      <PokemonList />
    </Container>
  )
}
