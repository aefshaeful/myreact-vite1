/* eslint-disable react/prop-types */
import { Fragment, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addTotalPrice } from "../../store/product/totalPriceSlice";

const ShoppingCart = ({ onCart, closeCart }) => {
  const { products } = useSelector((state) => state.product);
  const { items } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.totalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length > 0 && items.length > 0) {
      const total = items.reduce((acc, item) => {
        const productItem = products.find(
          (productItem) => productItem.id === item.id
        );
        return acc + productItem.price * item.qty;
      }, 0);
      dispatch(addTotalPrice(total));
    }
  }, [products, items, dispatch]);

  const totalPriceRef = useRef(null);

  // useEffect(() => {
  //   if (items.length > 0) {
  //     totalPriceRef.current.style.display = "block";
  //   } else {
  //     totalPriceRef.current.style.display = "none";
  //   }
  // }, [items]);

  useEffect(() => {
    if (totalPriceRef.current) {
      totalPriceRef.current.style.display = items.length > 0 ? "block" : "none";
    }
  }, [items]);

  console.log("ProductCart:", items);

  return (
    <Transition.Root show={onCart} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => closeCart(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          {items && items.length > 0 ? (
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {items.map((item) => {
                                const productItem = products.find(
                                  (productItem) => productItem.id === item.id
                                );
                                return (
                                  <li
                                    key={productItem?.id}
                                    className="flex py-6"
                                  >
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={productItem?.image}
                                        alt=""
                                        className="object-cover object-center"
                                        style={{ objectFit: "cover" }}
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href="#">{productItem?.title}</a>
                                          </h3>
                                          <p className="ml-4">
                                            ${" "}
                                            {item.qty *
                                              productItem?.price.toLocaleString(
                                                "en-US",
                                                {
                                                  styles: "currency",
                                                  currency: "USD",
                                                }
                                              )}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">
                                          Qty {item.qty}
                                        </p>

                                        <div className="flex">
                                          <button
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            <p>Your cart is empty.</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p
                          ref={totalPriceRef}
                          style={{
                            display: items.length > 0 ? "block" : "none",
                          }}
                        >
                          ${" "}
                          {total.toLocaleString("en-US", {
                            styles: "currency",
                            currency: "USD",
                          })}
                        </p>

                        {/* <p>Subtotal</p>
                        <p>
                          ${" "}
                          {total.toLocaleString("en-US", {
                            styles: "currency",
                            currency: "USD",
                          })}
                        </p> */}
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <NavLink
                          to="/checkout"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </NavLink>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or {""}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => closeCart(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ShoppingCart;
