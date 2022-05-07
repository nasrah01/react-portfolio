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
        {isLightTheme ? (
          <BiMoon size={24} />
        ) : (
          <BsSun size={24} />
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
  color: ${(props) => props.theme.primaryColor}
`;