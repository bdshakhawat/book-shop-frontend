'use client';

const About = () => {
  return (
    <section className="py-24 px-4 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-10">
          <div className="space-y-4 text-center lg:text-left">
            <h6 className="text-gray-400 text-sm uppercase tracking-widest">About Us</h6>
            <h2 className="text-4xl font-bold text-[#e12503]">The Inspiration of Book Shop</h2>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              At our book shop, our story is fueled by a deep love for books and a dedication to our readers.
              Explore how we've created a sanctuary where book lovers feel right at home.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 p-5 rounded-xl transition duration-300">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">10+ Years</h4>
              <p className="text-gray-500 dark:text-gray-400">Catering to Passionate Readers</p>
            </div>
            <div className="border border-gray-200 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 p-5 rounded-xl transition duration-300">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">3000+ Titles</h4>
              <p className="text-gray-500 dark:text-gray-400">A Wide-Ranging Selection of Books</p>
            </div>
            <div className="border border-gray-200 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 p-5 rounded-xl transition duration-300">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">40+ Awards</h4>
              <p className="text-gray-500 dark:text-gray-400">Celebrated for Outstanding Quality</p>
            </div>
            <div className="border border-gray-200 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 p-5 rounded-xl transition duration-300">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">97% Satisfaction</h4>
              <p className="text-gray-500 dark:text-gray-400">Dedicated to Customer Delight</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center lg:text-left">
            <button className="inline-flex items-center gap-2 bg-red-50 hover:bg-red-100 text-[#e12503] px-5 py-2.5 rounded-lg font-medium transition">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                  stroke="#e12503"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-center">
          <div className="w-full sm:w-[500px] h-auto rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
            <img
              src="./assets/Bookimage.png"
              alt="About Book Shop"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
