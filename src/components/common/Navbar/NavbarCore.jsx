import Logo from '../../../assets/icons/🎨 Icon Color.svg';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { Container } from '../../../styles/theme';

const BREAK_POINT = {
  mobile: 768,
  tablet: 1248,
};
// const NavbarOuter = styled.div`
//     width: 100%;
//     border-bottom: 1px solid #EDEDED;
//     position: sticky;
//     top: 0;
//     /* 필요하다면 배경 색상과 z-index를 지정해서 
//         스크롤 시 위에 고정할 수도 있음 */
//     background-color: white;
//     z-index: 999;
// `;

const NavbarWrapper = styled.header`
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 11px 0px;

  div {
    display: flex;
    justify-content: space-between;
  }
    align-items: center;
    padding: 11px 0px;

    border-bottom: 1px solid #EDEDED;

    @media (max-width: ${BREAK_POINT.tablet}px){
        padding: 11px 0;
        margin: 0;
    }

`;

const RollingLogo = styled.div`
  box-sizing: border-box;
  width: 106px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LogoText = styled.span`
  font-family: Poppins, sans-serif;
  font-size: 19.97px;
  font-weight: 700;
  line-height: 29.96px;
  text-align: center;
  margin-left: 8px;
  color: #4a494f;
`;

const RollingHeader = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <RollingLogo onClick={handleLogoClick}>
      <img
        src={Logo} alt="Logo"
        style={{ width: '27.82px', height: '27.66px' }}
      />
      <LogoText>Rolling</LogoText>
    </RollingLogo>
  );
};

const MakingRollingPaper = () => {
  const navigate = useNavigate();
  const handleMakingClick = () => navigate('post');

  if (!['/', '/list'].includes(location.pathname)) {
    return null;
  }

  const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: ${BREAK_POINT.tablet}px) {
      gap: 12px;
    }

    @media (max-width: ${BREAK_POINT.mobile}px) {
      gap: 8px;
    }
  `;
  return (
    <ButtonContainer onClick={handleMakingClick}>
      <Button type="outlined" w="157" h="40">
        롤링 페이퍼 만들기
      </Button>
    </ButtonContainer>
  );
};

export default function Navbar() {

    if (
        window.innerWidth <= BREAK_POINT.mobile &&
        !['/','/list'].includes(location.pathname)
    ){
        return null;
    }
  return (
    <NavbarWrapper>
        <Container>
            <RollingHeader />
            <MakingRollingPaper />
        </Container>
    </NavbarWrapper>
  );
}
