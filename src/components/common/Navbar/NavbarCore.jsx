import Logo from '../../../assets/icons/🎨 Icon Color.svg';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
    color: #4A494F;
`;

const RollingHeader = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/'); 
    };

    return (
        <RollingLogo onClick={handleLogoClick}>
            <img src={Logo} alt='Logo' style={{ width: '27.82px', height: '27.66px' }} /> 
            <LogoText>Rolling</LogoText>
        </RollingLogo>
    );
};

const MakingRollingPaper = () => {
    // 다른 페이지에서는 안 보이게 만들기
    const navigate = useNavigate();
    const handleMakingClick = () => navigate('list');
    
    return (
        <div onClick={handleMakingClick}>
            {/* <Button type='outlined' w='122' h='40'>롤링 페이퍼 만들기</Button>  */}
            <button>롤링페이퍼 만들기</button>
        </div>
    )
}

export default function Navbar() {
    const Navbar = styled.div`
        border-bottom: 1px #EDEDED;
    `;
    return (
        <Navbar>
            <RollingHeader />
            <MakingRollingPaper />
        </Navbar>
    )
}