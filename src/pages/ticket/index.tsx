import Banner from "../../atoms/banner";
import Form from "../../components/form";
import Navbar from "../../components/navbar";

const Ticket = () => {
  const banners = {
    backgroundMobile: "./assets/banner-ticket-mobile.png",
    backgroundTablet: "./assets/banner-ticket-tablet.png",
    backgroundDesktop: "./assets/banner-ticket-desktop.png",
  };

  return (
    <>
      <Navbar />
      <Banner
        backgroundDesktop={banners.backgroundDesktop}
        backgroundTablet={banners.backgroundTablet}
        backgroundMobile={banners.backgroundMobile}
      />
      <Form />
    </>
  );
};

export default Ticket;
