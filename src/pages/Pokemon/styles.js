import styled from "styled-components"
import { appTypographys } from "../../styles/mixins"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LogoWrapper = styled.div`
  margin-top: var(--margin-giga);
  margin-bottom: var(--margin-kilo);
`

export const Description = styled.div`
  margin-bottom: var(--margin-kilo);
  text-align: center;

  p:first-child {
    ${appTypographys.textBold.medium}
  }

  p:last-child {
    ${appTypographys.text.small}
  }
`
