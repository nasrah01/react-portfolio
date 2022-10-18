import { useState } from 'react';
import styled from 'styled-components'
import ThemeToggle from "../components/ThemeToggle";
import {FcMenu} from 'react-icons/fc'
import {MdOutlineClose} from 'react-icons/md'
import { NavLink } from "react-router-dom";

const NavBar = () => {

   const [isOpen, setIsOpen] = useState(false);

  window.addEventListener("resize", () => {setIsOpen(false)});
  
  return (
    <NavContainer>
      <Title>
        <Buttons>
          <span style={{ background: "#FF605C" }}></span>
          <span style={{ background: "#F3C94F" }}></span>
          <span style={{ background: "#95EB80" }}></span>
        </Buttons>
        <Name>nasrah_abraham</Name>
        <Toggles>
          <ThemeToggle />
          <NavToggle>
            {isOpen ? (
              <MdOutlineClose onClick={() => setIsOpen(false)} />
            ) : (
              <FcMenu onClick={() => setIsOpen(true)} />
            )}
          </NavToggle>
        </Toggles>
      </Title>
      <NavLinks isOpen={isOpen}>
        <NavLink to="/" onClick={() => {
                setIsOpen(false);
              }}>
          <li>_home</li>
        </NavLink>
        <NavLink to="/skills" onClick={() => {
                setIsOpen(false);
              }}>
          <li>_about me</li>
        </NavLink>
        <NavLink to="/portfolio" onClick={() => {
                setIsOpen(false);
              }}>
          <li>_projects</li>
        </NavLink>
        <NavLink to="/contact" onClick={() => {
                setIsOpen(false);
              }}>
          <li>_contact</li>
        </NavLink>
      </NavLinks>
    </NavContainer>
  );
}

export default NavBar

const NavContainer = styled.div`
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

const Toggles = styled.div`
  display: flex;
`;

const NavToggle = styled.div`
  display: none;

  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 3;
    padding: 0 1rem 0 0.5rem;
    font-size: 20px;
    color: ${(props) => props.theme.primaryColor};
    transition: all 0.5s ease;

    &:hover {
      color: ${(props) => props.theme.secondaryColor};
    }
  }
`;

 const NavLinks = styled.div`
   display: flex;
   align-items: center;
   background: ${(props) => props.theme.bodyOffSet};
   list-style-type: none;
   width: 100%;

   a {
     text-decoration: none;
     color: ${(props) => props.theme.primaryColor};
     padding: 10px 45px;
     border-right: 1px solid ${(props) => props.theme.borderColor};

     @media screen and (max-width: 700px) {
       padding: 10px;
       width: 50%;
       text-align: center;
     }
   }

   li {
     font-size: 14px;

     @media screen and (max-width: 700px) {
       font-size: 24px;
     }
   }

   .active {
     background: ${(props) => props.theme.body};
     color: ${(props) => props.theme.secondaryColor};
     border: none;
     width: 50%;
     border-top: 3px solid #ff605c;
   }

   @media screen and (max-width: 700px) {
     position: fixed;
     left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
     top: 0;
     z-index: 2;
     height: 100vh;
     flex-direction: column;
     justify-content: center;
     transition: 0.5s;

     a {
       border: none;
       width: 100%;
       text-align: center;
       font-size: 18px;
     }

     .hidden {
       left: -100%;
     }
   }
 `;