import styled from "styled-components";

interface IContainer {
  image: string;
  position: "left" | "right" | "center" | string;
}

export const Container = styled.section<IContainer>`
  padding: 2rem 1.5rem;

  .picture {
    width: 100%;
    background-image: ${(props) =>
    props.image &&
    `url("${props.image.replace(/\.(png|jpg|jpeg|gif)$/, "-mobile$&")}")`};
    background-size: cover;
    height: 381px;
    background-position: 50%;
    border-radius: 1rem;
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
      background-image: ${(props) =>
    props.image &&
    `url("${props.image.replace(/\.(png|jpg|jpeg|gif)$/, "-tablet$&")}")`};
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
    flex-direction: ${(props) =>
    props.position === "left" ? "row" : props.position === "right" ? "row-reverse" : "column"};
    justify-content: center;

    .description {
      h6 {
        max-width: 100%;
        width: 100%;
        text-align: ${(props) => (props.position === "left" ? "start" : props.position === "right" ? "end" : "center")};
      }

      max-width: 540px;
      margin-left: ${(props) => props.position === "left" && "3rem"};
      margin-right: ${(props) => props.position === "right" && "3rem"};

      p {
        text-align: ${(props) => (props.position === "left" ? "start" : props.position === "right" ? "end" : "center")};
      }
    }
  }
`;
