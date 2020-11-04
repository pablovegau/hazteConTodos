import React from "react"

import { RoundIconButton } from "../"
import { Close } from "../Icons"

import {
  Container,
  Extension,
  Id,
  Types,
  Height,
  Habilities,
  CloseWrapper,
} from "./styles"

export const PokemonListCard = ({
  name = "unown",
  extended = false,
  id,
  types = [],
  height,
  habilities = [],
}) => {
  return (
    <Container extended={extended}>
      {extended && (
        <CloseWrapper>
          <RoundIconButton>
            <Close />
          </RoundIconButton>
        </CloseWrapper>
      )}
      <img
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
      />
      {name}
      {extended && (
        <Extension>
          <Id>
            ID: <span>{id}</span>
          </Id>
          <Types>
            Type: <span>{types.join(" | ")}</span>
          </Types>
          <Height>
            Height: <span>{height}</span>
          </Height>
          <Habilities>
            Habilities
            <ul>
              {habilities.map((hability) => (
                <li key={hability}>{hability}</li>
              ))}
            </ul>
          </Habilities>
        </Extension>
      )}
    </Container>
  )
}
