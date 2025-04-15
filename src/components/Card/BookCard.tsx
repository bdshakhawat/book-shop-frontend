import { Link } from "react-router-dom";

export type TBook = {
  _id: string;
  title: string;
  author: string;
  category: string;
  price: number;
  inStock: boolean;
  image: string;
};

type BookCardProps = {
  book: TBook;
};

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="border bg-white border-gray-300 shadow-md rounded-lg"> 
      <div className="p-4">
        <div className="relative ">
          <img
            src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip"
            className=" h-52 w-full rounded-lg "
            alt=""
          />
          <p
            className={`absolute top-2 my-1 right-2 px-2 border text-xs rounded-sm ${
              book.inStock
                ? "bg-green-100 text-green-500 border-green-500"
                : "bg-red-100 text-red-500 border-red-500"
            }`}
          >
            {book.inStock ? <span>in sotck</span> : <span>out of stock</span>}
          </p>
        </div>

        <div className="space-y-1 mt-3 ">
          <p className="text-lg font-semibold font-sans ">{book.title}</p>
          <p className="text-xs">
            <span>{book.author}</span> | <span>{book.category}</span>
          </p>
          <h1 className="text-2xl text-orange-500">${book.price}</h1>
          <Link to={`/allbooks/${book._id}`}>
            <button className="bg-orange-500 text-white hover:bg-orange-600 w-full text-center font-semibold py-2 rounded-lg mt-3 ">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
