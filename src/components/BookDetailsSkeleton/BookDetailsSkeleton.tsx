// import { useEffect, useState } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// export const BookDetailsSkeleton = () => {
//   const { productId } = useParams();
//   const [book, setBook] = useState(null);

//   // const { data: book } = useGetBookByIdQuery(productId);
//   console.log(book);
//   // const [loading, setLoading] = useState(false);
//   // const navigate = useNavigate();
//   // const location = useLocation();
//   // const [placeOrder, { error, data }] = usePlaceOrderMutation();
//   // const user = useSelector(selectCurrentUser);

//   const makePayment = async () => {
//     if (!user) {
//       // Redirect to login and remember current location
//       navigate("/login", { state: { from: location } });
//       return;
//     }
//     // setLoading(true);
//     const stripe = await loadStripe("");

//     const body = {
//       product: book.data,
//       user,
//     };

//     const headers = {
//       "Content-Type": "application/json",
//     };

//     const response = await fetch(
//       "http://localhost:5000/create-checkout-session",
//       {
//         method: "POST",
//         headers: headers,
//         body: JSON.stringify(body),
//       }
//     );

//     const session = await response.json();
//     console.log("session", session);

//     const result = stripe?.redirectToCheckout({
//       sessionId: session?.id,
//     });
//     // setLoading(false);
//     console.log("payment result", result);

//     if (result?.error) {
//       console.log(result.error);
//     }
//   };
//   return (
//     <div className="container mx-auto p-6">
//       <div className="grid md:grid-cols-2 gap-10 items-start">
//         <div className="rounded-lg overflow-hidden shadow-lg">
//           <img
//             src={book.coverImage}
//             alt={book.title}
//             className="w-full h-auto object-cover"
//           />
//         </div>

//         <div>
//           <h2 className="text-3xl font-bold text-orange-600">{book.title}</h2>
//           <p className="text-sm text-gray-500 mt-1">by {book.author}</p>

//           <div className="flex items-center gap-2 mt-3">
//             <div className="rating rating-sm">
//               {Array.from({ length: 5 }, (_, i) => (
//                 <input
//                   key={i}
//                   type="radio"
//                   name="rating"
//                   className="mask mask-star-2 bg-yellow-400"
//                   checked={i < Math.floor(book.rating)}
//                   readOnly
//                 />
//               ))}
//             </div>
//             <span className="text-sm text-gray-600">({book.rating})</span>
//           </div>

//           <p className="mt-4 text-gray-700">{book.description}</p>

//           <div className="mt-6">
//             <span className="text-2xl font-bold text-orange-600">
//               ${book.price.toFixed(2)}
//             </span>
//           </div>

//           <div className="mt-4 flex gap-4">
//             <button className="btn btn-primary bg-orange-600 border-none hover:bg-orange-700">
//               Oeder Now
//             </button>
//             <button className="btn btn-outline btn-warning">Wishlist</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Navigate, useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../Redux/Features/Admin/UserManagementApi/bookManagement.api";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Redux/Features/Auth/authSlice";
import Loader from "../loader/Loader";

const BookDetailsSkeleton = () => {
  const { bookId } = useParams();
  const user = useSelector(selectCurrentUser);
  const { data: book,isLoading } = useGetSingleBookQuery(bookId);
  console.log("product id", bookId);
  console.log(book);
 if(isLoading){
  return <Loader></Loader>
 }

  const makePayment = async () => {
    // if (!user) {
    //   // Redirect to login and remember current location
    //   Navigate("/login", { state: { from: location } });
    //   return;
    // }
    // setLoading(true);
    const stripe = await loadStripe("");

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
