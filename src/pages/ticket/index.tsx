import Banner from "../../atoms/banner";
import Form from "../../components/form";
import Navbar from "../../components/navbar";

import { Container } from "./styles";

const Ticket = () => {
  const banners = {
    backgroundMobile: "./assets/banner-ticket-mobile.png",
    backgroundTablet: "./assets/banner-ticket-tablet.png",
    backgroundDesktop: "./assets/banner-ticket-desktop.png",
  };

  return (
    <Container>
      <Navbar />
      <Banner
        backgroundDesktop={banners.backgroundDesktop}
        backgroundTablet={banners.backgroundTablet}
        backgroundMobile={banners.backgroundMobile}
      />
      <h3>Preencha o formulário a seguir:</h3>
      <Form />
    </Container>
  );
};

export default Ticket;
