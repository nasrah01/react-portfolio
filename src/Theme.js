import { createContext, useState } from 'react'
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./GlobalStyles";

export const ThemeContext = createContext({
  isLightTheme: false,
  toggleTheme: () => {}
})

const Theme = ({ children }) => {
  const [light, setLight ] = useState(true);

  const toggleTheme = () => {
    setLight(!light);
  }

  return (
    <ThemeContext.Provider value={{isLightTheme: light, toggleTheme}}>
      <ThemeProvider theme={light ? lightTheme : darkTheme }>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Theme

