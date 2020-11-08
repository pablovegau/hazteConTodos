import { css } from "styled-components"
import { lighten, darken, rgba } from "polished"

const baseColors = {
  colorOne: "#B57EDC",
  colorTwo: "#F87CC5",
  colorThree: "#FF89A1",
  colorFour: "#FFA87D",
  colorFive: "#FFD067",
  colorSix: "#F9F871",
}

const colors = {
  colorOne: {
    main: baseColors.colorOne,
    light: `${lighten(0.2, baseColors.colorOne)};`,
    dark: `${darken(0.1, baseColors.colorOne)};`,
  },
  colorTwo: {
    main: baseColors.colorTwo,
    light: `${lighten(0.2, baseColors.colorTwo)};`,
    dark: `${darken(0.1, baseColors.colorTwo)};`,
  },
  colorThree: {
    main: baseColors.colorThree,
    light: `${lighten(0.2, baseColors.colorThree)};`,
    dark: `${darken(0.1, baseColors.colorThree)};`,
  },
  colorFour: {
    main: baseColors.colorFour,
    light: `${lighten(0.2, baseColors.colorFour)};`,
    dark: `${darken(0.1, baseColors.colorFour)};`,
  },
  colorFive: {
    main: baseColors.colorFive,
    light: `${lighten(0.2, baseColors.colorFive)};`,
    dark: `${darken(0.1, baseColors.colorFive)};`,
  },
  colorSix: {
    main: baseColors.colorSix,
    light: `#46C2A2`,
    dark: `${darken(0.1, baseColors.colorSix)};`,
  },
}

const transparentColors = {
  colorTwo: {
    five: `${rgba(colors.colorTwo.main, 0.05)}`,
    twenty: `${rgba(colors.colorTwo.main, 0.2)}`,
    fifty: `${rgba(colors.colorTwo.main, 0.5)}`,
    eighty: `${rgba(colors.colorTwo.main, 0.8)}`,
  },
  colorOne: {
    five: `${rgba(colors.colorOne.main, 0.05)}`,
    twenty: `${rgba(colors.colorOne.main, 0.2)}`,
    fifty: `${rgba(colors.colorOne.main, 0.5)}`,
    eighty: `${rgba(colors.colorOne.main, 0.8)}`,
  },
  colorFour: {
    five: `${rgba(colors.colorFour.main, 0.05)}`,
    twenty: `${rgba(colors.colorFour.main, 0.2)}`,
    fifty: `${rgba(colors.colorFour.main, 0.5)}`,
    eighty: `${rgba(colors.colorFour.main, 0.8)}`,
  },
}

/* const gradientColors = {
  greenMeadow: {
    main: `linear-gradient(149.51deg, ${colors.colorFive.main} 21.11%, ${colors.colorSix.main} 82.81%)`,
    dark: `linear-gradient(122.31deg, #00879f 21.11%, #008a82 82.81%)`,
    tri: `linear-gradient(146.89deg, ${colors.colorFive.main} 10.23%, ${colors.colorSix.main} 42.08%, ${colors.colorSix.main} 57.4%, ${colors.colorFive.main} 87.64%);`,
  },
  purpleNorthernLights: {
    main: `linear-gradient(146.89deg, ${colors.colorOne.main} 10.23%, ${colors.colorTwo.main} 87.64%);`,
    dark: `linear-gradient(146.89deg, #79275C 10.23%, #664586 87.64%);`,
    tri: `linear-gradient(146.89deg, ${colors.colorOne.main} 10.23%, ${colors.colorTwo.main} 42.08%, ${colors.colorTwo.main} 57.4%, ${colors.colorOne.main} 87.64%);`,
  },
} */

export const appColors = css`
  :root {
    --color-primary_main: ${colors.colorOne.main};
    --color-primary_light: ${colors.colorOne.light};
    --color-primary_dark: ${colors.colorOne.dark};

    --color-secondary_main: ${colors.colorTwo.main};
    --color-secondary_light: ${colors.colorTwo.light};
    --color-secondary_dark: ${colors.colorTwo.dark};

    --color-terciary_main: ${colors.colorThree.main};
    --color-terciary_light: ${colors.colorThree.light};
    --color-terciary_dark: ${colors.colorThree.dark};

    --color-quaternary_main: ${colors.colorFour.main};
    --color-quaternary_light: ${colors.colorFour.light};
    --color-quaternary_dark: ${colors.colorFour.dark};

    --color-quinary_main: ${colors.colorFive.main};
    --color-quinary_light: ${colors.colorFive.light};
    --color-quinary_dark: ${colors.colorFive.dark};

    --color-sextarian_main: ${colors.colorSix.main};
    --color-sextarian_light: ${colors.colorSix.light};
    --color-sextarian_dark: ${colors.colorSix.dark};
  }
`

export const appTransparentColors = css`
  :root {
    --color-primary-alpha_five: ${transparentColors.colorTwo.five};
    --color-primary-alpha_twenty: ${transparentColors.colorTwo.twenty};
    --color-primary-alpha_fifty: ${transparentColors.colorTwo.fifty};
    --color-primary-alpha_eighty: ${transparentColors.colorTwo.eighty};

    --color-secondary-alpha_five: ${transparentColors.colorOne.five};
    --color-secondary-alpha_twenty: ${transparentColors.colorOne.fifty};
    --color-secondary-alpha_fifty: ${transparentColors.colorOne.fifty};
    --color-secondary-alpha_eighty: ${transparentColors.colorOne.eighty};

    --color-terciary-alpha_five: ${transparentColors.colorFour.five};
    --color-terciary-alpha_twenty: ${transparentColors.colorFour.twenty};
    --color-terciary-alpha_fifty: ${transparentColors.colorFour.fifty};
    --color-terciary-alpha_eighty: ${transparentColors.colorFour.eighty};
  }
`

export const appBrandsColors = css`
  :root {
    --color-google: #db4437;
  }
`

export const appGradientColors = css``
