import { useState } from 'react';
import { HashLink as NavLink } from "react-router-hash-link";
import styled from 'styled-components'
import ThemeToggle from "../components/ThemeToggle";
import { CgMenuRight } from "react-icons/cg";
import {MdOutlineClose} from 'react-icons/md';
import { AiFillGithub } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BiCopyright } from "react-icons/bi";

const NavBar = () => {

   const [isOpen, setIsOpen] = useState(false);

  window.addEventListener("resize", () => {setIsOpen(false)});
  
  return (
    <NavContainer>
      <Name>NA</Name>
      <NavButtons>
        <Toggles>
          <ThemeToggle />
          <NavToggle>
            {isOpen ? (
              <MdOutlineClose onClick={() => setIsOpen(false)} />
            ) : (
              <CgMenuRight onClick={() => setIsOpen(true)} />
            )}
          </NavToggle>
        </Toggles>
        <NavLinks isOpen={isOpen}>
          <Link>
          <NavLink
            to="#home"
            onClick={() => {
              setIsOpen(false);
            }}
            smooth
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="#skills"
            onClick={() => {
              setIsOpen(false);
            }}
            smooth
          >
            <li>About me</li>
          </NavLink>
          <NavLink
            to="#portfolio"
            onClick={() => {
              setIsOpen(false);
            }}
            smooth
          >
            <li>Projects</li>
          </NavLink>
          <NavLink
            to="#contact"
            onClick={() => {
              setIsOpen(false);
            }}
            smooth
          >
            <li>Contact</li>
          </NavLink>
          </Link>
          <SocialLinks>
            <Icon>
              <a
                href="mailto:contact@nasrah.dev"
                target="_blank"
                rel="noreferrer"
              >
                <HiOutlineMail size={20} />
              </a>
            </Icon>
            <Icon>
              <a
                href="https://github.com/nasrah01"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub size={20} />
              </a>
            </Icon>
            <Icon>
              <a
                href="https://linkedin.com/in/nasrah-abraham-747826254"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin size={20} />
              </a>
            </Icon>
          </SocialLinks>
          <Copyright>
            <BiCopyright size={20} />
            <p>2024 Nasrah Abraham</p>
          </Copyright>
        </NavLinks>
      </NavButtons>
    </NavContainer>
  );
}

export default NavBar

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem calc(28px + 1.5625vw);
  color: ${(props) => props.theme.primaryText};

  @media screen and (max-width: 500px) {
    padding: 2rem;
  }
`;

const Name = styled.h2`
  color: ${(props) => props.theme.primaryText};
  font-size: 28px;
  font-family: "Montez", cursive;
`;

const NavButtons = styled.div``

const Toggles = styled.div`
  display: flex;
`;

const NavToggle = styled.div`
  font-size: 4rem;
  border-radius: 7px;
  padding: 7px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
  z-index: 3000;
  cursor: pointer;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
`

const Icon = styled.div`
  cursor: pointer;
  padding: 0 10px;

  a:link,
  a:visited {
    color: ${props => props.theme.secondaryText};
  }
  a:hover,
  a:focus {
    color: ${props => props.theme.brightColor};
  }
`;

const Copyright = styled.div`
  display: flex;
  padding: 30px 5px 20px 5px;
  align-items: center;

  p {
    font-size: 12px;
    padding-left: 5px;
  }
`

 const NavLinks = styled.div`
   background: ${(props) => props.theme.lightPrimary};
   width: 450px;
   position: fixed;
   right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
   top: 0;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   transition: 0.5s;
   border-bottom: 2px solid ${(props) => props.theme.brightColor};
   z-index: 2000;

   @media screen and (max-width: 500px) {
     width: 100%;
   }
 `;

 const Link = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   list-style: none;
   flex: 1;

    a { 
      border: none;
      font-size: 4rem;
      font-weight: 600;
      text-decoration: none;
      padding: 0 10px;
      margin-bottom: 1rem;
    }

   a:link,
   a:visited {
     color: ${props => props.theme.primaryText};
   }
   a:hover,
   a:focus {
     background-color: ${props => props.theme.secondary};
   }
 `;