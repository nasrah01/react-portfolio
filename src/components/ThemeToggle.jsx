import { useContext} from 'react'
import styled from 'styled-components'
import { BsSun } from "react-icons/bs";
import {  BiMoon } from "react-icons/bi";
import { ThemeContext } from 'Theme';

const ThemeToggle = () => {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleContainer onClick={toggleTheme} className="btn">
      <Icon>
        {isLightTheme === 'light' ? (
          <BiMoon />
        ) : (
          <BsSun />
        )}
      </Icon>
    </ToggleContainer>
  );
}

export default ThemeToggle

const ToggleContainer = styled.div`
  padding: 0 10px;
`;

const Icon = styled.div`
  color: ${(props) => props.theme.primaryColor};
  font-size: 24px;
  border-radius: 7px;
  padding: 7px;
  display: flex;
  align-items: center;
  transition: all .5s ease;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;