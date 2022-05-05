import { createGlobalStyle } from "styled-components";

 export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #010440; //blue
    --secondary-color: #F2441D; // orange
    --black-color:#0D0D0D; //black
  }

  *, 
  *::before,
  *::after,
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,h2,h3,h4,h5,h6 {
    display: inline-block;
  }

  html {
    scroll-behavior: smooth;
    height: 100%;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: ${props => props.theme.body};
    color: ${props => props.theme.textColor};
  }

  ::-webkit-scrollbar {
    background: var(--primary-color);
    width: .3rem;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
  }

  @media screen and (min-width: 280px) and (max-width: 1154px) {
    body::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const darkTheme = {
  body: "#0D0D0D",
  textColor: "#fff",
};

export const lightTheme = {
  body: "#fff",
  textColor: "#0D0D0D",
};