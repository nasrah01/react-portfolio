import { useContext} from 'react'
import styled from 'styled-components'
import { BsSun } from "react-icons/bs";
import {  BiMoon } from "react-icons/bi";
import { ThemeContext } from 'Theme';

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleContainer>
      <Icon onClick={toggleTheme}>
        
        {isDarkTheme ? <BsSun size={24} /> : <BiMoon size={24} />}
      </Icon>
    </ToggleContainer>
  );
}

export default ThemeToggle

const ToggleContainer = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  background: red;
`