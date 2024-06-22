import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --primary-color: #0D2636;

    --font-family: 'Arial, Helvetica, sans-serif'
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: var(--primary-color);
    font-size: 0.875rem;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 0.875rem;
    font-family: var(--font-family);
  }

  button {
    cursor: pointer;
  }

`;
