import { css } from "styled-components"
import { rem } from "polished"

export const appShadows = css`
  :root {
    --shadow-main: 0 ${rem("5px")} ${rem("10px")} rgba(0, 0, 0, 0.15);
    --shadow-hover: 0 ${rem("10px")} ${rem("20px")} rgba(0, 0, 0, 0.25);
    --shadow-roundButton: 0 0 ${rem("10px")} rgba(0, 0, 0, 0.6);
    --shadow-hoverRoundButton: 0 0 ${rem("5px")} rgba(0, 0, 0, 0.5);
    --shadow-mobileOnly: 0 ${rem("10px")} ${rem("25px")} rgba(0, 0, 0, 0.1);
  }
`
