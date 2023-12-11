/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import Button from "../components/elements/Button";
//import { useDispatch } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DetailPage = ({ isOpen, closeModal }) => {
  const { product } = useSelector((state) => state.product);
  console.log("ProductItem:", product);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="w-full h-[30px]">
                    <button
                      type="button"
                      className="absolute right-2 top-0 text-gray-400 hover:text-gray-500 sm:right-4 sm:top-4 md:right-4 md:top-4 lg:right-4 lg:top-4 focus:outline-none"
                      onClick={closeModal}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="w-100 flex justify-center items-center">
                    <div className="flex font-sans">
                      <div className="flex-none w-60 relative bg-gray-100 flex items-center justify-center">
                        <figure className="px-[10px] py-[10px]">
                          <img
                            src={product.image}
                            alt=""
                            className="w-full max-h-min object-cover object-center"
                            loading="lazy"
                          />
                        </figure>
                      </div>
                      <form className="flex-auto p-4">
                        <div className="flex flex-wrap">
                          <div className="text-3xl font-bold mb-3">
                            ${product.price}
                          </div>
                          <div className="w-full flex-nonmt-2">
                            <h1 className="flex-auto text-lg font-semibold text-slate-900">
                              {product.title}
                            </h1>
                          </div>

                          <div className="mt-6">
                            <h4 className="sr-only">Reviews</h4>
                            <div className="flex items-center">
                              <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((starRating, index) => (
                                  <StarIcon
                                    key={index}
                                    className={classNames(
                                      product.rating &&
                                        product.rating.rate > starRating
                                        ? "text-yellow-400"
                                        : "text-gray-200",
                                      "h-5 w-5 flex-shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                ))}
                              </div>
                              <p className="sr-only">
                                {product.rating && product.rating.rate} out of 5
                                stars
                              </p>
                              <a
                                href="#"
                                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                {product.rating && product.rating.count} reviews
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                          <div className="space-x-2 flex text-sm">
                            {product.description}
                          </div>
                        </div>
                        <div className="flex space-x-4 mb-6 text-sm font-medium">
                          <div className="flex-auto flex space-x-4">
                            <Button classNames="bg-[#FFCD29] px-[30px] py-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                              <div className="indicator gap-2">
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
                                <span>Add to cart</span>
                              </div>
                            </Button>
                          </div>
                          <button
                            className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                            type="button"
                            aria-label="Like"
                          >
                            <svg
                              width="20"
                              height="20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DetailPage;
