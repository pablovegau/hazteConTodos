import styled from "styled-components"
import { rem } from "polished"

const cardMinHeight = rem("170px")
const cardwidth = rem("240px")

const getComputedStylesForImage = ({ extended }) => `
  margin-top: ${extended ? "var(--margin-kilo)" : null}
`
export const Container = styled.div`
  height: ${cardMinHeight};
  width: ${cardwidth};

  margin: var(--margin-milli) var(--margin-base);
`

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 1px solid var(--grayColor_black90);
  border-radius: var(--borderRadius-kilo);
  background-color: var(--grayColor_white);
  text-transform: capitalize;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: var(--grayColor_black10);
  }

  img {
    display: block;
    margin-bottom: var(--margin-base);
    ${(props) => getComputedStylesForImage(props)}
  }
`
