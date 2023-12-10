import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import { Accordion } from "../components/fragments/Accordion";
import { FormCheckout } from "../components/fragments/FormCheckout";

const InstruksiPage = () => {
  const [currentPage, setCurrentPage] = useState("");
  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar />
        <main className="lg:px-10 min-h-full bg-slate-100">
          <div className="pt-[20px] hidden lg:flex lg:justify-start">
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
                        ? "text-blue-500"
                        : "text-black"
                    }
                    onClick={() => setCurrentPage("checkout")}
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
                        ? "text-black"
                        : "text-blue-500"
                    }
                    onClick={() => setCurrentPage("intstruksi-pembayaran")}
                  >
                    Instruksi Pembayaran
                  </Link>
                  {/* <a href="/products">Instruksi Pembayara</a> */}
                </li>
              </ul>
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
          <div className="footer px-[80px] pt-[150px] relative gap-[40px] h-[437px]">
            <aside>
              <a className="text-[#A3A3A3] font-semibold text-sm font-sans py-4">
                <p>TAGLINE edspert disini</p> <br />
                <p>Jl. Watugede No.58, Wonorejo, Sariharjo, Kec.</p>
                <p>Ngaglik, Kabupaten Sleman, Daerah Istimewa</p>
                <p>Yogyakarta 55581</p>
              </a>
            </aside>
            <nav className="font-semibold text-sm font-sans">
              <header className="footer title">Program</header>

              <a className="text-[#A3A3A3]">Online Course</a>
              <a className="text-[#A3A3A3]">Mini Bootcamp</a>
              <a className="text-[#A3A3A3]">Bootcamp</a>
            </nav>
            <nav className="font-semibold text-sm font-sans">
              <header className="footer title">Bidang Ilmu</header>
              <a className="text-[#A3A3A3]">Digital marketing</a>
              <a className="text-[#A3A3A3]">Product management</a>
              <a className="text-[#A3A3A3]">English</a>
              <a className="text-[#A3A3A3]">Programming</a>
            </nav>
            <nav className="font-semibold text-sm font-sans">
              <header className="footer title">Tentang Kami</header>
              <a className="text-[#A3A3A3]">Bantuan</a>
              <a className="text-[#A3A3A3]">Kontak kami</a>
              <a className="text-[#A3A3A3]">Media sosial</a>
            </nav>
            <div>
              <img
                src="./images/Ellipse.png"
                className="absolute bottom-0 right-0"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default InstruksiPage;
