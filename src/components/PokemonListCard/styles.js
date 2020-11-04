import styled from "styled-components"
import { rem } from "polished"

const cardHeight = rem("170px")
const cardwidth = rem("240px")

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${cardHeight};
  width: ${cardwidth};
  border: 1px solid var(--grayColor_black90);
  border-radius: var(--borderRadius-kilo);
  margin: var(--margin-milli) var(--margin-base);
  background-color: var(--grayColor_white);
  text-transform: capitalize;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--grayColor_black10);
  }

  img {
    display: block;
    margin-bottom: var(--margin-base);
  }
`
