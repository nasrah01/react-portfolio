import { GlobalStyle} from "./GlobalStyles"
import { BrowserRouter } from "react-router-dom";
import NavBar from "components/NavBar";
import Home from './components/sections/Home'
import Skills from "./components/sections/Skills";
import Portfolio from './components/sections/Portfolio'
import Contact from "./components/sections/Contact";
import styled from 'styled-components'
import Footer from "components/Footer";

function App() {
  return (
    <BrowserRouter>
    <div>
      <GlobalStyle />
        <Container>
            <NavBar />
              <Home />
              <Skills />
              <Portfolio />
              <Contact />
            <Footer />
        </Container>
    </div>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
 padding: 0;
 margin: 0;
`;