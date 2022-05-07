/* eslint-disable react/jsx-no-comment-textnodes */
import styled from 'styled-components'
import { IconContext } from "react-icons"
import { MdOutlineArrowForwardIos } from "react-icons/md"

function Home() {
  return (
    <Container>
      <Hero>
        <Header>
          <p>Hello! I am</p>
          <h1>Nasrah Abraham</h1>
          <h2>front-end developer</h2>
        </Header>
        <IconContext.Provider value={{ className: "icon" }}>
          <Content>
            <MdOutlineArrowForwardIos size={24} />
            <p>All about high quality, high performance websites</p>
          </Content>
        </IconContext.Provider>
      </Hero>
      <CodeContainer>
        <Box>
          <h3>About</h3>
          <About>
            <AboutContent>
              <div>/** </div> 
              <p>I build fun, responsive, and dynamic websites, and believe in
              creating code that is readable, modular and organised. I like to
              work with different technology stacks to build applications that are
              scalable and efficient
              </p>
              <div>*/</div>
            </AboutContent>
            <Contact>Contact</Contact>
          </About>
        </Box>
      </CodeContainer>
    </Container>
  );
}

export default Home

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const Hero = styled.div`
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  line-height: 1.4;

  .icon {
    color: ${(props) => props.theme.boldColor};
  }
`;

const Header = styled.div`
  h1 {
    font-size: 42px;
  }

  h2 {
    font-size: 28px;
    color: ${(props) => props.theme.tertiaryColor};
  }
`;

const Content = styled.div` 
  display: flex;
  align-items: center;

  p {
    color: ${props => props.theme.primaryColor};
    font-size: 22px;
  }

  p::first-letter {
    border-bottom: 4px solid ${props => props.theme.boldColor};
  }
`;

const CodeContainer = styled.div`
  height: 100%;
  border: ${(props) => props.theme.border};
  border-radius: 10px;
  padding: 20px;
  box-shadow: rgba(38, 57, 77, .4) 0px 30px 90px;
`;

const About = styled.div`
  width: 450px;
  background: ${(props) => props.theme.bodyOffSet};
  border-radius: 10px;
  padding: 20px 0;
`;

const AboutContent = styled.div`
  color: ${(props) => props.theme.primaryColor};
  padding: 20px;
  p {
    line-height: 1.6;
    border-left: ${(props) => props.theme.border};
    margin: 10px;
    padding: 10px;
  }
`;

const Box = styled.div`
  h3 {
    padding-bottom: 20px;
    color: ${(props) => props.theme.secondaryColor};
  }
`;

const Contact = styled.div`
  background: ${(props) => props.theme.secondaryColor};
  padding: 5px 20px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.bodyOffSet};
`;
