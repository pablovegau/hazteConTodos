import { css } from "styled-components"

const reference = 1

export const appMargins = css`
  :root {
    --margin-micro: ${reference / 4}rem;
    --margin-milli: ${reference / 2}rem;
    --margin-base: ${reference}rem;
    --margin-kilo: ${reference * 2}rem;
    --margin-mega: ${reference * 3}rem;
    --margin-giga: ${reference * 4}rem;
  }
`
