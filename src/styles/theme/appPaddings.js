import { css } from "styled-components"

const reference = 1

export const appPaddings = css`
  :root {
    --padding-micro: ${reference / 4}rem;
    --padding-milli: ${reference / 2}rem;
    --padding-base: ${reference}rem;
    --padding-kilo: ${reference * 2}rem;
    --padding-mega: ${reference * 3}rem;
    --padding-giga: ${reference * 4}rem;
  }
`
