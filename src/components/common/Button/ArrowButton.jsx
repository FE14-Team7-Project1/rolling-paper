import styled from "styled-components";
import Icon from "../../../assets/Icons/Icons";
import { theme } from "../../../styles/theme";

function ArrowButton({ direction, ...rest}){
  return (
    <StyledArrow {...rest}>
      <Icon name={`${direction}Arrow`} alt={`${direction} Button`} size = '16px'/>
    </StyledArrow>
  );
}

export default ArrowButton;

const StyledArrow = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background-color: rgba(255,255,255, 0.9);
  backdrop-filter: blur(4px);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid ${theme.colors.gray[300]};
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

