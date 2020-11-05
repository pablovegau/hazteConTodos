import { css } from "styled-components"
import { appBorderRadius } from "./theme/appBorderRadius"
import { appFonts } from "./theme/appFonts"
import { appGenericSizes } from "./theme/appGenerics"
import { appGrayColors, appTransparentGrayColors } from "./theme/appGrayColors"
import { appMargins } from "./theme/appMargins"
import { appPaddings } from "./theme/appPaddings"
import { appShadows } from "./theme/appShadows"

export const theme = css`
  ${appBorderRadius}
  ${appFonts}
  ${appGenericSizes}
  ${appGrayColors}
  ${appMargins}
  ${appPaddings}
  ${appShadows}
  ${appTransparentGrayColors}
`
