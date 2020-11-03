import { css } from "styled-components"
import { lighten, rgba } from "polished"

const black = "#000000"

export const appGrayColors = css`
  :root {
    --grayColor_black: ${black};
    --grayColor_black90: ${lighten(0.1, black)};
    --grayColor_black80: ${lighten(0.2, black)};
    --grayColor_black70: ${lighten(0.3, black)};
    --grayColor_black60: ${lighten(0.4, black)};
    --grayColor_black50: ${lighten(0.5, black)};
    --grayColor_black40: ${lighten(0.6, black)};
    --grayColor_black30: ${lighten(0.7, black)};
    --grayColor_black20: ${lighten(0.8, black)};
    --grayColor_black10: ${lighten(0.9, black)};
    --grayColor_black5: ${lighten(0.95, black)};
    --grayColor_white: ${lighten(1, black)};
  }
`

export const appTransparentGrayColors = css`
  :root {
    --grayColor-alpha_five: ${rgba(black, 0.05)};
    --grayColor-alpha_twenty: ${rgba(black, 0.2)};
    --grayColor-alpha_thirty: ${rgba(black, 0.3)};
    --grayColor-alpha_fifty: ${rgba(black, 0.5)};
    --grayColor-alpha_eighty: ${rgba(black, 0.8)};
  }
`
