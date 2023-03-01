import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #2E7BA2;
    height: 128px;
    position: relative;
    
    img {
        width: 233px;
    }
    
    svg {        
        color: #FFFFFF;
    }

    nav {
        content: "";
        position: absolute;
        width: 100%;

        left: 100%;
        top: 100%;
        background-color: #2E7BA2;

        transition: 0.5s all;
        
        ul {
            width: 100%;

            li {
                padding: 1rem;
                position: relative;
                text-align: center;
                color: #FFFFFF;
                font-weight: 700;

                &:last-child {
                    &:after {
                        display: none;
                    }
                }

                &:after {
                    content: "";
                    width: 90%;
                    bottom: 0;
                    left: 0;
                    transform: translate(5%, 0%);
                    position: absolute;
                    background-color: #FFFFFF;
                    height: 1px;
                }
            }
        }
    }

    .open {
        left: 0%;
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