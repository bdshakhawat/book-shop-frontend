
import Banner from "../Banner/Banner";
import NewArrival from "../New Arrival/NewArrival";

import ChooseUs from '../../Pages/ChooseUs/ChooseUs';
import Reviews from "../Reviews/Reviews";




const Home = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Banner></Banner>
      <NewArrival></NewArrival>
      <ChooseUs></ChooseUs>
      <Reviews></Reviews>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
