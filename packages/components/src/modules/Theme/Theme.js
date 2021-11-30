import React, { createContext, useState } from 'react'
import { createThemeColors, mainColors, lightTheme, darkTheme } from './Colors'
import { FontStyles } from './Fonts'
import { GlobalTheme, Ellipsis, getAlphaRgb } from './Utils'
import { ThemeProvider } from 'styled-components'

const ThemeContext = createContext()

export const Theme = ({ colors: customColors = {}, children }) => {
  const [theme, setTheme] = useState('light')

  const switchTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const themeConfig = {
    colors: {
      ...mainColors,
      ...customColors,
      ...(theme === 'light' && createThemeColors(lightTheme)),
      ...(theme === 'dark' && createThemeColors(darkTheme)),
    },
    font: FontStyles,
    utils: {
      ellipsis: Ellipsis,
    },
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, switchTheme }}>
      <ThemeProvider theme={themeConfig}>
        <GlobalTheme />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Theme
export { getAlphaRgb, ThemeContext }
