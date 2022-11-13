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
`;