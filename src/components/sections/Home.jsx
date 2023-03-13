/* eslint-disable react/jsx-no-comment-textnodes */
import styled from 'styled-components'
import { IconContext } from "react-icons"
import Typewriter from "typewriter-effect";
import Image01 from '../../Images/image.png';

function Home() {
    
  return (
    <Container id='home'>
      <Box>
        <Hero>
          <Header>
            <h2>
              Hello! I am <span>Nasrah Abraham</span> <br /> Front End Developer
            </h2>
          </Header>
          <AboutContent>
            <p>
              I build responsive, and dynamic websites, and believe in creating
              code that is readable, modular and organised. I work with
              different technology stacks to build applications that are
              scalable and efficient
            </p>
          </AboutContent>
          <IconContext.Provider value={{ className: "icon" }}>
            <Content>
              <div>
                <Typewriter
                  options={{
                    strings: [
                      "All about high quality",
                      "High performance apps!",
                    ],
                    pauseFor: 1500,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 75,
                  }}
                />
              </div>
            </Content>
          </IconContext.Provider>
        </Hero>
        <ImageContainer>
          <img src={Image01} alt="illustration" />
        </ImageContainer>
      </Box>
    </Container>
  );
}

export default Home

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 0 calc(8px + 1.5625vw);
`;

const Box = styled.div`
`

const Hero = styled.div`
  padding: 0 calc((100vw - 900px) / 2);
  margin-bottom: 2rem;
  text-align: center;
`;

const Header = styled.div`
  h2,
  h2 span {
    font-weight: 500;
    font-size: clamp(3rem, 5vw + 1rem, 4.5rem);
    margin-bottom: 1.875rem;
    letter-spacing: -0.02em;
    line-height: 0.85;
    color: ${(props) => props.theme.primaryText};
  }

  span {
    background-color: ${(props) => props.theme.secondary};
    display: inline-block;
    padding-top: 0.85rem;
  }
`;

const Content = styled.div`
  div {
    font-size: 2.5rem;
    color: ${props => props.theme.brightColor};
    font-weight: bold;
  }
`;

const AboutContent = styled.div`
 p {
  font-size: 1.6rem;
  color: ${props => props.theme.secondaryText};
  font-weight: 500;
}
  
`;


const ImageContainer = styled.div`
  flex: 60%;
  display: flex;
  justify-content: center;

  img {
    width: 60%;

    @media screen and (max-width: 750px) {
      width: 100%;
    }

  }
`;