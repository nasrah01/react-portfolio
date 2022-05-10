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
  primaryColor: "#637383", //grey
  secondaryColor: "#cc7000", //orange
  tertiaryColor: "#098bdc", // blue
  boldColor: "#663399",
  boxShadow: "rgba(38, 57, 77, .4) 0px 30px 90px;",
  opacity: ".7",
  border: "1px solid #1a1a1a",
  borderColor: "#1a1a1a",
};

export const lightTheme = {
  body: "#fff",
  bodyOffSet: "#eff5f5",
  textColor: "#000000",
  primaryColor: "#637383", //gray
  secondaryColor: "#333333", //orange
  tertiaryColor: " #2251dd", //blue
  boldColor: "#FF605C", //red
  boxShadow: "rgba(95, 158, 160, 0.4) 0px 10px 40px;",
  opacity: "1",
  border: "1px solid #bfbfbf",
  borderColor: "fff",
};