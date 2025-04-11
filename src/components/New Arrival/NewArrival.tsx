
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

const NewArrival = () => {
    return (
        <div className='lg:max-w-[80%] px-5 mx-auto' >
            <h1 className='text-center p-10 font-bold text-2xl lg:text-5xl bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg tracking-wide'>New Arrivals</h1>
            <Card></Card>
            <div className="w-full p-5 flex justify-center">
            <Link to='/allbooks'  className="btn rounded-lg bg-orange-600 text-white hover:bg-orange-300">
                See More
            </Link>
            </div>

        </div>
    );
};

export default NewArrival;