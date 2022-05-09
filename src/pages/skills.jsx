import styled from "styled-components"
import Skill from '../components/Skill'
import { AboutSet } from "data/skills";


const Skills = () => {
  return (
    <Container>
      <SideBar>
        <Skill />
      </SideBar>
      <About>
        <Header>about_me</Header>
        <Text>
          {AboutSet.description}
        </Text>
      </About>
    </Container>
  )
};

export default Skills;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse
  }
`

const SideBar = styled.div`
  background: ${(props) => props.theme.bodyOffSet};
  flex: 20%;
  border: ${(props) => props.theme.border};
`;

const About = styled.div`
  background: ${(props) => props.theme.body};
  flex: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    padding: 30px 0;
  }
`;

const Header = styled.h2`
  
`

const Text = styled.div`
  width: 600px;
  color: ${props => props.theme.primaryColor};
  padding-top: 10px;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 20px;
  }
`