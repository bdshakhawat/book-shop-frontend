import { Link } from 'react-router-dom';
import BookCard from '../Card/BookCard';
import { useGetAllbooksQuery } from '../../Redux/Features/Admin/UserManagementApi/bookManagement.api';
import Loader from '../loader/Loader';
/* eslint-disable @typescript-eslint/no-explicit-any */

const NewArrival = () => {
 
    const {data,isLoading} = useGetAllbooksQuery(undefined)
    if(isLoading){
      <Loader></Loader>
    }
    return (
        <div className='lg:max-w-[90%] px-5 mx-auto' >
            <h1 className='text-3xl font-bold text-center text-gray-800 my-14'>New Arrivals</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 rounded-md gap-6">
            {
              data?.data.slice(0,6).map((book : any) => (
                <BookCard key={book._id} book={book} />
              ))
            }
            </div>
            <div className="w-full p-5 flex justify-center">
            <Link to='/allbooks'  className="bg-orange-500 text-white hover:bg-orange-600  text-center font-semibold py-2 px-3 lg:px-6 rounded-lg mt-3">
                See More
            </Link>
            </div>

        </div>
    );
};

export default NewArrival;