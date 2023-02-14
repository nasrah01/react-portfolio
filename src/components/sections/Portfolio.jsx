import styled from "styled-components";
import Project from '../Project'

const Portfolio = (props) => {
  return (
    <Projects id='portfolio'>
        <Header>
          <h2>My Portfolio</h2>
          <p>Some of my <span>latest works.</span></p>
        </Header>
        <Boxes>
          <Project />
        </Boxes>
    </Projects>
  )
};

export default Portfolio;

const Projects = styled.div`
  margin: 15rem 0 5rem 0;
  padding: 0 calc(8px + 1.5625vw);
`;

const Header = styled.div`
  text-align: center;

  h2 {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.brightColor};
  }

  p,
  p span {
    font-size: clamp(3rem, 3vw + 1rem, 4rem);;
    color: ${(props) => props.theme.primaryText};
  }

  p {
    margin-bottom: 1.875rem;
    letter-spacing: -0.02em;
    line-height: 0.85;
  }

  p span {
    background-color: ${(props) => props.theme.secondary};
    display: inline-block;
    padding-top: 0.85rem;
  }
`;

const Boxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;