<<<<<<< HEAD
import { reviews } from "../../Constants/constants";
import { Star } from 'lucide-react';

const Reviews = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {reviews.map(({ id, name, rating, text, avatar }) => (
            <div
              key={id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={avatar}
                  alt={name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{name}</p>
                  <div className="flex text-yellow-500">
                    {[...Array(rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
=======


const Reviews = () => {
    return (
        <div>
            
        </div>
    );
};

export default Reviews;
>>>>>>> f4baf10d15d92a50dc010f279710ff27d544bb11
