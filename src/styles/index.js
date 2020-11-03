import { css } from "styled-components"
import { appBorderRadius } from "./theme/appBorderRadius"
import { appFonts } from "./theme/appFonts"
import { appGenericSizes } from "./theme/appGenerics"
import { appGrayColors, appTransparentGrayColors } from "./theme/appGrayColors"
import { appMargins } from "./theme/appMargins"
import { appPaddings } from "./theme/appPaddings"

export const theme = css`
  ${appBorderRadius}
  ${appFonts}
  ${appGenericSizes}
  ${appGrayColors}
  ${appMargins}
  ${appPaddings}
  ${appTransparentGrayColors}
`
