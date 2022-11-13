import styled from "styled-components";
import Project from '../components/Project'

const Portfolio = (props) => {
  return (
    <Projects>
      <Container>
        <Header>top_projects</Header>
        <Boxes>
          <Project />
        </Boxes>
      </Container>
    </Projects>
  )
};

export default Portfolio;

const Projects = styled.div`
  display: flex;
  flex: 1;
  padding: 50px;
  z-index: ${(props) => props.theme.zindex};

  @media screen and (max-width: 600px) {
    padding: 20px 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100%;
`

const Header = styled.h2`
  padding: 30px;
  color: ${(props) => props.theme.plain};
`

const Boxes = styled.div`
  display: flex;
  padding: 30px;

  @media screen and (max-width: 1054px) {
    flex-direction: column;
  }

  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;