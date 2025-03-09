import styled, { css } from "styled-components";
import Icon from "../../../assets/Icons/Icons";
import { Button } from "./Button";
import { media } from "../../../styles/theme";


export function ShareButton( {...rest  } ){
  return (
    <StyledButton {...rest} />
  )
}

const StyledButton = styled(ShareButtonTemp)`
  ${media.mobile`
    height:32px;
    width:36px;
    span {
      display: none;
    },
    img {
      width: 18px;
    },
  `}
`;


function ShareButtonTemp( { ...rest } ){
  return (
    <Button type='outlined' w='56' h='36' {...rest} icon={true}>
      <Icon name="shareIcon24px" alt="share Button" />
    </Button>
  )
}