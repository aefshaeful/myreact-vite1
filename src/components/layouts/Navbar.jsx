import { useState } from "react";
import ShoppingCart from "../fragments/ShoppingCart";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const Navbar = ({ children }) => {
  return (
    <div className="navbar bg-[#152a46]">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <ul className="flex items-center list-none m-0">
          <li className="mr-5 inline-block bg-[#FF6161] px-4 py-1 rounded-full">
            <NavLink
              to="/"
              className="text-white font-semibold ml-0 inline-block"
            >
              Home
            </NavLink>
          </li>
          <li className="mr-5 inline-block bg-[#FF6161] px-4 py-1 rounded-full">
            <NavLink
              to="/products"
              className="text-white font-semibold ml-0 inline-block"
            >
              Shop
            </NavLink>
          </li>
          {/* <li className="mr-5 inline-block">
               <button className="bg-[#FF6161] rounded-full px-3 py-1 text-white font-semibold text-base hover:bg-[#2980b9] focus:outline-none focus:ring focus:border-[#3498db] transition-all duration-300">
                 Login
               </button>
             </li>
             <li className="inline-block">
               <button className="bg-[#FF6161] rounded-full px-3 py-1 text-white font-semibold text-base hover:bg-[#2980b9] focus:outline-none focus:ring focus:border-[#3498db] transition-all duration-300">
                 Register
               </button>
             </li> */}
        </ul>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end pr-3">{children}</div>
        {/* <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
      </div>
      {/* <ShoppingCart onCart={onCart} closeCart={closeCart} /> */}
    </div>
  );
};

const CartIcon = () => {
  const { items } = useSelector((state) => state.cart);
  const [onCart, setOnCart] = useState(false);

  const openCart = () => {
    setOnCart(true);
  };

  const closeCart = () => {
    setOnCart(false);
  };

  const totalQuantity = items.reduce((total, item) => total + item.qty, 0);

  return (
    <>
      <div tabIndex={0} role="button" className="btn btn-circle bg-white">
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

          <span className="badge badge-xs indicator-item">{totalQuantity}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">Quantity: {totalQuantity}</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block" onClick={openCart}>
              View cart
            </button>
          </div>
        </div>
      </div>
      <ShoppingCart onCart={onCart} closeCart={closeCart} />
    </>
  );
};

export default Navbar;
Navbar.IconCart = CartIcon;
