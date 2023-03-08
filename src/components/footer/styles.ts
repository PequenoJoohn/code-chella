import styled from "styled-components";

export const Container = styled.main`
  .social-medias {
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5rem 0 2rem 0;

    img {
      max-width: 233px;
    }
    p {
      font-size: 1.25rem;
      text-align: center;

      ul {
        display: flex;
        justify-content: center;
        margin-top: 1rem;

        li {
          &:first-child {
            margin-right: 0.5rem;
          }
          &:nth-child(1n + 2) {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }

  .copyright {
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 768px) {
    .social-medias {
      img {
        margin-bottom: 1.75rem;
      }
      p {
        display: flex;
        align-items: center;
        ul {
          margin: 0 0 0 0.5rem;
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .social-medias {
      align-items: flex-start;
    }
    .copyright {
      max-width: 326px;
      text-align: start;
      line-height: 2rem;
    }
  }
`;
