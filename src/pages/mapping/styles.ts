import styled from "styled-components";

export const Container = styled.section`
    
    .title {
        color: #444444;
        padding: 0 1.5rem ;
        font-weight: 700;
        font-size: 2rem;
        text-align: center;
    }

    @media screen and (min-width: 768px) {}
    @media screen and (min-width: 1440px) {
        div {
            display: flex;
            section {
                display: block;
                .picture {
                    max-height: 281px;
                }
                &:nth-child(2) {
                    .picture {
                        margin-top: 5rem;
                    }
                }
            }
        }
    }
`;