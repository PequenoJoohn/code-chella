import styled from "styled-components";

export const Container = styled.section`
    padding: 2rem 1.5rem;

    div {
        width: 100%;
        background-image: url("./assets/people-mobile.png");
        background-size: cover;
        height: 381px;
    }

    @media screen and (min-width: 768px) {
        justify-content: center;
        display: flex;
        flex-direction: column;
        background-color: red;
        width: 100%;
        div {
            max-width: 609px;
            background-image: url("./assets/people-desktop.png");
        }
    }
`;