import tinycolor from 'tinycolor2'
import chroma from 'chroma-js'
import { css, createGlobalStyle } from 'styled-components'

export const GlobalTheme = createGlobalStyle`
  &:root, html {
    font-size: 62.5%;
  }

  &#root {
    min-height: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.onPanelBackground};
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    ${({ theme }) => theme.font.regular};
    -webkit-font-smoothing: antialiased;
  }
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.scrollbar}; 
  }

  ul {
    list-style-type: none;
    margin: 0;
    margin-block-start: 0;
    padding-inline-start: 0;
  }

`

export const Ellipsis = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
`

const white = tinycolor('#ffffff')
const black = tinycolor('#000000')

const getReadableColor = hex => {
  const whiteReadableRatio = tinycolor.readability(hex, white, {
    level: 'AA',
    size: 'large',
  })

  return (whiteReadableRatio > 2.2 ? white : black).toHexString()
}

const multiply = (rgb1, rgb2) => {
  rgb1.b = Math.floor((rgb1.b * rgb2.b) / 255)
  rgb1.g = Math.floor((rgb1.g * rgb2.g) / 255)
  rgb1.r = Math.floor((rgb1.r * rgb2.r) / 255)
  return tinycolor('rgb ' + rgb1.r + ' ' + rgb1.g + ' ' + rgb1.b)
}

export const generateColorPalette = (hex, name = '') => {
  const abbr = name[0].toUpperCase()
  const baseLight = white
  const baseDark = multiply(tinycolor(hex).toRgb(), tinycolor(hex).toRgb())
  const baseTriad = tinycolor(hex).tetrad()

  return {
    [name]: tinycolor(hex).toHexString(),
    [`${abbr.toLowerCase()}Dark`]: tinycolor(
      chroma(hex)
        .darken()
        .hex(),
    ).toHexString(),
    [`${abbr.toLowerCase()}Light`]: tinycolor(
      chroma(hex)
        .brighten()
        .hex(),
    ).toHexString(),
    variants: {
      [`${abbr}50`]: tinycolor.mix(baseLight, hex, 12).toHexString(),
      [`${abbr}100`]: tinycolor.mix(baseLight, hex, 30).toHexString(),
      [`${abbr}200`]: tinycolor.mix(baseLight, hex, 50).toHexString(),
      [`${abbr}300`]: tinycolor.mix(baseLight, hex, 70).toHexString(),
      [`${abbr}400`]: tinycolor.mix(baseLight, hex, 85).toHexString(),
      [`${abbr}500`]: tinycolor.mix(baseLight, hex, 100).toHexString(),
      [`${abbr}600`]: tinycolor.mix(baseDark, hex, 87).toHexString(),
      [`${abbr}700`]: tinycolor.mix(baseDark, hex, 70).toHexString(),
      [`${abbr}800`]: tinycolor.mix(baseDark, hex, 54).toHexString(),
      [`${abbr}900`]: tinycolor.mix(baseDark, hex, 25).toHexString(),
      [`${abbr}A100`]: tinycolor
        .mix(baseDark, baseTriad[4], 15)
        .saturate(80)
        .lighten(65)
        .toHexString(),
      [`${abbr}A200`]: tinycolor
        .mix(baseDark, baseTriad[4], 15)
        .saturate(80)
        .lighten(55)
        .toHexString(),
      [`${abbr}A400`]: tinycolor
        .mix(baseDark, baseTriad[4], 15)
        .saturate(100)
        .lighten(45)
        .toHexString(),
      [`${abbr}A700`]: tinycolor
        .mix(baseDark, baseTriad[4], 15)
        .saturate(100)
        .lighten(40)
        .toHexString(),
    },
  }
}

export const generateBaselineLabels = palette =>
  Object.keys(palette).reduce((acc, crr) => {
    return {
      ...acc,
      [`on${crr[0].toUpperCase() + crr.slice(1)}`]: getReadableColor(
        palette[crr],
      ),
    }
  }, {})

export const getAlphaRgb = (color, alpha) =>
  tinycolor(color)
    .setAlpha(alpha)
    .toRgbString()
