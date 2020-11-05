import styled from "styled-components"
import { rem } from "polished"

const PokemonListMaxWidth = rem("816px")

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: ${PokemonListMaxWidth};
`

export const Search = styled.div`
  display: flex;
  margin-bottom: var(--margin-base);

  label {
    margin-right: var(--margin-base);
  }
`
