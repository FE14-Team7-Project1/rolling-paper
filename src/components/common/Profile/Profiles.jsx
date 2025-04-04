import styled from "styled-components";
import { theme } from "../../../styles/theme";


const StyledProfiles = styled.ul`
  display:flex;
  gap:0;
  margin-right: 23px;
  li {
    width:28px;
    height:28px;
    border-radius:999px ;
    margin-right:-12px;
    overflow: hidden;
    border:2px solid ${theme.colors.basic.white};
    ${theme.fs.xxs};
    line-height: 24px;
    img{
      width:100%;
      height:100%;
    }
  }
  li:last-child {
    background-color: ${theme.colors.basic.white};
    text-align: center;
    border-color: ${theme.colors.gray[200]};
  }
`;

export function Profiles ( {recentMessages, totalLength} ) {
  let num = '';
  if (recentMessages && Array.isArray(recentMessages)) {
    const recentLegnth = recentMessages.length;
    num = totalLength - recentLegnth
  }
  
  return (
    totalLength ? <StyledProfiles>
      {recentMessages &&
        recentMessages.map((recentMessage) => {
          return (
          <li key={recentMessage.id}><img src={recentMessage.profileImageURL} /></li>
          );
        })
      }
      <li>+{num}</li>
    </StyledProfiles> : null 
  )
}
