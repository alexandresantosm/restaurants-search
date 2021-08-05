import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.regular};
  }
`;

export default GlobalStyle;
