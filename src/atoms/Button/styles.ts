import styled from "styled-components";

export const Container = styled.button`
  background-color: #2e7ba2;
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  box-shadow: 4px 4px #444444;

  &:hover {
    background-color: #4650bd;
  }

  > p {
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: 700;
  }

  div {
    margin-left: 0.5rem;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    max-width: 281px;
  }
`;
