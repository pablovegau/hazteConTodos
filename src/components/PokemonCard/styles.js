import styled from "styled-components"
import { rem } from "polished"
import { appTypographys } from "../../styles/mixins"

const cardwidth = rem("240px")

export const Container = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${cardwidth};
  border: 1px solid var(--grayColor_black90);
  border-radius: var(--borderRadius-kilo);
  text-transform: capitalize;

  img {
    display: block;
    margin-bottom: var(--margin-base);
    margin-top: var(--margin-kilo);
  }
`

export const CloseWrapper = styled.div`
  position: absolute;
  right: var(--margin-base);
  top: var(--margin-base);
`

export const Data = styled.div`
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
