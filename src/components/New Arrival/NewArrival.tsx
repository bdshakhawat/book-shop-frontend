
import Card from '../Card/Card';

const NewArrival = () => {
    return (
        <div className='w-11/12 mx-auto' >
            <h1 className='text-center p-10 font-bold text-2xl lg:text-4xl bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg tracking-wide'>New Arrivals</h1>
            <Card></Card>
        </div>
    );
};

export default NewArrival;