import { createGlobalStyle } from "styled-components";


 export const GlobalStyle = createGlobalStyle`

  *, 
  *::before,
  *::after,
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: normal;
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
    font-family: 'Karma', serif;
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.textColor};
    transition: all .5s ease;
    letter-spacing: .5px;
  }

  .btn {
    transition: all .5s ease;
    border-radius: 10px;
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    background: ${(props) => props.theme.body};
    width: .3rem;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
  }

  @media screen and (min-width: 280px) and (max-width: 800px) {
    body::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const darkTheme = {
  body: "#101423",
  bodyOffSet: "#000",
  textColor: "#fff",
  typeColor: "rgba(189, 164, 203, .5)",
  linkColor: "#00e600",
  primaryColor: "#99a6b2", //grey
  secondaryColor: "#cc7000", //orange
  tertiaryColor: "#098bdc", // blue
  boldColor: "#663399",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  opacity: "1",
  border: "1px solid #666666",
  borderColor: "#666666",
};

export const lightTheme = {
  body: "#fafafa",
  bodyOffSet: "#e2e6e9",
  textColor: "#1a1a1a",
  typeColor: "#8b99a7",
  linkColor: "#0000e6",
  primaryColor: "#172436",
  secondaryColor: "#446ca2",
  tertiaryColor: "#1B21A6", // blue
  boldColor: "#B4B6D9",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  opacity: ".9",
  border: "1px solid #c5ccd3",
  borderColor: "#c5ccd3",
};
