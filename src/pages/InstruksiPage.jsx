import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import CardInstruksi from "../components/fragments/CardInstruksi";
import Footer from "../components/layouts/Footer";

const InstruksiPage = () => {
  const [currentPage, setCurrentPage] = useState(false);

  const handlePage = () => {
    setCurrentPage(true);
  };

  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar />
        <main className="lg:px-10 min-h-full bg-slate-100">
          <div className="pt-[20px] w-full h-10">
            <div className="flex flex-row">
              <NavLink to="/checkout">
                <ArrowLeftCircleIcon className="h-8 w-8" />
              </NavLink>

              <div className="px-3 py-1 text-base font-semibold leading-6 breadcrumbs">
                <ul>
                  <li>
                    <Link
                      to="/checkout"
                      className={
                        currentPage === "checkout"
                          ? "text-blue-500"
                          : "text-blue"
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
                          ? "text-black"
                          : "text-blue-500"
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
              Payment Instructions
            </h1>
          </div>

          <div className="w-full mt-8 pb-[180px]">
            <CardInstruksi />
          </div>
        </main>
        <footer className=" bg-[#ffffff]">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default InstruksiPage;
