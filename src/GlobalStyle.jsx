import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        font-family: "arial", sans-serif;
        overflow-x:hidden;
    }
    html{
        font-size: 62.5%;
    }
    a{
        text-decoration:none;
        color: inherit;
    }
`