import { createGlobalStyle } from "styled-components";


 export const GlobalStyle = createGlobalStyle`

  *, 
  *::before,
  *::after,
  h1,h2,h3,h4,h5,h6 {
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: normal;
    font-size: 62.5%;
  }

  html {
    scroll-behavior: smooth;
    background: linear-gradient(90deg, rgb(${(props) =>
      props.theme.primary}) calc(100% - 1px), rgb(${(props) =>
   props.theme.tertiary}) 0);
    background-size: calc((100% - 4*5px)/5 + 5px) 100%;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Karma', serif;
    letter-spacing: .5px;
  }

  ::-webkit-scrollbar {
    width: .3rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #000;
  }

  @media screen and (min-width: 280px) and (max-width: 800px) {
    body::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const darkTheme = {
  primaryText: "#ffffff",
  secondaryText: "#b4b4d5",
  primary: "40, 42, 87",
  secondary: "#78acd9",
  tertiary: "48, 57, 105",
  brightColor: "#f79784",
  lightPrimary: "#383c7a",
  darkPrimary: "#202246",
  highlight: "#FB9D9D",
};

export const lightTheme = {
  primaryText: "#1f2044",
  secondaryText: "#234969",
  primary: "255, 255, 255",
  secondary: "#fcf1e7",
  tertiary: "230, 230, 230",
  brightColor: "#f79784",
  lightPrimary: "#fffaf5",
  darkPrimary: "#f2f2f2",
  highlight: "#dc143c",
};
