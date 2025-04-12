import React from "react";
import { Link } from "react-router-dom";


const Card = ({book}) => {
   

  return (
    <div >
        <div key={book.id} className="card shadow-lg p-4">
          <img
            src={book.image}
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <img src="https://ibb.co.com/047ybQD" className="w-full h-60 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold">{book.title}</h2>
          <p className="text-gray-600">{book.author}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold">${book.price}</span>
            <span className="text-yellow-500">⭐ {book.rating}</span>
          </div>
          <Link to={`products/${book.id}`}>
            <button className="btn first-letter:text-orange-600  hover:bg-orange-400 hover:text-white mt-4 p-4">
              See Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
          <button className="btn   hover:bg-orange-600 hover:text-white mt-4 p-4">See Details</button>
        </div>
    </div>)
};

export default Card;
