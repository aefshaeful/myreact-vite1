//import "./style.css";
import CardProduct from "./components/fragments/CardProduct";
import { useState } from "react";

function App() {
  const [productList, setProductList] = useState([
    {
      courseType: "Intensive Bootcamp",
      title: "Programming Laravel",
      description: "(Getting Started with Laravel 9)",
      price: 600000,
      discount: 400000,
    },
    {
      courseType: "Intensive Bootcamp",
      title: "Programming NodeJs",
      description: "(Getting Started with NodeJs)",
      price: 600000,
      discount: 400000,
    },
    {
      courseType: "Intensive Bootcamp",
      title: "Programming NextJs",
      description: "(Getting Started with NextJs)",
      price: 600000,
      discount: 400000,
    },
    {
      courseType: "Intensive Bootcamp",
      title: "Programming PHP",
      description: "(Getting Started with PHP)",
      price: 600000,
      discount: 400000,
    },
    {
      courseType: "Intensive Bootcamp",
      title: "Programming Python",
      description: "(Getting Started with Python)",
      price: 600000,
      discount: 400000,
    },
    {
      title: "Programming Java",
      description: "(Getting Started with Java)",
      price: 600000,
      discount: 400000,
    },
    {
      courseType: "Free Bootcamp",
      title: "Programming ReactJs",
      description: "(Getting Started with ReactJs)",
      price: 0,
      discount: 0,
    },
    {
      courseType: "Intensive Bootcamp",
      title: "Programming JavaScipt",
      description: "(Getting Started with JavaScript)",
      price: 600000,
      discount: 400000,
    },
  ]);

  const [shoopingCart, setShoopingCart] = useState([]);
  const addShoopingCart = (product) => {
    setShoopingCart((prevState) => [...prevState, product]);
  };

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
                <span id="saldo">Total Keranjang: {shoopingCart.length}</span>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex flex-wrap justify-center items-center gap-4 px-[72px] py-[89px]">
        {productList.map((product) => {
          return (
            <CardProduct key={product.title}>
              <CardProduct.BannerProduct
                courseType={product.courseType}
                title={product.title}
                description={product.description}
              />
              <CardProduct.DescriptionProduct
                courseType={product.courseType}
                title={product.title}
                description={product.description}
                price={product.price}
                discount={product.discount}
                addShoopingCart={(selectedProduct) => addShoopingCart([...shoopingCart, selectedProduct])}
              />
            </CardProduct>
          );
        })}

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
