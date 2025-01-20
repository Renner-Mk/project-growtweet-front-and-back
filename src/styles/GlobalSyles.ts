import { createGlobalStyle } from "styled-components";

export const GlobalStyles =  createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        font-family:'Open Sans', sans-serif;
        
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Kumbh Sans', sans-serif;
    }
`