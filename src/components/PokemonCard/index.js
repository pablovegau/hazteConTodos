import React from "react"
import { Link } from "react-router-dom"

import { RoundIconButton } from ".."
import { Close } from "../Icons"

import {
  Id,
  Types,
  Height,
  Habilities,
  CloseWrapper,
  Container,
  Data,
} from "./styles"

export const PokemonCard = ({
  name = "unown",
  id = "201",
  types = ["psychic"],
  height = "5",
  habilities = ["levitate"],
}) => {
  return (
    <Container>
      <Link to={`/pokemon`}>
        <CloseWrapper>
          <RoundIconButton>
            <Close />
          </RoundIconButton>
        </CloseWrapper>
      </Link>
      <img
        alt={`${name} image`}
        name={`${name} image`}
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
      />
      <p>{name}</p>
      <Data>
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
      </Data>
    </Container>
  )
}
