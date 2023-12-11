import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            {/* <span className="sr-only">Your Company</span> */}
            <img
              className="h-[50px] w-[50px] pt-0"
              src="./images/icons-cart.png"
              alt=""
            />
          </a>
        </div>
        {/* <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          
        </button>
      </div> */}
        <div className="hidden lg:flex lg:gap-x-12">
          <ul className="flex items-center list-none m-0">
            <li className="mr-5 inline-block">
              <NavLink
                to="/"
                className="text-white font-semibold ml-0 inline-block"
              >
                Home
              </NavLink>
            </li>
            <li className="mr-5 inline-block">
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
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="bg-[#FF6161] rounded-full px-3 py-1 text-base font-semibold leading-6 text-white hover:bg-orange-400"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
    // <header className="absolute inset-x-0 top-0 z-50">
    //   <div className="flex flex-col sm:flex-row justify-between items-center">
    //     <h1 className="font-semibold text-2xl m-0" aria-label="Logo">
    //       LOGO
    //     </h1>
    //     <nav className="mt-1.5">
    //       <ul className="flex items-center list-none m-0">
    //         <li className="mr-5 inline-block">
    //           <NavLink to="/" className="text-white ml-0 inline-block">
    //             Home
    //           </NavLink>
    //         </li>
    //         <li className="mr-5 inline-block">
    //           <NavLink to="/products" className="text-white ml-0 inline-block">
    //             Products
    //           </NavLink>
    //         </li>
    //         <li className="mr-5 inline-block">
    //           <button className="bg-[#FF6161] rounded-full px-3 py-1 text-white font-semibold text-base hover:bg-[#2980b9] focus:outline-none focus:ring focus:border-[#3498db] transition-all duration-300">
    //             Login
    //           </button>
    //         </li>
    //         <li className="inline-block">
    //           <button className="bg-[#FF6161] rounded-full px-3 py-1 text-white font-semibold text-base hover:bg-[#2980b9] focus:outline-none focus:ring focus:border-[#3498db] transition-all duration-300">
    //             Register
    //           </button>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
  );
};

export default Header;
