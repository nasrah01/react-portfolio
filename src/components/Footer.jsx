import styled from "styled-components";
import { AiFillGithub } from 'react-icons/ai'
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContact>
        <Title>Find Me</Title>
        <Mail>
          <a href="mailto:contact@nasrah.dev" target="_blank" rel="noreferrer">
            contact@nasrah.dev
          </a>
        </Mail>
        <Icon>
          <a
            href="https://github.com/nasrah01"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={20} />
          </a>
        </Icon>
      </FooterContact>
      <FooterDate>
        <BiCopyright size={20} />
        <p>2022 Nasrah Abraham</p>
      </FooterDate>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background: ${(props) => props.theme.body};
  border-top: ${props => props.theme.border};
  color: ${(props) => props.theme.primaryColor};
  font-size: 12px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const FooterContact = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  border-right: ${(props) => props.theme.border};
  padding: 10px;
`;

const Mail = styled.div`
  border-right: ${(props) => props.theme.border};
  padding: 10px;
  cursor: pointer;

  a {
    text-decoration: none;
  }

  a:link,
  a:visited {
    color: ${(props) => props.theme.primaryColor};
  }

  a:hover,
  a:focus {
    color: ${(props) => props.theme.tertiaryColor};
  }
`;

const Icon = styled.div`
  padding: 0 10px;
  cursor: pointer;

  a:link,
  a:visited {
    color: ${(props) => props.theme.primaryColor};
  }

  a:hover,
  a:focus {
    color: ${(props) => props.theme.tertiaryColor};
  }
`;

const FooterDate = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  p {
    padding-left: 5px;
  }

  @media screen and (max-width: 500px) {
    border-top: ${(props) => props.theme.border};
  }
`;