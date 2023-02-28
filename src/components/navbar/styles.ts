import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 128px;
    background-color: #2E7BA2;

    img {
        width: 233px;
    }
    
    svg {        
        color: #FFFFFF;
    }

    @media screen and (min-width: 768px) {
        flex-direction: column;
        height: 200px;

        svg {
            display: none;
        }

        ul {
            display: flex;
            justify-content: space-around;

            li {
                padding: 0 1rem;
                font-size: 20px;
                color: #FFFFFF;
                font-weight: 700;
            }
        }
    }
`;