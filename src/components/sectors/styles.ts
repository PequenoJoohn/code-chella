import styled from "styled-components";

interface IBox {
    background: string;
}

export const Container = styled.section`

.space {
    width: 100%;
    margin: 2rem auto;
    max-width: 360px;
    height: 360px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("./assets/sectors-tablet.png");
}

ul {
    margin: 0 auto;
    max-width: 246px;

        li {
            display: flex;
            margin-bottom: 2rem;

            &:last-child {
                margin-bottom: 2.5rem;
            }

            &:first-child {
                p {
                    font-weight: 700;
                }
            }

            p {
                font-size: 1.25rem;
            }
        }
    }

    @media screen and (min-width: 768px) {
        .space {
            max-width: 648px;
            height: 609px;
        }

        ul {
            margin: 0 auto;
            max-width: 246px;
            
            li {
                &:last-child {
                    margin-bottom: 4.25rem;
                }
            }
        }
    }

    @media screen and (min-width: 1440px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem 0 5rem 0;

        .space {
            margin: 0;
        }

         ul {
            margin: 0;
         }
    }
`;

export const Box = styled.div<IBox>`
    width: 32px;
    height: 32px;
    background-color: ${props => props.background};
    margin-right: 1rem;
`;