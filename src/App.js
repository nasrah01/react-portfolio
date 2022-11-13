import { GlobalStyle} from "./GlobalStyles"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "components/NavBar";
import Home from './pages/home'
import Skills from "./pages/skills";
import Portfolio from './pages/portfolio'
import Contact from "./pages/contact";
import styled from 'styled-components'
import Footer from "components/Footer";
import ScrollToTop from "components/ScrollToTop";

function App() {

  return (
    <div>
      <GlobalStyle />
      <BrowserRouter basename="/">
        <Container>
          <NavBar />
          <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </ScrollToTop>
          <Footer />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

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
`;