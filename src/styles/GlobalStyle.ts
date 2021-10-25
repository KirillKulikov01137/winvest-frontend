import { createGlobalStyle } from 'styled-components'
import {colors} from "./variables";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 10px;
  }
  
  body {
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    color: ${colors.white};
  }
  
  a {
    text-decoration: none;
  }
  
  input, input:focus {
    border: none;
    outline: none;
  }
  
  button {
    border: none;
  }
`
