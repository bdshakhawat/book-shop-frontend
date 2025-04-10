import { useState } from "react";
import BookCard from "../../../components/Card/BookCard";
import Pagination from "../../../components/pagination/Pagination";
import { books } from "./books";
import Filter from "../../../components/filter/Filter";
import { BsFilter } from "react-icons/bs";

const AllBooks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [showFilter, setShowFilter] = useState(false);

  const allBooks = books; // your full book list

  const totalPages = Math.ceil(allBooks.length / itemsPerPage);
  const currentBooks = allBooks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="bg-gray-100">
      <div className="  lg:max-w-[80%] mx-4 md:mx-6 lg:mx-auto py-14 ">
        <div className="flex justify-center">

        <input type='text' placeholder="Seacrh by book name,author,category" className="w-[40%] py-3 rounded-md text-center mb-5"/>
        </div>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="mb-4 text-xl flex items-center gap-1 border border-gray-200 w-24 justify-center p-1 rounded-sm shadow-sm lg:hidden"
        >
          <BsFilter /> <span>Filter</span>
        </p>
        <div
          className={`fixed top-0 left-0 h-full w-full md:w-[80%] max-w-sm  bg-gray-100 z-50 p-4 shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${
            showFilter ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Filter setShowFilter={setShowFilter} showFilter={showFilter} />
        </div>
        <div className="grid lg:grid-cols-5 gap-6 ">
          <div className="hidden lg:block">
            <Filter />
          </div>
          <div className="col-span-4">
            <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={(value) => {
                setItemsPerPage(value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
