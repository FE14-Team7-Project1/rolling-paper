import styled from "styled-components";
import { Font, theme } from "../../../styles/theme";
import { useState } from "react";


export function ToggleButton( { tabs, activeTab, ...rest } ){
  const tabLength = tabs.length;
  const tabWidth = 122;
  const buttonWidth = tabLength * tabWidth;
  const [ toggleTab , setToggleTab ] = useState(Number(activeTab));
  const [ activePosition , setActivePosition ] = useState(Number(activeTab * tabWidth));

  const handleActiveTab = (index) => {
    setToggleTab(index);
    setActivePosition( index *  tabWidth);
  }

  return (
    <StyledToggleButton {...rest} style={{ width: buttonWidth}}>
      {tabs.map((tab, index) => (
        <button 
          key={index} 
          className={toggleTab === index ? "button active" : "button"}
          onClick={() => handleActiveTab(index)}
        >
          {tab}
        </button>
      ))}
      <StyleActiveButton style={{ width: tabWidth , left: activePosition}}>&nbsp;</StyleActiveButton>
    </StyledToggleButton>
  )
}

const StyleActiveButton = styled.div`
  position: absolute;
  top:0;
  left:0;
  height: 40px;
  border-radius: 6px;
  background-color: ${theme.colors.basic.white};
  border: 2px solid ${theme.colors.purple[600]};
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  z-index: 1;
`;

const StyledToggleButton = styled.div`
  position: relative;
  display: flex;
  border-radius: 999px;
  background-color:${theme.colors.gray[100]};
  border: 1px solid ${theme.colors.gray[100]};
  border-radius: 6px;
  button {
    position: relative;
    width: 122px;
    height: 40px;
    border-radius: 6px;
    ${Font.f16}
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background-color: rgba(255,255,255,0);
    z-index: 3;
  }
  .button.active {
    color: ${theme.colors.purple[700]};
    font-weight: 700;
  }
`;
