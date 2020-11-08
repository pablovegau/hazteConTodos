import { appBorderRadius } from "./theme/appBorderRadius"
import { appColors } from "./theme/appColors"
import { appFonts } from "./theme/appFonts"
import { appGenericSizes } from "./theme/appGenerics"
import { appGrayColors, appTransparentGrayColors } from "./theme/appGrayColors"
import { appMargins } from "./theme/appMargins"
import { appPaddings } from "./theme/appPaddings"
import { appShadows } from "./theme/appShadows"
import { css } from "styled-components"

export const theme = css`
  ${appBorderRadius}
  ${appColors}
  ${appFonts}
  ${appGenericSizes}
  ${appGrayColors}
  ${appMargins}
  ${appPaddings}
  ${appShadows}
  ${appTransparentGrayColors}
`
