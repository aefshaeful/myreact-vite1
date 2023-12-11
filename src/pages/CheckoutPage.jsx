import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Navbar from "../components/layouts/Navbar";
import { Accordion } from "../components/fragments/Accordion";
import { FormCheckout } from "../components/fragments/FormCheckout";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/layouts/Footer";

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

      <main className="lg:px-10 min-h-full bg-slate-100">
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
                  {/* <a href="/checkout" >Checkout</a> */}
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
                  {/* <a href="/products">Instruksi Pembayara</a> */}
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

        <div className="flex flex-wrap justify-center max-w-full h-full mt-8 pb-[180px]">
          <div className="px-4 py-4 lg:w-1/2 flex flex-wrap justify-center">
            <div className="card bg-white w-[500px] h-[800px] rounded-[10px] shadow-xl">
              <section className="flex flex-col">
                <h1 className="font-bold text-xl pl-8 lg:pt-8">
                  Pilih Metode Pembayaran
                </h1>
                <Accordion />
              </section>
            </div>
          </div>
          <div className="px-4 py-4 lg:w-1/2 flex flex-wrap justify-center">
            <div className="card bg-white w-[500px] md:w-[500px] h-[800px] rounded-[10px] shadow-xl">
              <section className="flex flex-col px-[30px] py-[35px]">
                <FormCheckout />
              </section>
            </div>
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
