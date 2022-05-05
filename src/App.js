import { GlobalStyle} from "./GlobalStyles"
import Home from './components/Home'
import Skills from "./components/Skills";
import Portfolio from './components/Portfolio'
import Contact from "./components/Contact";
import ScrollToTop from "components/ScrollToTop";

function App() {

  return (
      <div>
        <GlobalStyle />
        <ScrollToTop />
        <Home />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
  );
}

export default App;
