import { createContext, useState } from 'react'
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./GlobalStyles";

export const ThemeContext = createContext({
  isLightTheme: false,
  toggleTheme: () => {}
})

const Theme = ({ children }) => {
  const [themeMode, setThemeMode ] = useState();

   const toggleTheme = () => {
     themeMode === "light" ? setThemeMode("dark") : setThemeMode("light");
   };

  return (
    <ThemeContext.Provider value={{ isLightTheme: themeMode, toggleTheme }}>
      <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default Theme

