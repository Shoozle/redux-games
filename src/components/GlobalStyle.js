import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        background-color: #1e1e1e;
        &::-webkit-scrollbar{
            width: .5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
        }
        &::-webkit-scrollbar-track {
            background-color: white;
        }
    }
    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2 {
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #eee;
    }
    h3 {
        font-size: 1.3rem;
        color: #333;
        padding: 1.4rem 0;
    }
    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a {
        text-decoration: none;

    }

`

export default GlobalStyles;