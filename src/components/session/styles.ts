import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem 1.5rem;
 
  .picture {
    width: 100%;
    background-image: url("./assets/people-mobile.png");
    background-size: cover;
    height: 381px;
    background-position: 50%;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;

    h6 {
      font-size: 2rem;
      font-weight: 700;
      font-family: "Raleway", sans-serif;
      color: #444444;
      text-align: center;
      margin-top: 1.5rem;
    }

    > p {
      color: #444444;
      font-size: 1.3rem;
      text-align: center;
      line-height: 3rem;
      margin: 1.5rem 0;
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .picture {
      max-width: 609px;
      background-image: url("./assets/people-desktop.png");
    }

    .description {
      h6 {
        max-width: 405px;
      }

      > p {
        max-width: 648px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 4rem 1.5rem;
    flex-direction: row;
    justify-content: center;

    .description {
      max-width: 540px;
      margin-left: 3rem;
    }
  }
`;
