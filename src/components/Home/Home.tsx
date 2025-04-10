
import DealsBanner from "../../Pages/bestDeals/DealsBanner";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import NewArrival from "../New Arrival/NewArrival";
import ChooseUs from '../../Pages/ChooseUs/ChooseUs';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewArrival></NewArrival>
            <DealsBanner></DealsBanner>
            <Reviews></Reviews>
            <ChooseUs></ChooseUs>
            
        </div>
    );
};

export default Home;
