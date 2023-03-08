import LineUp from "../../atoms/LineUp";
import Banner from "../../components/banner";
import Navbar from "../../components/navbar";
import Session from "../../components/session";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Session />
      <LineUp title="Line-Up"/>
    </>
  );
};

export default Home;
