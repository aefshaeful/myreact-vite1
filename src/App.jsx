//import "./style.css";

import CardProduct from "./components/fragments/CardProduct";

function App() {
  return (
    <div>
      <header className="bg-[#152a46] px-10 p-5 m-0 text-white mt-0 h-80">
        <div className=" flex justify-between items-center">
          <h1 className="p-0 font-semibold text-2xl m-0">LOGO</h1>
          <nav className="mt-1.5">
            <ul className="list-none m-0">
              <li className="mr-5 inline-block">
                <a className=" text-white ml-0 inline-block" href="#">
                  Menu 1
                </a>
              </li>
              <li className="mr-5 inline-block">
                <a className=" text-white ml-0 inline-block" href="#">
                  Menu 2
                </a>
              </li>
              <li className="mr-5 inline-block">
                <a className=" text-white ml-0 inline-block" href="#">
                  Menu 3
                </a>
              </li>
              <li className="mr-5 inline-block">
                <span id="saldo">400000</span>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex flex-wrap justify-center items-center gap-4 px-[72px] py-[89px]">
        <CardProduct>
          <CardProduct.BannerProduct />
          <CardProduct.DescriptionProduct />
        </CardProduct>
        <CardProduct>
          <CardProduct.BannerProduct />
          <CardProduct.DescriptionProduct />
        </CardProduct>
        <CardProduct>
          <CardProduct.BannerProduct />
          <CardProduct.DescriptionProduct />
        </CardProduct>
        <CardProduct>
          <CardProduct.BannerProduct />
          <CardProduct.DescriptionProduct />
        </CardProduct>
        <CardProduct>
          <CardProduct.BannerProduct />
          <CardProduct.DescriptionProduct />
        </CardProduct>
        <CardProduct>
          <CardProduct.BannerProduct />
          <CardProduct.DescriptionProduct />
        </CardProduct>
        {/* <section>
          <h2>React JS</h2>
          <p>Ini adalah paragraf dalam React JS.</p>
          <button>Checkout</button>
        </section> */}
      </main>

      <footer className="bg-[#152a46] p-2 text-white text-center">
        <p>&copy; 2023 HTML Javascript dan CSS</p>
      </footer>
    </div>
  );
}

export default App;
