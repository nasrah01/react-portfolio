import styled from 'styled-components'
import {ProjectSet } from '../data/projects'

const Project = () => {

  return (
    <>
      {ProjectSet.map((project, index) => (
        <Box key={index}>
          <Border>
            <Header>{project.title}</Header>
            <Content>
              <Imaging>
                <img src={project.image} alt={project.title} />
              </Imaging>
              <a href={project.projectLink} target="_blank" rel="noreferrer">
                <Path>View project</Path>
              </a>
            </Content>
          </Border>
          <Description>{project.description}</Description>
          <a href={project.codeLink} target="_blank" rel="noreferrer">
            <Button>Go to Github</Button>
          </a>
        </Box>
      ))}
    </>
  );
}

export default Project

const Box = styled.div`
  max-width: 600px;
  padding: 0 30px;
  a {
    text-decoration: none;
  }

  @media screen and (max-width: 1054px) {
    padding: 10px 20px 40px 20px;
  }

  @media screen and (max-width: 600px) {
    min-width: 380px;
  }
`;

const Header = styled.div`
  color: ${props => props.theme.secondaryColor};
  padding: 0 20px 10px 20px;
  font-weight: 600;
`;

const Border = styled.div`
  border: ${(props) => props.theme.border};
  border-radius: 10px;
  padding: 20px;

  @media screen and (max-width: 600px) {
    padding: 20px 0;
  }
`;

const Content = styled.div`
  background: ${(props) => props.theme.bodyOffSet};
  border-radius: 10px;
  padding-bottom: 10px;
`;

const Imaging = styled.div`
  padding: 20px;
  height: 100%;
  width: 100%;
  object-fit: contain;

  @media screen and (max-width: 600px) {
    padding: 20px 0;
  }

  img {
    height: 100%;
    width: 100%;
    border-radius: 5px;
    opacity: ${(props) => props.theme.opacity};
  }
`;

const Path = styled.div`
  background: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.bodyOffSet};
  font-weight: 600;
  padding: 10px 10px 5px 10px;
  margin-bottom: 20px;
`

const Description = styled.div`
  padding: 20px 0;
  color: ${(props) => props.theme.primaryColor};
  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Button = styled.div`
  color: ${props => props.theme.tertiaryColor};
  border: 1.5px solid ${props => props.theme.primaryColor};
  padding: 10px;
  border-radius: 50px;
  display: inline;
`;