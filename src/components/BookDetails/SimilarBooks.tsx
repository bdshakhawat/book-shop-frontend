/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from "../loader/Loader";
import { useGetAllbooksQuery } from "../../Redux/Features/Books/bookManagement.api";
import { Star } from "lucide-react";

const SimilarBooks = () => {
  const { data: bookData, isLoading } = useGetAllbooksQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? "currentColor" : "none"}
          className={i < rating ? "text-yellow-500" : "text-gray-300"}
        />
      ));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {bookData?.data?.slice(0, 4).map((book: any) => (
        <a
          key={book._id}
          href={`/allbooks/${book._id}`}
          className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md  hover:shadow-lg transition-all duration-300 overflow-hidden "
        >
          {/* Book Cover with hover effect */}
          <div className="relative overflow-hidden">
            <img
              src={
                book.coverImage ||
                "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg"
              }
              alt={book.title}
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Badges */}
            {book.discount > 0 && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {book.discount}% OFF
              </span>
            )}
            {book.isNew && (
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                New
              </span>
            )}
          </div>

          {/* Book Details */}
          <div className="p-4">
            <h3 className="font-medium text-gray-900 dark:text-white line-clamp-2 mb-1 group-hover:text-orange-500 transition-colors">
              {book.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              by {book.author}
            </p>

            {/* Rating */}
            <div className="flex items-center mb-2">
              <div className="flex mr-1">{renderStars(book.rating || 0)}</div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                ({book.reviewCount || 0})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-orange-500 ">
                  ${book.price?.toFixed(2)}
                </span>
                {book.originalPrice && (
                  <span className="ml-2 text-xs text-gray-400 dark:text-gray-500 line-through">
                    ${book.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  book.inStock
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                }`}
              >
                {book.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SimilarBooks;
