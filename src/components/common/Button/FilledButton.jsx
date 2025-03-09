import styled from "styled-components";
import { Button } from "./Button";
import { media } from "../../../styles/theme";

export function FilledButton( { w='100%', h='56', children , ...rest} ){
  return (
    <StyledFilledButton w={w} h={h} {...rest} >
      {children}
    </StyledFilledButton>
  )
}

const StyledFilledButton = styled(FilledButtonTemp)`
  ${media.tablet`
    position:fixed;
    left:24px;
    bottom:24px;
    width: calc(100% - 48px);
  `}
`;

function FilledButtonTemp( { w, h, children , ...rest } ){
    return (
      <Button type='primary' w={w} h={h} {...rest}>
        {children}
      </Button>
    )
}

