import DealsBanner from "../../Pages/bestDeals/DealsBanner";
import Banner from "../Banner/Banner";
import NewArrival from "../New Arrival/NewArrival";

import ChooseUs from '../../Pages/ChooseUs/ChooseUs';
import Reviews from "../Reviews/Reviews";




const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <NewArrival></NewArrival>
      <ChooseUs></ChooseUs>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
