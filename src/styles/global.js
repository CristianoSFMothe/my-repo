import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --primary-color: #0D2636;
    --secondary-color: #0071DB;
    --text-color: #FFF;

    --font-family: 'Arial, Helvetica, sans-serif'
    --font-size-small: 0.875rem;
    --font-size-media: 1.125rem
    --box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    --description-color: #000;
    --border: 1px solid #eee
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
