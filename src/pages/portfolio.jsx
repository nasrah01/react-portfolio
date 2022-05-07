import styled from "styled-components";

const Portfolio = () => {
  return (
    <Projects>
      <Container>
        <Header>Top Projects</Header>
        <Boxes>projects</Boxes>
      </Container>
    </Projects>
  )
};

export default Portfolio;

const Projects = styled.div`
  display: flex;
  flex: 1;
  background: red;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Header = styled.h2``

const Boxes = styled.div``