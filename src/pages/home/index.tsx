import Navbar from "../../components/navbar";
import Banner from "../../atoms/banner";
import Session from "../../components/session";
import LineUp from "../../atoms/LineUp";
import Shows from "../../components/shows";
import Footer from "../../components/footer";

const Home = () => {

  const banners =
  {
    backgroundMobile: "./assets/banner-mobile.png",
    backgroundTablet: "./assets/banner-tablet.png",
    backgroundDesktop: "./assets/banner-desktop.png"
  }


  return (
    <>
      <Navbar />
      <Banner backgroundDesktop={banners.backgroundDesktop} backgroundTablet={banners.backgroundTablet} backgroundMobile={banners.backgroundMobile} />
      <Session />
      <LineUp title="Line-Up" />
      <Shows />
      <Footer />
    </>
  );
};

export default Home;
