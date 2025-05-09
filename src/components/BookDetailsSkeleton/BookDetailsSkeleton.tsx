'// import { loadStripe } from "@stripe/stripe-js";
import {  useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../Redux/Features/Admin/UserManagementApi/bookManagement.api";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Redux/Features/Auth/authSlice";
import Loader from "../loader/Loader";

const BookDetailsSkeleton = () => {
  const { bookId } = useParams();
  const user = useSelector(selectCurrentUser);
  const { data: book, isLoading } = useGetSingleBookQuery(bookId);
  console.log("product id", bookId);
  console.log(book);
  if (isLoading) {
    return <Loader></Loader>;
  }

  const makePayment = async () => {
    // if (!user) {
    //   // Redirect to login and remember current location
    //   Navigate("/login", { state: { from: location } });
    //   return;
    // }
    // setLoading(true);
    const stripe = await loadStripe("pk_test_51NFeKsHXxHHqqBSEXEZ6oVqeAquqIpszGA5xvnGO3XSkrX53ffO3A2pRkRRuIhjoVvUKiFxBoC476BMmG8pr8GDK00kNXNphd6");

    const body = {
      product: book.data,
      user,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "http://localhost:5000/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();
    console.log("session", session);

    const result = stripe?.redirectToCheckout({
      sessionId: session?.id,
    });
    // setLoading(false);
    console.log("payment result", result);

    if (result?.error) {
      console.log(result.error);
    }
  };
  return (
    <div className="container lg:w-[80%] mx-auto p-6 h-screen mt-10">
      <div className="flex justify-center  gap-20  items-center">
        <div className="rounded-lg flex-1 overflow-hidden shadow-lg">
          <img
            src={
              book?.data?.img ||
              "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip"
            }
            alt={book?.data?.title}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-bold text-orange-600">
            {book?.data?.title}
          </h2>
          <p className="text-sm text-gray-500 mt-1">by {book?.data?.author}</p>

          {/* <div className="flex items-center gap-2 mt-3">
            <div className="rating rating-sm">
              {Array.from({ length: 5 }, (_, i) => (
                <input
                  key={i}
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-yellow-400"
                  checked={i < Math.floor(book.rating)}
                  readOnly
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({book?.rating})</span>
          </div> */}

          <p className="mt-4 text-gray-700">{book?.data?.description}</p>

          <div className="mt-6">
            <span className="text-2xl font-bold text-orange-600">
              ${book?.data?.price}
            </span>
          </div>

          <div className="mt-4 flex gap-4">
            <button
              onClick={makePayment}
              className="btn btn-primary bg-orange-600 border-none hover:bg-orange-700"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsSkeleton;





















// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import {
//   Star,
//   Heart,
//   Share2,
//   BookOpen,
//   ChevronLeft,
//   ShoppingCart,
//   BookmarkCheck,
// } from "lucide-react";
// import { useGetSingleBookQuery } from "../../Redux/Features/Admin/UserManagementApi/bookManagement.api";
// import Loader from "../loader/Loader";
// import { useGetSingleBookReviewQuery } from "../../Redux/Features/Review/reviewApi";

// const BookDetails = () => {
//   const { bookId } = useParams();
//   const { data: reviewData, isLoading } = useGetSingleBookReviewQuery(bookId);
//   console.log(reviewData);
//   const { data: book, isLoading, error } = useGetSingleBookQuery(bookId);

//   console.log("Books all", book?.data);
//   const [activeTab, setActiveTab] = useState("description");
//   const [quantity, setQuantity] = useState(1);
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   if (isLoading) return <Loader />;
//   if (error)
//     return <div className="text-center py-10">Error loading book details</div>;
//   if (!book?.data)
//     return <div className="text-center py-10">Book not found</div>;

//   // Calculate star ratings
//   const renderStars = (rating: number) => {
//     return Array(5)
//       .fill(0)
//       .map((_, i) => (
//         <Star
//           key={i}
//           size={18}
//           fill={i < rating ? "currentColor" : "none"}
//           className={`${
//             i < rating ? "text-yellow-500" : "text-gray-300"
//           } inline-block`}
//         />
//       ));
//   };

//   // Format price with discount if available
//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//     }).format(price);
//   };

//   // for quantity
//   const increaseQuantity = () => {
//     if (quantity < 10) {
//       // You can replace 10 with book.stockCount if available
//       setQuantity(quantity + 1);
//     }
//   };
//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseInt(e.target.value);
//     if (!isNaN(value) && value >= 1 && value <= 10) {
//       // Adjust max as needed
//       setQuantity(value);
//     }
//   };

//   return (
//     <div className="bg-white dark:bg-gray-900 min-h-screen">
//       {/* Back button */}
//       <div className="container mx-auto px-4 sm:px-6 py-6">
//         <Link
//           to="/books"
//           className="inline-flex items-center text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 transition-colors"
//         >
//           <ChevronLeft size={20} className="mr-1" />
//           Back to Books
//         </Link>
//       </div>

//       {/* Main book details */}
//       <div className="container mx-auto px-4 sm:px-6 py-8">
//         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8">
//             {/* Book cover */}
//             <div className="flex flex-col items-center">
//               <div className="relative w-full max-w-lg">
//                 <img
//                   src={
//                     book?.data?.image ||
//                     "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg"
//                   }
//                   alt={book?.data?.title}
//                   className="w-full h-auto rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
//                 />
//                 {/* {book.isNew && (
//                   <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
//                     New Release
//                   </span>
//                 )} */}
//                 {/* {book.discount > 0 && (
//                   <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
//                     {book.discount}% OFF
//                   </span>
//                 )} */}
//               </div>

//               {/* Action buttons */}
//               <div className="flex mt-6 space-x-4">
//                 <button
//                   onClick={() => setIsWishlisted(!isWishlisted)}
//                   className="flex items-center justify-center p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
//                   aria-label={
//                     isWishlisted ? "Remove from wishlist" : "Add to wishlist"
//                   }
//                 >
//                   {isWishlisted ? (
//                     <BookmarkCheck size={20} className="text-orange-500" />
//                   ) : (
//                     <Heart
//                       size={20}
//                       className="text-gray-600 dark:text-gray-300"
//                     />
//                   )}
//                 </button>
//                 <button className="flex items-center justify-center p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
//                   <Share2
//                     size={20}
//                     className="text-gray-600 dark:text-gray-300"
//                   />
//                 </button>
//               </div>
//             </div>

//             {/* Book info */}
//             <div className="flex flex-col">
//               <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
//                 {book?.data?.title}
//               </h1>
//               <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
//                 by {book?.data.author}
//               </p>

//               <div className="flex items-center mb-4">
//                 <div className="flex mr-2">
//                   {renderStars(book?.data?.rating || 4)}
//                 </div>
//                 <span className="text-gray-500 dark:text-gray-400 text-sm">
//                   ({book?.data?.reviewCount || 12} reviews)
//                 </span>
//               </div>

//               <div className="mb-6">
//                 <div className="flex items-center">
//                   <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">
//                     {formatPrice(book?.data?.price)}
//                   </span>
//                   {!book.originalPrice && (
//                     <span className="ml-3 text-gray-400 dark:text-gray-500 line-through text-lg">
//                       {formatPrice(book?.data?.originalPrice || 50)}
//                     </span>
//                   )}
//                 </div>
//                 {book?.data?.discount > 0 && (
//                   <span className="text-green-600 dark:text-green-400 text-sm mt-1">
//                     You save{" "}
//                     {formatPrice(book?.data?.originalPrice || 50 - book.price)}{" "}
//                     ({book.discount}%)
//                   </span>
//                 )}
//               </div>

//               <div className="mb-6">
//                 <span
//                   className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
//                     book?.data?.inStock
//                       ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
//                       : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
//                   }`}
//                 >
//                   {book?.data?.inStock ? "In Stock" : "Out of Stock"}
//                 </span>
//                 {book?.data?.inStock && (
//                   <span className="ml-3 text-gray-600 dark:text-gray-400 text-sm">
//                     {book?.data?.stockCount || 5} available
//                   </span>
//                 )}
//               </div>

//               <div className="mb-6 space-y-2">
//                 <div className="flex items-center">
//                   <BookOpen
//                     size={18}
//                     className="text-gray-500 dark:text-gray-400 mr-2"
//                   />
//                   <span className="text-gray-700 dark:text-gray-300">
//                     {book?.data?.pages} pages |{" "}
//                     {book?.data?.language || "English"}
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <span className="text-gray-500 dark:text-gray-400 mr-2">
//                     Category:
//                   </span>
//                   <Link
//                     to={`/allbooks?category=${book?.data?.category}`}
//                     className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 capitalize"
//                   >
//                     {book?.data?.category}
//                   </Link>
//                 </div>
//                 <div className="flex items-center">
//                   <span className="text-gray-500 dark:text-gray-400 mr-2">
//                     Published:
//                   </span>
//                   <span className="text-gray-700 dark:text-gray-300">
//                     {new Date(book?.data?.publishedDate).toLocaleDateString(
//                       "en-US",
//                       {
//                         year: "numeric",
//                         month: "long",
//                         day: "numeric",
//                       }
//                     )}
//                   </span>
//                 </div>
//               </div>

//               {/* Quantity selector */}
//               <div className="mb-6">
//                 <label
//                   htmlFor="quantity"
//                   className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium"
//                 >
//                   Quantity
//                 </label>
//                 <div className="flex items-center w-32">
//                   <button
//                     onClick={decreaseQuantity}
//                     className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-l-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
//                     disabled={quantity <= 1}
//                   >
//                     -
//                   </button>
//                   <input
//                     type="number"
//                     id="quantity"
//                     min="1"
//                     max="10" // Adjust based on your stock
//                     value={quantity}
//                     onChange={handleQuantityChange}
//                     className="w-full text-center py-2 bg-white dark:bg-gray-800 border-t border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
//                   />
//                   <button
//                     onClick={increaseQuantity}
//                     className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-r-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
//                     disabled={quantity >= 10} // Adjust based on your stock
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               {/* Action buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 mt-4">
//                 <button
//                   className={`flex-1 flex items-center justify-center py-3 px-6 rounded-lg font-medium transition-colors ${
//                     book?.data?.inStock
//                       ? "bg-orange-600 hover:bg-orange-700 text-white shadow-md hover:shadow-lg"
//                       : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
//                   }`}
//                   disabled={!book?.data?.inStock}
//                 >
//                   <ShoppingCart size={20} className="mr-2" />
//                   Add to Cart
//                 </button>
//                 <button
//                   className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
//                     book?.data?.inStock
//                       ? "border border-orange-600 text-orange-600 dark:text-orange-400 dark:border-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700"
//                       : "border border-gray-300 text-gray-500 dark:text-gray-400 cursor-not-allowed"
//                   }`}
//                   disabled={!book?.data?.inStock}
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Tabs */}
//           <div className="border-t border-gray-200 dark:border-gray-700 mt-6">
//             <div className="flex overflow-x-auto">
//               <button
//                 onClick={() => setActiveTab("description")}
//                 className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
//                   activeTab === "description"
//                     ? "text-orange-600 dark:text-orange-400 border-b-2 border-orange-600 dark:border-orange-400"
//                     : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
//                 }`}
//               >
//                 Description
//               </button>
//               <button
//                 onClick={() => setActiveTab("details")}
//                 className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
//                   activeTab === "details"
//                     ? "text-orange-600 dark:text-orange-400 border-b-2 border-orange-600 dark:border-orange-400"
//                     : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
//                 }`}
//               >
//                 Details
//               </button>
//               <button
//                 onClick={() => setActiveTab("reviews")}
//                 className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
//                   activeTab === "reviews"
//                     ? "text-orange-600 dark:text-orange-400 border-b-2 border-orange-600 dark:border-orange-400"
//                     : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
//                 }`}
//               >
//                 Reviews ({book.reviews?.length || 0})
//               </button>
//             </div>

//             {/* Tab content */}
//             <div className="p-6 sm:p-8">
//               {activeTab === "description" && (
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
//                     About this book
//                   </h3>
//                   <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
//                     {book?.data?.description || "No description available."}
//                   </p>
//                 </div>
//               )}

//               {activeTab === "details" && (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   <div>
//                     <h4 className="font-medium text-gray-900 dark:text-white mb-4">
//                       Product Details
//                     </h4>
//                     <ul className="space-y-3 text-gray-700 dark:text-gray-300">
//                       <li className="flex">
//                         <span className="w-32 text-gray-500 dark:text-gray-400">
//                           Publisher
//                         </span>
//                         <span>{book?.data?.author || "N/A"}</span>
//                       </li>
//                       <li className="flex">
//                         <span className="w-32 text-gray-500 dark:text-gray-400">
//                           Publication Date
//                         </span>
//                         <span>
//                           {new Date(book?.data?.createdAt).toLocaleDateString()}
//                         </span>
//                       </li>
//                       <li className="flex">
//                         <span className="w-32 text-gray-500 dark:text-gray-400">
//                           Dimensions
//                         </span>
//                         <span>{book.dimensions || "N/A"}</span>
//                       </li>
//                       <li className="flex">
//                         <span className="w-32 text-gray-500 dark:text-gray-400">
//                           Weight
//                         </span>
//                         <span>{book.weight || "N/A"}</span>
//                       </li>
//                     </ul>
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-900 dark:text-white mb-4">
//                       About the Author
//                     </h4>
//                     <div className="flex items-start mb-4">
//                       <img
//                         src={
//                           book.authorImage ||
//                           "https://i.ibb.co.com/q3t1CR0Z/360-F-211078110-mttx-Edu3gs-Sb-MKajsy98-E4-M4-E5-RUCiuo-removebg-preview.png"
//                         }
//                         alt={book?.data.author}
//                         className="w-16 h-16 rounded-full object-cover mr-4 border border-gray-200 dark:border-gray-700"
//                       />
//                       <div>
//                         <h5 className="font-medium text-gray-900 dark:text-white">
//                           {book?.data.author}
//                         </h5>
//                         <p className="text-sm text-gray-500 dark:text-gray-400">
//                           {book.authorBioTitle || "Author"}
//                         </p>
//                       </div>
//                     </div>
//                     <p className="text-gray-700 dark:text-gray-300">
//                       {book.authorBio || "No author information available."}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {activeTab === "reviews" && (
//                 <div>
//                   <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
//                         Customer Reviews
//                       </h3>
//                       <div className="flex items-center">
//                         {renderStars(book.averageRating)}
//                         <span className="ml-2 text-gray-600 dark:text-gray-400 text-sm">
//                           {book.averageRating.toFixed(1)} out of 5
//                         </span>
//                       </div>
//                     </div>
//                     <button className="mt-4 md:mt-0 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
//                       Write a Review
//                     </button>
//                   </div>

//                   {book.reviews?.length > 0 ? (
//                     <div className="space-y-6">
//                       {/* {book.reviews.map((review) => (
//                         <ReviewCard key={review._id} review={review} />
//                       ))} */}
//                     </div>
//                   ) : (
//                     <div className="text-center py-8 border border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
//                       <p className="text-gray-500 dark:text-gray-400 mb-4">
//                         No reviews yet. Be the first to review this book!
//                       </p>
//                       <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium transition-colors">
//                         Write a Review
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Similar books section */}
//         <div className="mt-16">
//           <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
//             You May Also Like
//           </h2>
//           {/* <SimilarBooks currentBookId={book._id} category={book.category} /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;
