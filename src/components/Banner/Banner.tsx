const Banner = () => {
    return (
      <div
        className="hero relative"
        style={{
            height: "calc(100vh - 96px)",
          backgroundImage:
            "url(https://i.ibb.co.com/S7W8hm7Q/new-release-360632003.webp)",
        }}
      >
        {/* Overlay */}
        <div className="hero-overlay"></div>
  
        {/* SALE / DISCOUNT Badges */}
        <div className="absolute top-10 left-10">
          <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            SALE 50% OFF
          </span>
        </div>
        <div className="absolute top-10 right-10">
          <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            DISCOUNT ON BESTSELLERS
          </span>
        </div>
  
        {/* Main content */}
        <div className="hero-content text-neutral-content p-14 lg:p-20 rounded-lg bg-black bg-opacity-40 text-center">
          <div className="">
          <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg tracking-wide uppercase">
                Welcome to BookStore
            </h1>
            <p className="mb-5">
              Explore handpicked collections and enjoy exclusive offers on your favorite books.
            </p>
            <button className="btn btn-outline text-white border-white hover:bg-orange-600 hover:text-black transition-all duration-300">
             Browse Collection
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  