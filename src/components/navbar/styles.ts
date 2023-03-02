import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #2e7ba2;
  height: 128px;
  position: relative;

  img {
    width: 233px;
  }

  svg {
    color: #ffffff;
  }

  nav {
    content: "";
    position: absolute;
    width: 0%;
    right: 0%;
    top: 100%;
    background-color: #2e7ba2;
    transition: 0.3s all;
    overflow: hidden;

    ul {
      width: 100%;

      li {
        width: 100%;
        padding: 1rem;
        position: relative;
        text-align: center;
        font-weight: 700;

        a {
          color: #ffffff;
          text-decoration: none;
        }

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
          background-color: #ffffff;
          height: 1.5px;
        }
      }
    }
  }

  .open {
    width: 100%;
    right: 0%;
    overflow: visible;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    height: 200px;

    svg {
      display: none;
    }

    nav {
      position: initial;
      width: 100%;

      ul {
        display: flex;
        justify-content: space-evenly;
        padding-bottom: 2rem;

        li {
          padding: 0 1rem;
          font-size: 20px;
          color: #ffffff;
          font-weight: 700;

          &:after {
            display: none;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    height: 128px;
    width: initial;

    nav {
      width: 800px;
      ul {
        align-items: center;
        padding: 0;
        li {
          padding: 0;
        }
      }
    }
  }
`;
