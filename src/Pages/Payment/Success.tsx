import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCreateOrderMutation } from "../../Redux/Features/Orders/Order.api";


const Success = () => {
  const navigate = useNavigate();
  const [placeOrder , { data, error }] = useCreateOrderMutation()
  // const [placeOrder, { data, error }] = usePlaceOrderMutation();
  // useEffect(() => {
  //   // You can clear cart or perform any necessary cleanup here
  //   console.log("Payment successful!");
  // }, []);

  const [paymentDetails, setPaymentDetails] = useState(null);
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id"); // Get session_id from URL
  console.log("sessionid", sessionId);

  useEffect(() => {
    if (sessionId) {
      fetch(`https://book-shop-backend-v1.vercel.app/checkout-session/${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          placeOrder({
            email: data.userEmail,
            product: data.productId,
            quantity: parseInt(data.productQuantity),
            totalPrice: parseInt(data.productPrice),
          });
        })
        .catch((error) =>
          console.error("Error fetching payment details:", error)
        );
    }
  }, [sessionId]);
  console.log(paymentDetails);

  // console.log("adding product error", error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-green-600">
          Payment Successful! 🎉
        </h1>
        <p className="mt-2 text-gray-700">Thank you for your purchase.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
