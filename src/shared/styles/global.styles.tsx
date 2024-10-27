import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    outline: none;
    background: none;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
 }

 body {
   background: #fff;
   @media (min-width: 1400px) {
      background: #eee;
   }
 }
`;

export default GlobalStyles;
