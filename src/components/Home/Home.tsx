import Banner from "./Banner/Banner";
import DealsBanner from "./bestDeals/DealsBanner";
import Category from "./Category/Category";
import ChooseUs from "./ChooseUs/ChooseUs";
import NewArrival from "./New Arrival/NewArrival";
import Reviews from "./Reviews/Reviews";


const Home = () => {
  return (
    <div className="bg-gray-100 ">
      <Banner></Banner>
      <Category></Category>
      <NewArrival></NewArrival>
      <ChooseUs></ChooseUs>
      <DealsBanner></DealsBanner>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
