import { NavLink } from "react-router-dom";
import Button from "../elements/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Payment } from "../../utils/Payment";
import {
  addAmount,
  addTransaction,
} from "../../store/product/transactionSlice";

const deliveries = {
  delivery: [
    {
      type: "Standard",
      price: 4,
      time: "4-10 business days",
    },
    {
      type: "Express",
      price: 8,
      time: "2-5 business days",
    },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: true },
    { name: "XXXL", inStock: false },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const FormCheckout = () => {
  const [selectedDelivery, setSelectedDelivery] = useState(
    deliveries.delivery[1]
  );
  const [payments] = useState(Payment);
  const { total } = useSelector((state) => state.totalPrice);
  const [optionPayment, setOptionPayment] = useState([]);
  const { amounts } = useSelector((state) => state.transaction);
  const dispatch = useDispatch();

  const handleOptionPayment = (applyPayment) => {
    setOptionPayment(applyPayment);
    dispatch(addTransaction(applyPayment));
    console.log("optionPayment", applyPayment);
  };

  useEffect(() => {
    if (selectedDelivery) {
      const totalAmount = total + selectedDelivery.price;
      dispatch(addAmount(totalAmount));
      console.log("totalAmount", totalAmount);
    }
  }, [total, selectedDelivery, dispatch]);

  return (
    <form>
      <div className="space-y-0 px-4 pt-10">
        <div className="border-b border-gray-900/10 pb-0">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Payment Method
              </legend>
              <p className="mt-1 text-xs leading-6 text-gray-600">
                *)This payment method requires manual payment verification via
                WhatsApp
              </p>
              <div className="mt-3 space-y-5">
                {payments.map((unitPayment) => (
                  <div
                    className="flex items-center gap-x-3"
                    key={unitPayment.name}
                  >
                    <input
                      name="radAnswer"
                      type="radio"
                      required
                      value={unitPayment.name}
                      onClick={() => handleOptionPayment(unitPayment)}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <div className="flex justify-between items-center md:flex md:justify-between md:w-fit md:gap-2 gap-2">
                      <img
                        src={unitPayment.image}
                        alt="mandiri"
                        className="max-w-fit pb-2"
                      />
                      <p className="text-sm font-medium  text-gray-900">
                        {unitPayment.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
          <div className="mt-10">
            <div className="flex items-center justify-between ">
              <h4 className="text-sm font-medium text-gray-900">
                Delivery Method
              </h4>
            </div>

            <RadioGroup
              value={selectedDelivery}
              onChange={setSelectedDelivery}
              className="mt-4 "
            >
              <div className="flex flex-col font-thin text-xs md:max-w-fit md:max-h-fit sm:col-span-2 md:grid md:grid-cols-4 gap-x-2 gap-y-2 ">
                {deliveries.delivery.map((itemDelivery) => (
                  <RadioGroup.Option
                    key={itemDelivery.type}
                    value={itemDelivery}
                    className={({ active }) =>
                      classNames(
                        active ? "ring-2 ring-indigo-500" : "",
                        "group relative flex items-center justify-center rounded-md border py-1 px-1 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                      )
                    }
                  >
                    <div className="flex flex-col uppercase">
                      <p>{itemDelivery.type}</p>
                      <p className="text-gray-500 text-xs pt-2">
                        {itemDelivery.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </p>
                      <p className="text-gray-500 text-xs font-normal uppercase">
                        {itemDelivery.time}
                      </p>
                    </div>
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div className="mt-6 px-4 py-6 sm:px-0 sm:py-0">
            <div className="mt-6 flex  gap-x-4">
              <label htmlFor="text" className="sr-only">
                Discount Code
              </label>
              <input
                id=""
                name="text"
                type="text"
                required
                className="min-w-0 flex-auto rounded-md border-2 border-indigo-500 bg-white/5 px-3.5 py-2 shadow-sm focus-visible:outline-indigo-500  focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter discount code"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Apply
              </button>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="px-0 py-2">
                <p className="flex justify-between py-1">
                  <a className="text-sm font-medium leading-6 text-gray-900">
                    Payment method
                  </a>
                  <a className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-end">
                    {optionPayment.name}
                  </a>
                </p>

                <p className="flex justify-between py-1">
                  <a className="text-sm font-medium leading-6 text-gray-900">
                    Subtotal
                  </a>
                  <a className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-end">
                    {total.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </a>
                </p>
                <p className="flex justify-between py-1">
                  <a className="text-sm font-medium leading-6 text-gray-900">
                    Discount
                  </a>
                  <a className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-end">
                    $0
                  </a>
                </p>
                <p className="flex justify-between py-1">
                  <a className="text-sm font-medium leading-6 text-gray-900">
                    Shipping
                  </a>
                  <a className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-end">
                    {selectedDelivery.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </a>
                </p>
              </div>
              <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="font-bold text-lg leading-6 text-gray-900">
                  Total
                </dt>
                <dd className="mt-1 font-bold text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-end">
                  {amounts.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </dd>
              </div>
              <div className="py-6">
                <dd className="text-xs leading-6 text-gray-700 sm:mt-0">
                  By pressing the <strong>Pay button</strong> you have agreed to
                  the applicable terms and conditions, please read the
                  applicable{" "}
                  <a
                    href="#"
                    className="underline decoration-blue-500 text-blue-500"
                  >
                    Terms & Conditions
                  </a>{" "}
                  {""}
                  again.
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-6 mt-4 mr-4">
        <NavLink to="/products">
          <Button
            classNames={
              "px-[10px] py-[5px] bg-slate-300 transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-white duration-200"
            }
          >
            Cancel
          </Button>
        </NavLink>
        <NavLink to="/instruksi-pembayaran">
          <Button
            classNames={
              "px-[10px] py-[5px] bg-blue-500 text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200"
            }
          >
            Pay now
          </Button>
        </NavLink>
      </div>
    </form>
  );
};

{
  /* <div className="px-4 sm:px-0">
        <h3 className="text-xl font-bold leading-7 text-gray-900">
          Order summary
        </h3>
      </div> */
}
{
  /* <div className="mt-2">
        <div className="flow-root h-64 flex-col overflow-y-scroll bg-white px-4">
          {items && items.length > 0 ? (
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {items.map((item) => {
                const productItem = products.find(
                  (productItem) => productItem.id === item.id
                );
                return (
                  <li key={productItem?.id} className="flex py-6">
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
                        <div className="flex justify-between text-sm font-medium text-gray-900">
                          <h3>
                            <a href="#">{productItem?.title}</a>
                          </h3>
                        </div>
                      </div>
                      <div className="text-sm">
                        <p className="text-gray-500 pt-2">Qty {item.qty}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-sm font-medium pt-1">
                          ${" "}
                          {item.qty *
                            productItem?.price.toLocaleString("en-US", {
                              styles: "currency",
                              currency: "USD",
                            })}
                        </p>

                        <div className="">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Edit
                          </button>
                          <span className="text-gray-500 px-2">|</span>
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
        <div className="mt-6 px-4 py-6 sm:px-0 sm:py-0">
          <div className="mt-6 flex max-w-md gap-x-4">
            <label htmlFor="text" className="sr-only">
              Discount Code
            </label>
            <input
              id=""
              name="text"
              type="text"
              required
              className="min-w-0 flex-auto rounded-md border-2 border-indigo-500 bg-white/5 px-3.5 py-2 shadow-sm focus-visible:outline-indigo-500  focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Enter discount code"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Apply
            </button>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="px-0 py-2">
              <p className="flex justify-between py-1">
                <a className="text-sm font-medium leading-6 text-gray-900">
                  Payment method
                </a>
                <a className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-end">
                  Bank Transfer (verifikasi manual)-Mandiri
                </a>
              </p>

              <p className="flex justify-between py-1">
                <a className="text-sm font-medium leading-6 text-gray-900">
                  Subtotal
                </a>
                <a className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-end">
                  ${total}
                </a>
              </p>
              <p className="flex justify-between py-1">
                <a className="text-sm font-medium leading-6 text-gray-900">
                  Discount
                </a>
                <a className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-end">
                  -$16.00
                </a>
              </p>
              <p className="flex justify-between py-1">
                <a className="text-sm font-medium leading-6 text-gray-900">
                  Taxes
                </a>
                <a className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-end">
                  $9.92
                </a>
              </p>
              <p className="flex justify-between py-1">
                <a className="text-sm font-medium leading-6 text-gray-900">
                  Shipping
                </a>
                <a className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-end">
                  $8.00
                </a>
              </p>
            </div>
            <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="font-bold text-lg leading-6 text-gray-900">
                Total
              </dt>
              <dd className="mt-1 font-bold text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-end">
                $141.92
              </dd>
            </div>
            <div className="py-6">
              <dd className="text-xs leading-6 text-gray-700 sm:mt-0">
                By pressing the <strong>Pay button</strong> you have agreed to
                the applicable terms and conditions, please read the applicable{" "}
                <a
                  href="#"
                  className="underline decoration-blue-500 text-blue-500"
                >
                  Terms & Conditions
                </a>{" "}
                {""}
                again.
              </dd>
            </div>
          </div>
        </div>

        <div className="flex justify-between absolute bottom right-8 gap-2 py-0">
          <NavLink to="/products">
            <Button
              classNames={
                "px-[20px] py-[10px] bg-slate-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-300"
              }
            >
              Cancel
            </Button>
          </NavLink>
          <NavLink to="/instruksi-pembayaran">
            <Button
              classNames={
                "px-[20px] py-[10px] bg-blue-500 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              }
            >
              Pay now
            </Button>
          </NavLink>
        </div>
      </div> */
}
