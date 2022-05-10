import styled from "styled-components"
import Skill from '../components/Skill'
import { AboutSet } from "data/skills";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Skills = () => {
  return (
    <Container>
      <SideBar>
        <SidebarHeader>
          <h3>EXPLORER</h3>
          <SidebarTitle>
            <MdOutlineKeyboardArrowDown />
            <p>MY-INTERESTS</p>
          </SidebarTitle>
        </SidebarHeader>
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
  border-right: ${(props) => props.theme.border};
  border-top: ${(props) => props.theme.border};
  border-left: ${(props) => props.theme.border};
`;

const SidebarHeader = styled.div`
  padding-top: 10px;
  color: ${(props) => props.theme.primaryColor};
  h3 {
    font-weight: 400;
    font-size: 12px;
    padding-left: 20px;
  }
`;

const SidebarTitle = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 10px;

  p {
    font-size: 14px;
    font-weight: 700;
  }
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