import styled from 'styled-components'
import { skillSet } from "data/skills";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown
 } from "react-icons/md";
 import { AiTwotoneFolderOpen } from "react-icons/ai";

const Skill = () => {
  return (
    <SkillBox>
      {skillSet.map((items, index) => (
        <Item key= {index}>
          <Category>
            <MdOutlineKeyboardArrowDown />
            <p>{items.title}</p>
          </Category>
          <Technology>
            <MdOutlineKeyboardArrowRight />
            <p>{items.category}</p>
          </Technology>
          {items.names.map((item, _index) => (
            <Stack key={_index}>
              <AiTwotoneFolderOpen />
              <p>{item}</p>
            </Stack>
          ))}
        </Item>
      ))}
    </SkillBox>
  );
}

export default Skill

const SkillBox = styled.div`
  font-size: 14px;
  padding: 10px;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 10px;
  }
`;

const Item = styled.div`
  @media screen and (max-width: 600px) {
    padding-bottom: 10px;
  }
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 0;
  color: ${props => props.theme.textColor};
`

const Technology = styled.div`
  display: flex;
  align-items: center;
  padding: 1px 10px;
  color: ${(props) => props.theme.tertiaryColor};
`;

const Stack = styled.div`
  display: flex;
  align-items: center;
  padding: 1px 30px;
  color: ${(props) => props.theme.primaryColor};

  p {
    padding-left: 5px;
  }
`;