import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar.tsx/Navbar";
import NewArrival from "../New Arrival/NewArrival";

const Home = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Banner></Banner>
      <NewArrival></NewArrival>
      <Footer></Footer>
    </div>
  );
};

export default Home;
