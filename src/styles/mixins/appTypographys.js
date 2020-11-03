const appFontSizes = {
  yotta: "5em", // 80px
  zetta: "3.75em", // 60px
  exa: "2.5em", // 40px
  peta: "1.875em", // 30px
  tera: "1.5em", // 24px
  giga: "1.375em", // 22px
  mega: "1.25em", // 20px
  kilo: "1.125em", // 18px
  base: "1em", // 16px
  milli: "0.875em", // 14px
  micro: "0.75em", // 12px
  nano: "0.625em", // 10px
  pico: "0.5em", // 8px
}

const appLineHeightDefault = `140%`
const appLineHeightSmall = `120%`

export const appTypographys = {
  headings: {
    one: `
      font-size: ${appFontSizes.yotta};
      font-weight: 700;
      line-height: ${appLineHeightSmall};
    `,
    two: `
      font-size: ${appFontSizes.zetta};
      font-weight: 700;
      line-height: ${appLineHeightDefault};
    `,
    three: `
      font-size: ${appFontSizes.peta};
      font-weight: 700;
      line-height: ${appLineHeightDefault};
    `,
    four: `
      font-size: ${appFontSizes.tera};
      font-weight: 700;
      line-height: ${appLineHeightDefault};
    `,
  },
  text: {
    large: `
      font-size: ${appFontSizes.tera};
      line-height: ${appLineHeightDefault};
    `,
    medium: `
      font-size: ${appFontSizes.mega};
      line-height: ${appLineHeightDefault};
    `,
    caption: `
      font-size: ${appFontSizes.kilo};
      line-height: ${appLineHeightDefault};
      text-transform: uppercase;
    `,
    normal: `
      font-size: ${appFontSizes.base};
      line-height: ${appLineHeightDefault};
    `,
    small: `
      font-size: ${appFontSizes.milli};
      line-height: ${appLineHeightDefault};
    `,
  },
  textBold: {
    large: `
      font-size: ${appFontSizes.tera};
      font-weight: 700;
      line-height: ${appLineHeightDefault};
    `,
    medium: `
      font-size: ${appFontSizes.mega};
      font-weight: 700;
      line-height: ${appLineHeightDefault};
    `,
    caption: `
      font-size: ${appFontSizes.kilo};
      font-weight: 700;
      line-height: ${appLineHeightDefault};
      text-transform: uppercase;
    `,
    normal: `
      font-size: ${appFontSizes.base};
      font-weight: 700;
      line-height: ${appLineHeightDefault};
    `,
    small: `
      font-size: ${appFontSizes.milli};
      font-weight: 700;
      line-height: ${appLineHeightDefault};
    `,
  },
}
