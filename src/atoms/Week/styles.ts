import styled from "styled-components";

export const Container = styled.h2`
  background-color: #df9010;
  max-width: 300px;
  font-size: 2rem;
  color: #ffffff;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  padding: 1rem 0;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    position: relative;

    &::before {
      content: "";
      width: 83.5px;
      height: 1px;
      position: absolute;
      background-color: #df9010;
      position: absolute;
      top: 50%;
      left: -25%;
      transform: translate(-50%, -50%);
    }

    &::after {
      content: "";
      width: 83.5px;
      height: 1px;
      position: absolute;
      background-color: #df9010;
      position: absolute;
      top: 50%;
      right: -25%;
      transform: translate(50%, -50%);
    }
  }

  @media screen and (min-width: 1440px) {
    &::before {
      max-width: 337.5px;
      width: 100%;
      top: 50%;
      left: -75%;
      transform: translate(-50%, -50%);
    }
    &::after {
      max-width: 337.5px;
      width: 100%;
      top: 50%;
      right: -75%;
      transform: translate(50%, -50%);
    }
  }
`;
