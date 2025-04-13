import { Link } from 'react-router-dom';
import BookCard from '../Card/BookCard';
/* eslint-disable @typescript-eslint/no-explicit-any */

const NewArrival = () => {
    const books = [
        {
          "_id": "1",
          "title": "The Silent Patient",
          "author": "Alex Michaelides",
          "genre": "Thriller",
          "price": 12.99,
          "rating": 4.5,
          "available": true,
          "image": "https://i.ibb.co/j6fKd5v/the-silent-patient.jpg"
        },
        {
          "_id": "2",
          "title": "Atomic Habits",
          "author": "James Clear",
          "genre": "Self-Help",
          "price": 15.49,
          "rating": 4.8,
          "available": true,
          "image": "https://i.ibb.co/jrH4kfs/atomic-habits.jpg"
        },
        {
          "_id": "3",
          "title": "It Ends with Us",
          "author": "Colleen Hoover",
          "genre": "Romance",
          "price": 10.99,
          "rating": 4.6,
          "available": false,
          "image": "https://i.ibb.co/nLqjS5c/it-ends-with-us.jpg"
        },
        {
          "_id": "4",
          "title": "Rich Dad Poor Dad",
          "author": "Robert T. Kiyosaki",
          "genre": "Finance",
          "price": 9.99,
          "rating": 4.7,
          "available": true,
          "image": "https://i.ibb.co/0YmXChJ/rich-dad-poor-dad.jpg"
        },
        {
          "_id": "5",
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "genre": "Fiction",
          "price": 11.99,
          "rating": 4.4,
          "available": true,
          "image": "https://i.ibb.co/3mJZg04/the-alchemist.jpg"
        }
      ]
    return (
        <div className='lg:max-w-[80%] px-5 mx-auto' >
            <h1 className='text-center p-10 font-bold text-2xl lg:text-5xl bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg tracking-wide'>New Arrivals</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 rounded-md gap-6">
            {
              books.slice(0,4).map((book : any) => (
                <BookCard key={book._id} book={book} />
              ))
            }
            </div>
            <div className="w-full p-5 flex justify-center">
            <Link to='/allbooks'  className="btn rounded-lg bg-orange-600 text-white hover:bg-orange-300">
                See More
            </Link>
            </div>

        </div>
    );
};

export default NewArrival;