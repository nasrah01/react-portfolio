import { createContext, useState } from 'react'
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./GlobalStyles";

export const ThemeContext = createContext({
  isDarkTheme: true,
  toggleTheme: () => {}
})

const Theme = ({ children }) => {
  const [dark, setDark ] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
  }

  return (
    <ThemeContext.Provider value={{isDarkTheme: dark, toggleTheme}}>
      <ThemeProvider theme={dark ? darkTheme : lightTheme }>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Theme

