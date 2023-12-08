/* eslint-disable react/prop-types */
import { StarIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Card = (props) => {
  const { image, title, price, rating, count, onClick } = props;
  return (
    <div
      className="group relative w-[280px] rounded-md shadow-lg"
      onClick={onClick}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={image}
          alt="product"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
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
      <div className="mt-0 flex justify-between px-[10px] py-[10px]">
        <div>
          <h3 className="font-semibold text-gray-700">
            <a>
              <span aria-hidden="true" className="absolute inset-0" />
              {title.substring(0, 20)}...
            </a>
          </h3>
        </div>
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
  );
};

export default Card;
