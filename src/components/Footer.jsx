import styled from "styled-components";
import { AiFillGithub } from 'react-icons/ai';
import { BiCopyright } from "react-icons/bi";
import { FiLinkedin } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import ImageFive from '../Images/image5.png'

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <FooterDate>
          <BiCopyright size={18} />
          <p>2024 Nasrah Abraham</p>
        </FooterDate>
        <FooterContact>
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
        </FooterContact>
      </Content>
      <Image>
        <img src={ImageFive} alt="ornament" />
      </Image>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  margin-top: 5rem;
  padding: 0 calc(8px + 1.5625vw);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterContact = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Icon = styled.div`
  cursor: pointer;
  padding: 0 10px;

  a:link,
  a:visited {
    color: ${(props) => props.theme.secondaryText};
  }
  a:hover,
  a:focus {
    color: ${(props) => props.theme.brightColor};
  }
`;

const FooterDate = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.secondaryText};

  p {
    font-size: 1.3rem;
    padding-left: .5rem;
    margin-top: .2rem;
    font-weight: 600;
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    width: 100%;
    height: 100%;
  }
`