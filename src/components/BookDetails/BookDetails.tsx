import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Star,
  Heart,
  Share2,
  BookOpen,
  ChevronLeft,
  BookmarkCheck,
} from "lucide-react";
import Loader from "../loader/Loader";
import {
  useCreateReviewMutation,
  useGetSingleBookReviewQuery,
} from "../../Redux/Features/Review/reviewApi";
import { useGetSingleBookQuery } from "../../Redux/Features/Books/bookManagement.api";
import ReviewCard, { IReview } from "./ReviewCard";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Redux/Features/Auth/authSlice";
import { Avatar, Modal, Rate, Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import SimilarBooks from "./SimilarBooks";
import { toast } from "sonner";

const BookDetails = () => {
  const { bookId } = useParams();
  const Navigate =useNavigate()
  const user = useSelector(selectCurrentUser);
  const { data: review } = useGetSingleBookReviewQuery(bookId);
  const reviewData = review?.data;
  const { data: book, isLoading, error } = useGetSingleBookQuery(bookId);
  const [addReview] = useCreateReviewMutation(undefined);

  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [form] = Form.useForm();

  if (isLoading) return <Loader />;
  if (error)
    return <div className="text-center py-10">Error loading book details</div>;
  if (!book?.data)
    return <div className="text-center py-10">Book not found</div>;

  // Calculate star ratings
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={18}
          fill={i < rating ? "currentColor" : "none"}
          className={i < rating ? "text-yellow-500" : "text-gray-300"}
        />
      ));
  };

  // Format price with discount if available
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  // for quantity
  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  const makePayment = async () => {
    if (user?.role !== 'user') {
      // Redirect to login and remember current location
      Navigate("/login");
      toast('Login as a user ')
      return;
    }

    const stripe = await loadStripe(
      "pk_test_51NFeKsHXxHHqqBSEXEZ6oVqeAquqIpszGA5xvnGO3XSkrX53ffO3A2pRkRRuIhjoVvUKiFxBoC476BMmG8pr8GDK00kNXNphd6"
    );

    const body = {
      product: book.data,
      user,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "https://book-shop-backend-v1.vercel.app/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();
    const result = stripe?.redirectToCheckout({
      sessionId: session?.id,
    });

    if ((await result)?.error) {
      console.log((await result)?.error);
    }
  };

  // Review modal handlers
  const showReviewModal = () => {
    setIsReviewModalOpen(true);
  };
  const handleReviewCancel = () => {
    setIsReviewModalOpen(false);
    form.resetFields();
  };

  const handleReviewSubmit = async (values: IReview) => {
    const data = { ...values, likeCount: 0, name: user?.name, bookId: bookId };
    try {
      console.log("Review submitted:", values);
      const result = await addReview(data);

      if (result?.data?.success) {
        toast.success("Review Added Successfully");
      }
      setIsReviewModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Back button */}
      <div className="container mx-auto px-4 sm:px-6 py-6">
        <Link
          to="/books"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 transition-colors"
        >
          <ChevronLeft size={20} className="mr-1" />
          Back to Books
        </Link>
      </div>

      {/* Main book details */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8">
            {/* Book cover */}
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-lg">
                <img
                  src={
                    book?.data?.image ||
                    "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg"
                  }
                  alt={book?.data?.title}
                  className="w-full h-auto rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                />
              </div>

              {/* Action buttons */}
              <div className="flex mt-6 space-x-4">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="flex items-center justify-center p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                  aria-label={
                    isWishlisted ? "Remove from wishlist" : "Add to wishlist"
                  }
                >
                  {isWishlisted ? (
                    <BookmarkCheck size={20} className="text-orange-500" />
                  ) : (
                    <Heart
                      size={20}
                      className="text-gray-600 dark:text-gray-300"
                    />
                  )}
                </button>
                <button className="flex items-center justify-center p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
                  <Share2
                    size={20}
                    className="text-gray-600 dark:text-gray-300"
                  />
                </button>
              </div>
            </div>

            {/* Book info */}
            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {book?.data?.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                by {book?.data.author}
              </p>

              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {renderStars(book?.data?.rating || 4)}
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  ({book?.data?.reviewCount || 12} reviews)
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    {formatPrice(book?.data?.price)}
                  </span>
                  {!book.originalPrice && (
                    <span className="ml-3 text-gray-400 dark:text-gray-500 line-through text-lg">
                      {formatPrice(book?.data?.originalPrice || 50)}
                    </span>
                  )}
                </div>
                {book?.data?.discount > 0 && (
                  <span className="text-green-600 dark:text-green-400 text-sm mt-1">
                    You save{" "}
                    {formatPrice(book?.data?.originalPrice || 50 - book.price)}{" "}
                    ({book.discount}%)
                  </span>
                )}
              </div>

              <div className="mb-6">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    book?.data?.inStock
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  }`}
                >
                  {book?.data?.inStock ? "In Stock" : "Out of Stock"}
                </span>
                {book?.data?.inStock && (
                  <span className="ml-3 text-gray-600 dark:text-gray-400 text-sm">
                    {book?.data?.stockCount || 5} available
                  </span>
                )}
              </div>

              <div className="mb-6 space-y-2">
                <div className="flex items-center">
                  <BookOpen
                    size={18}
                    className="text-gray-500 dark:text-gray-400 mr-2"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    {book?.data?.pages} pages |{" "}
                    {book?.data?.language || "English"}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 dark:text-gray-400 mr-2">
                    Category:
                  </span>
                  <Link
                    to={`/allbooks?category=${book?.data?.category}`}
                    className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 capitalize"
                  >
                    {book?.data?.category}
                  </Link>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 dark:text-gray-400 mr-2">
                    Published:
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {new Date(book?.data?.publishedDate).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </span>
                </div>
              </div>

              {/* Quantity selector */}
              <div className="mb-6">
                <label
                  htmlFor="quantity"
                  className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium"
                >
                  Quantity
                </label>
                <div className="flex items-center w-32">
                  <button
                    onClick={decreaseQuantity}
                    className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-l-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    max="10"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-full text-center py-2 bg-white dark:bg-gray-800 border-t border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
                  />
                  <button
                    onClick={increaseQuantity}
                    className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-r-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    disabled={quantity >= 10}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                {/* <button
                  className={`flex-1 flex items-center justify-center py-3 px-6 rounded-lg font-medium transition-colors ${
                    book?.data?.inStock
                      ? "bg-orange-600 hover:bg-orange-700 text-white shadow-md hover:shadow-lg"
                      : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!book?.data?.inStock}
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart
                </button> */}
                <button
                  onClick={makePayment}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
                    book?.data?.inStock
                      ? "border border-orange-600 text-orange-600 dark:text-orange-400 dark:border-orange-400 hover:bg-orange-500 hover:text-white dark:hover:bg-gray-700 "
                      : "border border-gray-300 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!book?.data?.inStock}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-t border-gray-200 dark:border-gray-700 mt-6">
            <div className="flex overflow-x-auto">
              <button
                onClick={() => setActiveTab("description")}
                className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
                  activeTab === "description"
                    ? "text-orange-600 dark:text-orange-400 border-b-2 border-orange-600 dark:border-orange-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("details")}
                className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
                  activeTab === "details"
                    ? "text-orange-600 dark:text-orange-400 border-b-2 border-orange-600 dark:border-orange-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                Details
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
                  activeTab === "reviews"
                    ? "text-orange-600 dark:text-orange-400 border-b-2 border-orange-600 dark:border-orange-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                Reviews ({reviewData?.length || 0})
              </button>
            </div>

            {/* Tab content */}
            <div className="p-6 sm:p-8">
              {activeTab === "description" && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    About this book
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                    {book?.data?.description || "No description available."}
                  </p>
                </div>
              )}

              {activeTab === "details" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                      Product Details
                    </h4>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex">
                        <span className="w-32 text-gray-500 dark:text-gray-400">
                          Publisher
                        </span>
                        <span>{book?.data?.author || "N/A"}</span>
                      </li>
                      <li className="flex">
                        <span className="w-32 text-gray-500 dark:text-gray-400">
                          Publication Date
                        </span>
                        <span>
                          {new Date(book?.data?.createdAt).toLocaleDateString()}
                        </span>
                      </li>
                      <li className="flex">
                        <span className="w-32 text-gray-500 dark:text-gray-400">
                          Dimensions
                        </span>
                        <span>{book.dimensions || "N/A"}</span>
                      </li>
                      <li className="flex">
                        <span className="w-32 text-gray-500 dark:text-gray-400">
                          Weight
                        </span>
                        <span>{book.weight || "N/A"}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                      About the Author
                    </h4>
                    <div className="flex gap-3 items-center mb-4">
                      <Avatar
                        className="bg-orange-500 transition-colors"
                        icon={<UserOutlined />}
                      />
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">
                          {book?.data.author}
                        </h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {book.authorBioTitle || "Author"}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {book.authorBio || "No author information available."}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  {reviewData
                    ?.slice(0, 1)
                    .map((review: IReview, index: number) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
                      >
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            Customer Reviews
                          </h3>
                          <div className="flex items-center">
                            {renderStars(review.rating)}
                            <span className="ml-2 text-gray-600 dark:text-gray-400 text-sm">
                              {review.rating.toFixed(1)} out of 5
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={showReviewModal}
                          className="mt-4 md:mt-0 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
                        >
                          Write a Review
                        </button>
                      </div>
                    ))}

                  {reviewData?.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
                      {reviewData.map((review: IReview, index: number) => (
                        <ReviewCard key={index} review={review} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 border border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        No reviews yet. Be the first to review this book!
                      </p>
                      <button
                        onClick={showReviewModal}
                        className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        Write a Review
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Similar books section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            You May Also Like
          </h2>
          {/* <SimilarBooks currentBookId={book._id} category={book.category} /> */}
          <SimilarBooks></SimilarBooks>
        </div>
      </div>

      {/* Review Modal */}
      <Modal
        title="Write a Review"
        open={isReviewModalOpen}
        onCancel={handleReviewCancel}
        footer={null}
        centered
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleReviewSubmit}
          initialValues={{ rating: 5 }}
        >
          <Form.Item
            name="rating"
            label="Your Rating"
            rules={[{ required: true, message: "Please select a rating" }]}
          >
            <Rate />
          </Form.Item>

          <Form.Item
            name="reviewMessage"
            label="Your Review"
            rules={[
              { required: true, message: "Please write your review" },
              { min: 10, message: "Review must be at least 10 characters" },
            ]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Share your thoughts about this book..."
            />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-end gap-4">
              <Button onClick={handleReviewCancel}>Cancel</Button>
              <Button type="primary" htmlType="submit">
                Submit Review
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default BookDetails;
