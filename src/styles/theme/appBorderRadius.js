import { css } from "styled-components"

const reference = 0.25

export const appBorderRadius = css`
  :root {
    --borderRadius-milli: ${reference / 2}rem;
    --borderRadius-base: ${reference}rem;
    --borderRadius-kilo: ${reference * 2}rem;
    --borderRadius-round: 50%;
  }
`
