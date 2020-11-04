import styled from "styled-components"
import { rem } from "polished"
import { appTypographys } from "../../styles/mixins"

const cardMinHeight = rem("170px")
const cardwidth = rem("240px")

const getComputedStylesForContainer = ({ extended }) => `
  cursor: ${extended ? "auto" : "pointer"};
`

const getComputedStylesForContainerHover = ({ extended }) => `
  background-color: ${
    extended ? "var(--grayColor_white)" : "var(--grayColor_black10)"
  };
`

const getComputedStylesForImage = ({ extended }) => `
  margin-top: ${extended ? "var(--margin-kilo)" : null}
`

export const Container = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: ${cardMinHeight};
  width: ${cardwidth};
  border: 1px solid var(--grayColor_black90);
  border-radius: var(--borderRadius-kilo);
  margin: var(--margin-milli) var(--margin-base);
  background-color: var(--grayColor_white);
  text-transform: capitalize;
  transition: background-color 0.3s;
  ${(props) => getComputedStylesForContainer(props)}

  &:hover {
    ${(props) => getComputedStylesForContainerHover(props)}
  }

  img {
    display: block;
    margin-bottom: var(--margin-base);
    ${(props) => getComputedStylesForImage(props)}
  }
`

export const CloseWrapper = styled.div`
  position: absolute;
  right: var(--margin-base);
  top: var(--margin-base);
`

export const Extension = styled.div`
  align-self: stretch;
  margin-top: var(--margin-base);
  padding: var(--padding-base);
`

const pairKeyValue = styled.p`
  margin-bottom: var(--margin-milli);
  ${appTypographys.textBold.normal}

  span {
    ${appTypographys.text.small}
  }
`

export const Id = styled(pairKeyValue)``
export const Types = styled(pairKeyValue)``
export const Height = styled(pairKeyValue)``

export const Habilities = styled.div`
  ${appTypographys.textBold.normal}

  ul {
    margin-top: var(--margin-milli);
    ${appTypographys.text.small}
  }

  li {
    text-indent: ${rem("32px")};
    list-style-type: disc;
  }
`
