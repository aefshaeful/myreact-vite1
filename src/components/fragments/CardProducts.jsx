/* eslint-disable react/prop-types */
import { StarIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CardProducts = (props) => {
  const { image, title, price, rating, count, onClick, addToCart } = props;

  const handleAddToCart = (e) => {
    // Menghentikan penyebaran event ke parent (card)
    e.stopPropagation();
    // Panggil fungsi addToCart
    addToCart();
  };

  const handleCardClick = (e) => {
    // Menghentikan penyebaran event ke parent jika card di klik
    e.stopPropagation();
    // Panggil fungsi onClick
    onClick();
  };

  return (
    <div
      className="card w-60 h-72 bg-base-100 shadow-xl"
      onClick={handleCardClick}
    >
      <figure className="px-[80px] py-[80px] lg:h-48">
        <img
          src={image}
          alt="product"
          className="object-cover object-center"
          style={{ objectFit: "cover" }}
        />
      </figure>
      {/* <div className="mt-0 flex justify-item">
      <button
          type="button"
          className="cursor-pointer btn btn-ghost btn-circle absolute right-2 top-0 bg-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          onClick={handleAddToCart}
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-xs indicator-item"></span>
          </div>
        </button>
      </div> */}
      <div className="flex items-center px-[8px] py-[5px]">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((startRating, index) => (
            <StarIcon
              key={index}
              className={classNames(
                rating > startRating ? "text-yellow-400" : "text-gray-200",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{rating} out of 5 stars</p>
        <a
          href="#"
          className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500 pt-[5px]"
        >
          {count} reviews
        </a>
      </div>
      <div className="mt-0 flex justify-between px-[8px] py-[5px]">
        <div>
          <h3 className="font-semibold text-sm text-gray-700">
            <a>
              <span aria-hidden="true" className="absolute inset-0" />
              {title.substring(0, 20)}...
            </a>
          </h3>
        </div>
      </div>
      <div className="mt-0 flex justify-between px-[8px] py-[5px]">
        <div>
          <p
            className={`text-sm font-medium text-gray-900 bg-green-300 rounded-lg px-[5px] py-[2px] ${
              price > 500 ? "bg-yellow-500" : "bg-green-300"
            }`}
          >
            ${" "}
            {price.toLocaleString("en-US", {
              styles: "currency",
              currency: "USD",
            })}
          </p>
        </div>
      </div>
      <div className="mt-0 flex justify-between absolute right-2 top-2">
        <div>
          <button
            type="button"
            className="cursor-pointer btn btn-ghost btn-circle bg-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            onClick={handleAddToCart}
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {/* <span className="badge badge-xs indicator-item"></span> */}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
