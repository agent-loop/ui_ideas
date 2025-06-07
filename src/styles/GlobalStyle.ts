import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Base styles */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.primary};
    background-color: ${theme.colors.background.primary};
    color: ${theme.colors.text.primary};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
    line-height: 1.2;
  }

  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Form elements */
  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-family: inherit;
    color: inherit;
  }

  input, textarea {
    font-family: inherit;
  }

  /* Lists */
  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Selection */
  ::selection {
    background-color: ${theme.colors.accent.yellow.light};
    color: ${theme.colors.black};
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.background.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.border.default};
    border-radius: ${theme.borderRadius.round};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.border.dark};
  }

  /* Focus outline */
  :focus-visible {
    outline: 2px solid ${theme.colors.accent.yellow.default};
    outline-offset: 2px;
  }
`; 