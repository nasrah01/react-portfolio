import styled from 'styled-components'
import { skillSet } from "data/skills";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";

const Skill = () => {
  return (
    <SkillBox>
      {skillSet.map((items, index) => (
        <Item key={index}>
          {items.names.map((item, _index) => (
            <Stack key={_index}>
              <Icon>
                <MdOutlineKeyboardArrowRight />
              </Icon>
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
  display: flex;

  p {
    font-size: 1.6rem;
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.brightColor};
`

const Item = styled.div`
  padding: 0 2rem;
`;

const Stack = styled.div`
  display: flex;
  align-items: center;
  p {
    color: ${(props) => props.theme.secondaryText};
  }
`;