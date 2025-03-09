import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    min-width: ${theme.breakpoints.min};
    ${theme.fonts.ns};
    font-size: 16px;
    line-height: 1.5;
    color: ${theme.colors.gray[900]};
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;