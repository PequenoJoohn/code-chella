import styled from "styled-components";

interface IContainer {
  backgroundMobile: string;
  backgroundTablet: string;
  backgroundDesktop: string;
}

export const Container = styled.main<IContainer>`
  background-image: ${props => props.backgroundMobile && `url(${props.backgroundMobile})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 270px;

  @media screen and (min-width: 768px) {
    background-image: ${props => props.backgroundTablet && `url(${props.backgroundTablet})`};
    height: 384px;
  }

  @media screen and (min-width: 1440px) {
    background-image: ${props => props.backgroundDesktop && `url(${props.backgroundDesktop})`};
    height: 407px;
  }
`;
