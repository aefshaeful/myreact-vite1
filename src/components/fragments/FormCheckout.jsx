import { NavLink } from "react-router-dom";
import Button from "../elements/Button";

export const FormCheckout = () => {
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-xl font-bold leading-7 text-gray-900">
          Order summary
        </h3>
      </div>
      <div className="mt-2">
        <dl className="divide-y divide-gray-100">
          <div className="px-0 py-6 flex flex-col-2">
            <div className="text-sm font-medium leading-6 text-gray-900 w-32">
              <img
                src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                alt=""
                className="w-24 h-32"
              />
            </div>
            <div className="mt-1 leading-6">
              <p className="font-bold text-sm">
                Mens Casual Premium Slim Fit T-Shirts
              </p>
              <p className="text-sm text-gray-500 pt-2">$ 36.00</p>
              <p className="text-sm font-semibold text-blue-500 pt-4">
                <a href="#">Edit</a> <a>|</a> <a href="#">Remove</a>
              </p>
            </div>
          </div>
          <dl className="divide-y divide-gray-100"></dl>
          <div className="mt-6 flex max-w-md gap-x-4">
            <label htmlFor="text" className="sr-only">
              Discount Code
            </label>
            <input
              id=""
              name="text"
              type="text"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm focus-visible:outline-indigo-500  focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Enter discount code"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Apply
            </button>
          </div>
          <div className="px-0 py-6">
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
                $108.00
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
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="font-bold text-lg leading-6 text-gray-900">Total</dt>
            <dd className="mt-1 font-bold text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-end">
              $141.92
            </dd>
          </div>
          <div className="py-6">
            <dd className="text-xs leading-6 text-gray-700 sm:mt-0">
              By pressing the <strong>Pay button</strong> you have agreed to the
              applicable terms and conditions, please read the applicable{" "}
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
        </dl>
        <div className="flex justify-between absolute bottom right-8 gap-2">
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
      </div>
    </div>
  );
};
