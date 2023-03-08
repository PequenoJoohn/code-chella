import styled from "styled-components";

export const Container = styled.section`
  .shows {
    margin: 0 auto;
    max-width: 312px;
    width: 100%;

    &:nth-child(1n + 2) {
      margin-top: 6rem;
    }

    .show {
      margin-bottom: 3rem;
      p {
        text-align: center;
        color: #444444;
        &:nth-child(1) {
          font-size: 3rem;
          color: #444444;
          font-weight: 800;
          margin: 3rem 0 2rem 0;
        }

        &:nth-child(2n + 2) {
          margin-top: 2rem !important;
        }
        &:nth-child(1n + 2) {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        &:nth-child(1n + 6) {
          font-size: 2rem;
          font-weight: bold;
        }

        &:nth-child(1n + 10) {
          font-weight: normal;
        }
      }
    }
  }

  .picture {
    background-image: url("./assets/banner-bottom-mobile.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 338px;
    background-color: red;
    mix-blend-mode: multiply;
  }

  @media screen and (min-width: 768px) {
    .shows {
      max-width: 768px;

      .show {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;

        p {
          &:nth-child(1) {
            width: 100% !important;
          }

          &:nth-child(2n + 2) {
            margin-top: 0 !important;
          }

          &:nth-child(1n + 2) {
            margin-bottom: 2rem;
          }

          &:nth-child(2n + 1) {
            width: 50%;
          }
        }
      }
    }
    .picture {
      background-image: url("./assets/banner-bottom-tablet.png");
    }
  }

  @media screen and (min-width: 1440px) {
    .shows {
      max-width: 1500px;
      .show {
        p {
          &:nth-child(1n + 2) {
            width: 24.33%;
          }
        }
      }
    }

    .picture {
      background-image: url("./assets/banner-bottom-desktop.png");
      background-position: bottom;
    }
  }
`;
