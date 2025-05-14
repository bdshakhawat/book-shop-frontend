import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="relative h-[calc(100vh-96px)] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/S7W8hm7Q/new-release-360632003.webp)",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Badges */}
      <div className="absolute top-6 left-6 md:left-14 flex flex-col gap-2 z-10">
        <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg w-max">
          SALE 50% OFF
        </span>
        <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold shadow-lg w-max">
          DISCOUNT ON BESTSELLERS
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg uppercase">
            Welcome to BookStore
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-medium">
            Explore handpicked collections and enjoy exclusive offers on your favorite books.
          </p>
          <NavLink to="/allbooks">
            <button className="mt-4 btn btn-outline text-white border-white hover:bg-orange-500 hover:text-black transition-all duration-300">
              Browse Collection
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
