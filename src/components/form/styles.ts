import styled from "styled-components";

export const Container = styled.form`
  div {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    margin-bottom: 2rem;

    label {
      padding-bottom: 0.5rem;
    }

    input {
      padding: 0.625rem;
    }

    select {
      padding: 0.625rem;
      border: none;
      color: black;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  }
`;
