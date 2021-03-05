import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @keyframes onAutoFillStart {}
  @keyframes onAutoFillCancel {}
  * { 
    margin: 0; 
    padding: 0; 
  }
  *:focus {
    outline:0;
  }
`;

