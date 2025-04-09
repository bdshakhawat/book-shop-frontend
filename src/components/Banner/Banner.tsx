import {banner} from './banner'

const Banner = () => {
    return (
        <div className="carousel w-full h-[70vh]">
      {banner.map((item, index) => {
        const prevId = banner[(index - 1 + banner.length) % banner.length].id;
        const nextId = banner[(index + 1) % banner.length].id;

        return (
          <div id={item.id} className="carousel-item relative w-full" key={item.id}>
            <img src={item.image} className="w-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white p-4">
              <h2 className="lg:text-6xl font-bold text-orange-600 md:text-4xl">{item.title}</h2>
              <p className="mt-4 text-center max-w-2xl lg: text-xl">{item.desc}</p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={`#${prevId}`} className="btn btn-circle">❮</a>
              <a href={`#${nextId}`} className="btn btn-circle">❯</a>
            </div>
          </div>
        );
      })}
    </div>

    );
};

export default Banner;