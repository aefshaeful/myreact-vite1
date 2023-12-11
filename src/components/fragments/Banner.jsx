const Banner = () => {
  return (
    <div className="carousel w-full h-64">
      <div id="slide1" className="carousel-item relative w-full bg-[#152A46]">
        <div className="flex-1 w-3/4">
          <h1 className="text-5xl text-white font-bold px-24">Shooping Time</h1>
          <p className="text-white text-xl px-24 py-6">
            Enjoy fast and free shipping for every purchase on our website
          </p>
        </div>

        <div className="p-0 flex-1">
          <img
            src="./images/subtract-blue.png"
            className="w-40 h-40 absolute bottom-0 right-80"
          />
          <img
            src="./images/subtract-yellow.png"
            className="w-40 h-40 absolute right-44"
          />
          <img
            src="./images/ambasador.png"
            className="w-96 min-h-fit absolute bottom-0 right-36"
          />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="./images/banner2.jpg" className="w-full" />
        <img src="./images/banner3.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="./images/banner4.jpg" className="w-full" />
        <img src="./images/banner6.jpg" className="w-full" />
        <img src="./images/banner5.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="./images/banner8.jpg" className="w-full absolute bottom-0" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
