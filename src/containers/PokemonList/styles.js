import styled from "styled-components"
import { rem } from "polished"

const PokemonListMaxWidth = rem("816px")

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: ${PokemonListMaxWidth};
`

export const SpinnerContainer = styled(Container)`
  padding-top: var(--padding-giga);
`
