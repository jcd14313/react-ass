// Lib
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    font-size: 100%;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
  }
  
  ol, ul {
    list-style: none;
    font-family: 'Open Sans', sans-serif;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }

  body {
    background-color: var(--white);
    margin: 0;
    padding: 0;
    font-family: var(--f-family)
  }
`;

export default GlobalStyle;
