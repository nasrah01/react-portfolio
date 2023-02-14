import styled from "styled-components"
import Skill from '../Skill'
import { AboutSet } from "data/skills";
import Image02 from '../../Images/image1.png';
import Image03 from '../../Images/image2.png';

const Skills = (props) => {
  return (
    <Container id='skills'>
      <AboutContainer>
        <About>
          <Header>About me</Header>
          <Text>{AboutSet.description}</Text>
        </About>
        <SkillsContainer>
          <h2>Here are a few technologies I’ve been working with recently:</h2>
          <Skill />
        </SkillsContainer>
      </AboutContainer>

      <ImageContainer>
        <ImageOne>
          <img src={Image02} alt="workspace" />
        </ImageOne>
        <ImageTwo>
          <img src={Image03} alt="workspace" />
        </ImageTwo>
      </ImageContainer>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.primaryText};
  padding: 2rem calc(8px + 1.5625vw);
  margin: 5rem 0;

  @media screen and (max-width: 1000px) {
    margin: 5rem 0;
    flex-direction: column;
  }

  @media screen and (max-width: 750px) {
    margin: 0;
    flex-direction: column;
  }
`;

const SkillsContainer = styled.div`
  margin-top: 2rem;

  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${(props) => props.theme.secondaryText};
  }
`;

const AboutContainer = styled.div`
  flex: 50%;
`

const ImageContainer = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;

`

const ImageOne = styled.div`
  margin-bottom: 2rem;
  margin-left: 10rem;

  img {
    width: 90%;

    @media screen and (max-width: 1000px) {
      width: 70%;
    }
  }

  @media screen and (max-width: 1000px) {
    margin-top: 5rem;
    display: flex;
    justify-content: flex-end;
  }
`;

const ImageTwo = styled.div`
  align-self: flex-start;
  img {
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    align-self: center;
  }
`;

const About = styled.div`
`;

const Header = styled.h2`
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 600;
  color: ${props => props.theme.brightColor};
  margin-bottom: .5rem;
`;

const Text = styled.div`
  font-size: 1.6rem;
  color: ${(props) => props.theme.secondaryText};
  font-weight: 500;
`;