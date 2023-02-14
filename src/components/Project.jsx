import styled from 'styled-components'
import {ProjectSet } from '../data/projects'
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from "react-icons/ai";


const Project = () => {

  return (
    <>
      {ProjectSet.map((project, index) => (
        <Card key={index}>
          <Imaging>
            <img src={project.image} alt={project.title} />
          </Imaging>
          <Content>
            <Header>{project.title}</Header>
            <Description>{project.description}</Description>
          </Content>
          <Icons>
            <a href={project.projectLink} target="_blank" rel="noreferrer">
              <FiExternalLink />
            </a>
            <a href={project.codeLink} target="_blank" rel="noreferrer">
              <AiFillGithub />
            </a>
          </Icons>
        </Card>
      ))}
    </>
  );
}

export default Project

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 2rem;
  border-radius: 20px;
  background-color: ${(props) => props.theme.darkPrimary};
  max-width: 400px;

  @media screen and (max-width: 1000px) {
    max-width: 500px;
  }
`;

const Content = styled.div`
  padding: 2rem 0;
`;

const Header = styled.div`
  color: ${(props) => props.theme.brightColor};
  padding-bottom: .5rem;
  font-weight: 600;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const Imaging = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

const Icons = styled.div`
  a {
    font-size: 3rem;
    padding-right: 2rem;
  }

  a:link,
  a:visited {
    color: ${(props) => props.theme.primaryText};
  }
  a:hover,
  a:focus {
    color: ${(props) => props.theme.brightColor};
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.secondaryText};
  font-size: 1.6rem;
`;