import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

export const BookDetailsSkeleton = () => {
  const { productId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Replace this with your actual fetch logic
    const fetchBook = async () => {
      // Simulating a data fetch
      const mockData = {
        id: productId,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        price: 12.99,
        rating: 4.5,
        description:
          "Alicia Berenson’s life is seemingly perfect... until she shoots her husband and stops speaking forever.",
        coverImage: "https://i.ibb.co/7z6vcLk/cover-placeholder.jpg",
      };

      setTimeout(() => {
        setBook(mockData);
      }, 500);
    };

    fetchBook();
  }, [productId]);

  if (!book) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  // const { data: book } = useGetBookByIdQuery(productId);
  console.log(book);
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [placeOrder, { error, data }] = usePlaceOrderMutation();
  const user = useSelector(selectCurrentUser);

  const makePayment = async () => {
    if (!user) {
      // Redirect to login and remember current location
      navigate("/login", { state: { from: location } });
      return;
    }
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
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-auto object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-orange-600">{book.title}</h2>
          <p className="text-sm text-gray-500 mt-1">by {book.author}</p>

          <div className="flex items-center gap-2 mt-3">
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
            <span className="text-sm text-gray-600">({book.rating})</span>
          </div>

          <p className="mt-4 text-gray-700">{book.description}</p>

          <div className="mt-6">
            <span className="text-2xl font-bold text-orange-600">
              ${book.price.toFixed(2)}
            </span>
          </div>

          <div className="mt-4 flex gap-4">
            <button className="btn btn-primary bg-orange-600 border-none hover:bg-orange-700">
              Oeder Now
            </button>
            <button className="btn btn-outline btn-warning">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};
