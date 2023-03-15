import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 0;
  margin: 0 auto;
  > p {
    background-color: #2e7ba2;
    padding: 1rem;
    font-size: 2rem;
    transition: 0.5s all;
    font-weight: 700;
    color: #ffffff;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > div {
    transition: 0.5s all;
    background-color: #c8deef;
    line-height: 40px;
    padding: 1rem;
  }

  @media screen and (min-width: 768px) {
    max-width: 648px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 996px;
  }
`;
