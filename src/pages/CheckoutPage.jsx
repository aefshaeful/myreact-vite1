import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Navbar from "../components/layouts/Navbar";
import { FormCheckout } from "../components/fragments/FormCheckout";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/layouts/Footer";
import CartList from "../components/fragments/CartList";

const CheckoutPage = () => {
  const [currentPage, setCurrentPage] = useState(false);

  const handlePage = () => {
    setCurrentPage(true);
  };

  return (
    <div className="min-h-screen w-full">
      <main>
        <Navbar />
      </main>

      <main className="lg:px-10 min-h-full bg-slate-100 pb-48">
        <div className="pt-[20px] w-full h-10">
          <div className="flex flex-row">
            <NavLink to="/products">
              <ArrowLeftCircleIcon className="h-8 w-8" />
            </NavLink>

            <div className="px-3 py-1 text-base font-semibold leading-6 breadcrumbs">
              <ul>
                <li>
                  <Link
                    to="/checkout"
                    className={
                      currentPage === "checkout"
                        ? "text-black"
                        : "text-blue-500"
                    }
                    onClick={() => handlePage("checkout")}
                  >
                    Checkout
                  </Link>
                </li>
                <li>
                  <Link
                    to="/instruksi-pembayaran"
                    className={
                      currentPage === "instruksi-pembayaran"
                        ? "text-blue-500"
                        : "text-black"
                    }
                    onClick={() => handlePage("instruksi-pembayaran")}
                  >
                    Instruksi Pembayaran
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:px-0 pt-2 lg:pt-2">
          <h1 className="font-bold text-3xl lg:text-4xl pt-4 lg:pt-8">
            Checkout
          </h1>
        </div>

        <div className="md:grid md:grid-cols-2 flex flex-col md:justify-center gap-x-10 gap-y-10">
          <div className="md:w-fit md:h-fit bg-slite-200">
            <FormCheckout />
          </div>
          <div className="md:w-fit md:h-fit card bg-white shadow-2xl shadow-white- px-4 py-5 mt-10 ">
            <CartList />
          </div>
        </div>
      </main>

      <footer className=" bg-[#ffffff]">
        <Footer />
      </footer>
    </div>
  );
};

export default CheckoutPage;
