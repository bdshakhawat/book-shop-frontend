type TBook = {
  id: string;
  title: string;
  author: string;
  category: string;
  price: number;
  available: boolean;
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
          <p className={`absolute top-2 my-1 right-2 px-2 border text-xs rounded-sm ${book.available?'bg-green-100 text-green-500 border-green-500':'bg-red-100 text-red-500 border-red-500'}`}>{book.available?<span>in sotck</span>:<span>out of stock</span>}</p>
        </div>

        <div className="space-y-1 mt-3 ">
          <p className="text-lg font-semibold font-sans ">{book.title}</p>
          <p className="text-xs">
            <span>{book.author}</span> | <span>{book.category}</span>
          </p>
          <h1 className="text-2xl text-rose-500">${book.price}</h1>
          <button className="bg-rose-500 text-white hover:bg-rose-600 w-full text-center font-semibold py-2 rounded-lg mt-3 ">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
