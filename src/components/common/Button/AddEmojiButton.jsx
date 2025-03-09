import styled from "styled-components";
import Icon from "../../../assets/Icons/Icons";
import { Button } from "./Button";
import { media } from "../../../styles/theme";


export function AddEmojiButton( { ...rest  } ){
  return (
    <StyledButton {...rest} />
  )
}

const StyledButton = styled(AddEmojiButtonTemp)`
  ${media.mobile`
    height:32px;
    width:36px;
    span {
      display: none;
    },
    img {
      width: 20px;
    },
  `}
`;



function AddEmojiButtonTemp( { ...rest  } ){
  return (
    <Button type='outlined' w='88' h='36' {...rest} icon={true}>
      <Icon name="plusEmoji24px" alt="Add Emoji Button" />
      <span>추가</span>
    </Button>
  )
}
