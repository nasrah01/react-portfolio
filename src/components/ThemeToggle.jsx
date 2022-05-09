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
  border: 1px sild ${props => props.theme.borderColor};
`;

const Icon = styled.div`
  color: ${(props) => props.theme.primaryColor}
`;