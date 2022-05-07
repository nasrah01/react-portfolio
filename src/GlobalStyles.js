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
    font-family: Verdana, Arial, Tahoma, Serif;
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
  body: "#080c12",
  bodyOffSet: "#000",
  textColor: "#fff",
  primaryColor: "#637383", //grey
  secondaryColor: "#ff981a", //orange
  tertiaryColor: "#098bdc", // blue
  boldColor: "#663399",
  boxShadow: "0 5px 5px -5px #172436",
  border: "1px solid #1a1a1a",
};

export const lightTheme = {
  body: "#f9f9f9",
  bodyOffSet: "#f1f1f1",
  textColor: "#000000",
  primaryColor: "#637383", //gray
  secondaryColor: "#333333", //orange
  tertiaryColor: " #2251dd", //blue
  boldColor: "#FF605C", //red
  boxShadow: "0 5px 2px -5px #d9d9d9",
  border: "1px solid #d9d9d9",
};