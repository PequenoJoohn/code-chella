import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
    }

    body {
        background: rgb(250,207,157);
        background: linear-gradient(0deg, rgba(250,207,157,1) 0%, rgba(251,240,221,1) 50%, rgba(200,222,239,1) 100%); 
        background-repeat: no-repeat;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Calistoga', cursive;
    }

    label, p, a, li, span {
        font-family: 'Raleway', sans-serif;
    }

    ul {
        list-style: none;
    }
`;
