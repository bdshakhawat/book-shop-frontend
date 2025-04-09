import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const books = [
    {
      id: "1",
      title: "The Silent Patient",
      author: "Alex Michaelides",
      genre: "Thriller",
      price: 12.99,
      rating: 4.5,
      available: true,
      image: "https://i.ibb.co/j6fKd5v/the-silent-patient.jpg",
    },
    {
      id: "2",
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-Help",
      price: 15.49,
      rating: 4.8,
      available: true,
      image: "https://i.ibb.co/jrH4kfs/atomic-habits.jpg",
    },
    {
      id: "3",
      title: "It Ends with Us",
      author: "Colleen Hoover",
      genre: "Romance",
      price: 10.99,
      rating: 4.6,
      available: false,
      image: "https://i.ibb.co/nLqjS5c/it-ends-with-us.jpg",
    },
    {
      id: "4",
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      genre: "Finance",
      price: 9.99,
      rating: 4.7,
      available: true,
      image: "https://i.ibb.co/0YmXChJ/rich-dad-poor-dad.jpg",
    },
    {
      id: "5",
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction",
      price: 11.99,
      rating: 4.4,
      available: true,
      image: "https://i.ibb.co/3mJZg04/the-alchemist.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 rounded-md gap-6">
      {books.map((book) => (
        <div key={book.id} className="card shadow-lg p-4">
          <img
            src={book.image}
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold">{book.title}</h2>
          <p className="text-gray-600">{book.author}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold">${book.price}</span>
            <span className="text-yellow-500">⭐ {book.rating}</span>
          </div>
          <Link to={`products/${book.id}`}>
            <button className="btn first-letter:text-orange-600  hover:bg-orange-400 hover:text-white mt-4 p-4">
              Add to Cart
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Card;
