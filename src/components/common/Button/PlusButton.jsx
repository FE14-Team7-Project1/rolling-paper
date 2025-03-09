import styled from "styled-components";
import Icon from "../../../assets/Icons/Icons";
import { theme } from "../../../styles/theme";

export function PlusButton({ direction, ...rest}){
  return (
    <StyledPlusButton {...rest}>
      <Icon name='plusIcon' alt={`add button`} />
    </StyledPlusButton>
  );
}


const StyledPlusButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 999px;
  background-color:${theme.colors.gray[500]};
  border: 1px solid ${theme.colors.gray[500]};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
   background-color:${theme.colors.gray[600]};
   border-color: ${theme.colors.gray[600]};
  }
  &:active {
   background-color:${theme.colors.gray[700]};
   border-color: ${theme.colors.gray[700]};
  }
  &:focus {
   background-color:${theme.colors.gray[700]};
   border-color: ${theme.colors.gray[800]};
  }
  &:disabled {
   background-color:${theme.colors.gray[300]};
   border-color: ${theme.colors.gray[300]};
  }
`;

