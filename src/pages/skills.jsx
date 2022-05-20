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
        <AboutDescription>
          <Header>about_me</Header>
          <Text>{AboutSet.description}</Text>
        </AboutDescription>
        <Terminal>
          <TerminalTitles>
            <p>Terminal</p>
            <p>Problems</p>
            <p>Output</p>
            <p>debug console</p>
          </TerminalTitles>
          <TerminalCode>
            <p>
              Check out my github to see examples of me using <br />
              all the front-end and back-end languages, libraries, <br />
              and frameworks.
            </p>
            <div>
              <h4>Code:</h4>
              <a
                href="https://github.com/nasrah01"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/nasrah01
              </a>
            </div>
          </TerminalCode>
        </Terminal>
      </About>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const SideBar = styled.div`
  background: ${(props) => props.theme.bodyOffSet};
  flex: 20%;
  border-right: ${(props) => props.theme.border};
  border-top: ${(props) => props.theme.border};

  @media screen and (max-width: 600px) {
    border-right: none;
  }
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
  background: ${props => props.theme.body};
  flex: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.h2`
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`

const Text = styled.div`
  width: 600px;
  color: ${(props) => props.theme.primaryColor};
  padding-top: 10px;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 20px;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const AboutDescription = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;

  @media screen and (max-width: 600px) {
    padding: 30px 0;
  }
`;

const Terminal = styled.div`
  height: 200px;
  border-top: .3px solid ${props => props.theme.borderColor};
`

const TerminalTitles = styled.div`
  display: flex;
  color: ${(props) => props.theme.primaryColor};

  p {
    font-size: 12px;
    text-transform: uppercase;
    margin: 1rem 0.5rem;
    
  }

  p:first-child {
    color: ${props => props.theme.textColor};
    border-bottom: 1px solid ${props => props.theme.primaryColor};
  }
`;

const TerminalCode = styled.div`
  font-size: 13px;

  p {
    padding: .8rem;
  }

  div {
    display: flex;
    padding: .5rem 2rem;
  }

  h4 {
    font-weight: 700;
  }

  a {
    padding-left: 1rem;
  }

  a:active, a:visited, a:link, a:hover {
    color: ${props => props.theme.linkColor};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;