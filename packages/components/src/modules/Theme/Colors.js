import { mergeDeepWith, concat } from 'ramda'
import { generateColorPalette, generateBaselineLabels } from './Utils'

export const createThemeColors = colors => {
  const primaryPalette = generateColorPalette(colors.primary, 'primary')
  const secondaryPalette = generateColorPalette(colors.secondary, 'secondary')

  const baseLineLabels = generateBaselineLabels({
    ...colors,
    pDark: primaryPalette.pDark,
    pLight: primaryPalette.pLight,
    sDark: secondaryPalette.sDark,
    sLight: secondaryPalette.sLight,
  })
  const variantsLabels = generateBaselineLabels({
    ...primaryPalette.variants,
    ...secondaryPalette.variants,
  })

  return {
    ...colors,
    ...mergeDeepWith(concat, primaryPalette, secondaryPalette),
    labels: {
      ...baseLineLabels,
      variants: {
        ...variantsLabels,
      },
    },
    default: { ...defaultColors },
    ...baseLineLabels,
    ...variantsLabels,
    ...defaultColors,
    ...primaryPalette.variants,
    ...secondaryPalette.variants,
  }
}

const defaultColors = {
  black: '#000000',
  white: '#FFFFFF',
  grayLight: '#f0f0f0',
  gray: '#DFE5E7',
  grayDark: '#919191',
  cherry: '#F87676',
  blue: '#6499AC',
  yellow: '#EDEA81',
  green: '#9BC281',
  orange: '#F8CD76',
}

export const darkTheme = {
  surface: '#131C21',
  surfaceSelected: '#323739',
  surfaceHover: '#2D3134',
  unread: '#000000',
  myChatBubble: '#056162',
  theirChatBubble: '#262D31',

  primary: '#000000',
  onPrimary: defaultColors.white,
  secondary: '#30b6f6',
  panelBackground: '#2A2F32',
  onPanelBackground: defaultColors.white,
  panelBackgroundLight: '#131C21',
  background: '#090E11',
  text: 'rgba(241,241,242,0.63)',
  title: defaultColors.white,
  input: '#2A2F32',
  avatarBackground: '#6E7377',
  avatarIcon: '#D6D7D9',
  scrollbar: '#394045',
  onSurface: '#999999',
  storyBackground: '#F6F6F6',
}

export const lightTheme = {
  surface: '#FFFFFF',
  surfaceSelected: '#EBEBEB',
  surfaceHover: '#F5F5F5',
  unread: '#06D755',
  myChatBubble: '#DCF8C6',
  theirChatBubble: '#FFFFFF',

  primary: '#000000',
  onPrimary: defaultColors.white,
  secondary: '#FFFFFF',
  panelBackground: '#E7E7E7',
  onPanelBackground: defaultColors.black,
  panelBackgroundLight: '#F6F6F6',
  background: '#000000',
  text: '#4A4A4A',
  title: defaultColors.white,
  input: defaultColors.white,
  avatarBackground: '#DFE5E7',
  avatarIcon: '#FFFFFF',
  scrollbar: '#CCCCCC',
  onSurface: '#999999',
  storyBackground: '#F6F6F6',
}

export const mainColors = {
  ...defaultColors,
  error: '#B00020',
  success: '#2AB573',
  warning: '#F7BB56',
  danger: '#E85628',
}
