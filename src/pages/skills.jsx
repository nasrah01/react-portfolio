import styled from "styled-components";

const Skills = () => {
  return (
    <Container>
      <SideBar>
        box 1
      </SideBar>
      <About>
        box 2
      </About>
    </Container>
  )
};

export default Skills;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`

const SideBar = styled.div`
background-color: red;
flex: 1;
`

const About = styled.div`
background-color: blue;
flex: 3;
`