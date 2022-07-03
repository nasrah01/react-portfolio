import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import ThemeToggle from "../components/ThemeToggle";

const NavBar = () => {
  return (
    <NavContainer>
      <Title>
        <Buttons>
          <span style={{ background: "#FF605C" }}></span>
          <span style={{ background: "#F3C94F" }}></span>
          <span style={{ background: "#95EB80" }}></span>
        </Buttons>
        <Name>nasrah_abraham</Name>
        <ThemeToggle />
      </Title>
      <NavBoxes>
        <NavLink to="/" >
          <li>_home</li>
        </NavLink>
        <NavLink to="/skills" >
          <li>_about me</li>
        </NavLink>
        <NavLink to="/portfolio" >
         <li>_projects</li>
        </NavLink>
        <NavLink to="/contact" >
          <li>_contact</li>
        </NavLink>
      </NavBoxes>
    </NavContainer>
  );
}

export default NavBar

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  -webkit-box-shadow: 0 4px 6px -6px #cecaca;
  -moz-box-shadow: 0 4px 6px -6px #cecaca;
  box-shadow: 0 4px 6px -6px #cecaca;
  margin-bottom: 2px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
`;

const Name = styled.h2`
   font-size: 16px;
   color: ${(props) => props.theme.primaryColor};
`;

const Buttons = styled.div`
  display: flex;

  span {
    height: 13px;
    width: 13px;
    border-radius: 6.5px;
    margin: 0 5px;
    background: black;

    @media screen and (max-width: 600px) {
      height: 10px;
      width: 10px;
      border-radius: 5px;
      margin: 0 3px;
    }
  }
`;

const NavBoxes = styled.ul`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.bodyOffSet};
  list-style-type: none;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.primaryColor};
    padding: 10px 45px;
    border-right: 1px solid ${(props) => props.theme.borderColor};
    font-size: 14px;

    @media screen and (max-width: 600px) {
      font-size: 12px;
      padding: 10px;
      width: 100%;
      text-align: center;
    }
  }

  .active {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.secondaryColor};
    border: none;
    border-top: 3px solid #ff605c;
  }
`;