import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 w-full">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                className="h-[50px] w-[50px] pt-0"
                src="./images/icons-cart.png"
                alt=""
              />
            </a>
          </div>
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
    </>
  );
};

export default Header;
