import { createGlobalStyle } from "styled-components";

export { ThemeProvider, createGlobalStyle, default as styled, css } from 'styled-components';

export * from './theme';

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