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
            <Contact>Contact me</Contact>
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
  padding-top: 20px;

  @media screen and (max-width: 1054px) {
    flex-direction: column;
    padding-bottom: 20px;
  }
`;

const Hero = styled.div`
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  line-height: 1.4;

  .icon {
    color: ${(props) => props.theme.boldColor};
  }

  @media screen and (max-width: 600px) {
    min-height: 500px;
    padding: 20px
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

  @media screen and (max-width: 600px) {
    align-items: flex-start;
  }

  p {
    color: ${props => props.theme.typeColor};
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
  box-shadow: ${props => props.theme.boxShadow};
`;

const About = styled.div`
  width: 450px;
  background: ${(props) => props.theme.bodyOffSet};
  backdrop-filter: ${(props) => props.theme.backdrop};
  border-radius: 10px;
  padding: 20px 0;
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 20px;
  }
`;

const AboutContent = styled.div`
  color: ${(props) => props.theme.primaryColor};
  padding: 20px;

  @media screen and (max-width: 500px) {
    padding: 5px;
  }

  p {
    line-height: 1.6;
    border-left: ${(props) => props.theme.border};
    margin: 10px;
    padding: 10px;

    @media screen and (max-width: 500px) {
      padding: 5px;
      margin: 5px;
    }
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
  font-weight: 600;
`;
