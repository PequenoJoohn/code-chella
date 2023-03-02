import styled from "styled-components";

export const Container = styled.main`
  background-image: url("./assets/banner-mobile.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 270px;

  @media screen and (min-width: 768px) {
    background-image: url("./assets/banner-tablet.png");
    height: 384px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url("./assets/banner-desktop.png");
    height: 407px;
  }
`;
