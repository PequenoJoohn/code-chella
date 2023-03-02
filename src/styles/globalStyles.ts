import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Calistoga', cursive;
    }

    p, a, li, span {
        font-family: 'Raleway', sans-serif;
    }

    ul {
        list-style: none;
    }
`;
