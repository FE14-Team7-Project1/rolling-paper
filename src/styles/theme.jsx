import { css, styled } from 'styled-components';

export const theme = {
  colors: { // color
    purple: {
      100:'#F8F0FF',
      200:'#ECD9FF',
      300:'#DCB9FF',
      400:'#C894FD',
      500:'#AB57FF',
      600:'#9935FF',
      700:'#861DEE',
      800:'#6E0AD1',
      900:'#5603A7',
    },
    beige: {
      100:'#FFF0D6',
      200:'#FFE2AD',
      300:'#FFC583',
      400:'#FFAE65',
      500:'#FF8832',
    },
    blue: {
      100:'#E2F5FF',
      200:'#B1E4FF',
      300:'#7CD2FF',
      400:'#34B9FF',
      500:'#00A2FE',
    },
    green: {
      100:'#E4FBDC',
      200:'#D0F5C3',
      300:'#9BE282',
      400:'#60CF37',
      500:'#2BA600',
    },
    gray: {
      100:'#F6F6F6',
      200:'#EEEEEE',
      300:'#CCCCCC',
      400:'#999999',
      500:'#555555',
      600:'#4A4A4A',
      700:'#3A3A3A',
      800:'#2B2B2B',
      900:'#181818',
    },
    basic: {
      white:'#ffffff',
      black:'#000000',
      Error:'#DC3A3A',
      Surface:'#F6F8FF',
    },
  },
  fonts : { // font-family
    nm : `font-family: 'Nanum Myeongjo', serif`,
    np : `font-family: 'Nanum Pen Script', cursive`,
    ns : `font-family: 'Noto Sans KR', sans-serif`,
    pd : `font-family: 'Pretendard-Regular', cursive`,
  },
  p : { // padding
    60: { 0: 'padding: 60px 0'},
    40: { 40: 'padding: 40px 40px' },
    30: { 24: 'padding: 30px 24px' },
    28: { 24: 'padding: 28px 24px' },
    24: { 24: 'padding: 24px 24px'},
    19: { 30: 'padding: 19x 30px'},
    16: { 16: 'padding: 16x 16px'},
    14: { 60: 'padding: 14x 60px', 24: 'padding: 14x 24px', 16: 'padding: 14x 16px'},
    12: { 16: 'padding: 12x 16px', 12: 'padding: 12x 12px'},
    10: { 0: 'padding: 10x 0px'},
    8: { 16: 'padding: 8x 16px', 12: 'padding: 8x 12px'},
    7: { 16: 'padding: 7x 16px', 15: 'padding: 7x 15px'},
    6: { 16: 'padding: 6x 16px', 8: 'padding: 6x 8px', 6: 'padding: 6x 6px'},
    4: { 8: 'padding: 4x 8px'},
    2: { 16: 'padding: 2x 16px'},
    0: { 24: 'padding: 0x 24px', 20: 'padding: 0x 20px', 8: 'padding: 0x 8px' },
  },
  fs : { // font-size
    xxxl: 'font-size: 28px',
    xxl: 'font-size: 24px',
    xl: 'font-size: 20px',
    l: 'font-size: 18px',
    m: 'font-size: 16px',
    s: 'font-size: 15px',
    xs: 'font-size: 14px',
    xxs: 'font-size: 12px',
  },
  m: { // margin
    24: 'margin: 0 24px', 
    20: 'margin: 0 20px'
  },
  mt : { // margin-top
    113: 'margin-top:113px',
    93: 'margin-top:93px',
    91: 'margin-top:91px',
    74: 'margin-top:74px',
    62: 'margin-top:62px',
    50: 'margin-top:50px',
    48: 'margin-top:48px',
    47: 'margin-top:47px',
    45: 'margin-top:45px',
    44: 'margin-top:44px',
    42: 'margin-top:42px',
    40: 'margin-top:40px',
    32: 'margin-top:32px',
    30: 'margin-top:30px',
    28: 'margin-top:28px',
    24: 'margin-top:24px',
    20: 'margin-top:20px',
    16: 'margin-top:16px',
    14: 'margin-top:14px',
    12: 'margin-top:12px',
    8: 'margin-top:8px',
    4: 'margin-top:4px',
  },
  mb : {  // margin-bottom
    113: 'margin-bottom:113px',
    93: 'margin-bottom:93px',
    91: 'margin-bottom:91px',
    74: 'margin-bottom:74px',
    62: 'margin-bottom:62px',
    50: 'margin-bottom:50px',
    48: 'margin-bottom:48px',
    47: 'margin-bottom:47px',
    45: 'margin-bottom:45px',
    44: 'margin-bottom:44px',
    42: 'margin-bottom:42px',
    40: 'margin-bottom:40px',
    32: 'margin-bottom:32px',
    30: 'margin-bottom:30px',
    28: 'margin-bottom:28px',
    24: 'margin-bottom:24px',
    20: 'margin-bottom:20px',
    16: 'margin-bottom:16px',
    14: 'margin-bottom:14px',
    12: 'margin-bottom:12px',
    8: 'margin-bottom:8px',
    4: 'margin-bottom:4px',
  },
  g : { // gap
    62: 'gap: 62px',
    50: 'gap: 50px',
    45: 'gap: 45px',
    44: 'gap: 44px',
    30: 'gap: 30px',
    28: 'gap: 28px',
    24: 'gap: 24px',
    20: 'gap: 20px',
    16: 'gap: 16px',
    14: 'gap: 14px',
    12: 'gap: 12px',
    8: 'gap: 8px',
  }, 
  breakpoints:{
    t: '1247px',
    m: '767px',
    min: '360px',
  },
};



export const Font = {  //  font 설정
  f28:css`
    display: inline-block;
    line-height : 42px;
     ${theme.fs.xxxl};
    font-weight : ${({ $bold }) => $bold ? `700` : `400`};
  `,
  f24:css`
    display: inline-block;
    line-height : 36px;
    ${theme.fs.xxl};
    font-weight : ${({ $bold }) => $bold ? `700` : `400`};
  `,
  f20:css`
    display: inline-block;
    line-height : 30x;
    ${theme.fs.xl};
    font-weight : ${({ $bold }) => $bold ? `700` : `400`};
  `,
  f18:css`
    display: inline-block;
    line-height : 28px;
    ${theme.fs.l};
    font-weight : ${({ $bold }) => $bold ? `700` : `400`};
  `,
  f16:css`
    display: inline-block;
    line-height : 26px;
    ${theme.fs.m};
    font-weight : ${({ $bold }) => $bold ? `700` : `400`};
  `,
  f15:css`
    display: inline-block;
    line-height : 22px;
    ${theme.fs.s};
    font-weight : ${({ $bold }) => $bold ? `700` : `400`};
  `,
  f14:css`
    display: inline-block;
    line-height : 20px;
    ${theme.fs.xs};
    font-weight : ${({ $bold }) => $bold ? `700` : `400`};
  `,
  f12:css`
    display: inline-block;
    line-height : 18px;
    ${theme.fs.xxs};
    font-weight : ${({ $bold }) => $bold ? `700` : `400`};
  `,
}

export const media = {
  // tablet
  tablet: (styles) => css` 
    @media (max-width: ${theme.breakpoints.t}) {
      ${styles}
    }
  `,
  // Mobile
  mobile: (styles) => css` 
    @media (max-width: ${theme.breakpoints.m}) {
      ${styles}
    }
  `,
};

export const Contaner = styled.div`   
  background-color: white;
  max-width: 1248px;
  margin: 0 auto;
 
  ${media.tablet`
    margin: 0 24px;
  `}
  ${media.mobile`
    margin: 0 20px;
  `}
`;