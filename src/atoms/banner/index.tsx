import { Container } from "./styles";

interface IBanner {
  backgroundMobile: string;
  backgroundTablet: string;
  backgroundDesktop: string;
}

const Banner = ({ backgroundMobile, backgroundTablet, backgroundDesktop }: IBanner) => {
  return <Container backgroundDesktop={backgroundDesktop} backgroundTablet={backgroundTablet} backgroundMobile={backgroundMobile} />;
};

export default Banner;
