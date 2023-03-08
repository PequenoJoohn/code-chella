import Navbar from "../../components/navbar";
import Banner from "../../components/banner";
import Session from "../../components/session";
import LineUp from "../../atoms/LineUp";
import Shows from "../../components/shows";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Session />
      <LineUp title="Line-Up" />
      <Shows />
      <Footer />
    </>
  );
};

export default Home;
