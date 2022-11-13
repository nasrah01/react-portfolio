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

    position: relative;
    overflow: hidden;

     &::before {
    position: absolute;
    content: "";
    width: 60%;
    height: 70%;
    opacity: 0.5;
    background: linear-gradient(90deg, #b390dc, #931010);
    border-radius: 50%;
    left: -15%;
    bottom: 0%;
    filter: blur(100px);
  }

  &::after {
    position: absolute;
    content: "";
    width: 80%;
    height: 80%;
    opacity: 0.5;
    background: radial-gradient(ellipse at top, #0d6b27, transparent),
      radial-gradient(ellipse at bottom, #5d79d3, transparent);
    border-radius: 50%;
    right: -15%;
    top: -20%;
    filter: blur(100px);
  }
  }

  .btn {
    transition: all .5s ease;
    border-radius: 50px;
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
  body: "#181e34",
  plain: "#fff",
  bodyOffSet: "#0c0f1a",
  bodyTrio: "#171d33",
  textColor: "#000",
  typeColor: "#bbbddd",
  linkColor: "#00e600",
  primaryColor: "#99a6b2",
  secondaryColor: "#cc7000",
  tertiaryColor: "#098bdc",
  boldColor: "#400d73",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  opacity: "1",
  border: "1px solid #666666",
  borderColor: "#666666",
  zindex: "1",
};

export const lightTheme = {
  body: "#fafafa",
  bodyOffSet: "#f2f2f2",
  plain: "#000",
  bodyTrio: "#ffffff",
  textColor: "#1a1a1a",
  typeColor: "#595959",
  linkColor: "#0000e6",
  primaryColor: "#172436",
  secondaryColor: "#446ca2",
  tertiaryColor: "#e6007a",
  boldColor: "rgba(35, 12, 106, .6)",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  opacity: ".9",
  border: "1px solid #d3d9de",
  borderColor: "#d3d9de",
  zindex: "1",
};
