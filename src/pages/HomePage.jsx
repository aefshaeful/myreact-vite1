import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import Card from "../components/fragments/Card";
import Header from "../components/layouts/Header";
import Hero from "../components/layouts/Hero";
import Footer from "../components/layouts/Footer";

const HomePage = () => {
  const [productList, setProductList] = useState([]);

  const fetchProductList = async () => {
    const response = await getProducts.get("/products");
    console.log("response", response);
    setProductList(response.data.slice(0, 4));
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <>
      <header className="bg-[#152a46] mt-0">
        <Header />
        <Hero />
      </header>

      <main>
        <div className="bg-gray-200 w-full h-[100px]">
          <div className="flex items-center justify-center h-full">
            <div className="flex items-center justify-center gap-x-20">
              <h3 className="text-2xl font-bold font-sans">Clothes</h3>
              <h3 className="text-2xl font-bold font-sans">Electronic</h3>
              <h3 className="text-2xl font-bold font-sans">Funiture</h3>
              <h3 className="text-2xl font-bold font-sans">Accessories</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 px-[30px] py-[80px]">
          {/* Repeat your CardProduct component as needed */}
          {productList.map((product) => (
            <Card
              key={product.title}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating.rate}
              count={product.rating.count}
            />
          ))}

          <div className="flex items-center justify-center w-full mt-[30px]">
            <a
              href="/products"
              className="rounded-md bg-[#FF6161] px-3.5 py-2.5 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Show More...
            </a>
          </div>
        </div>

        <div className="grid grid-rows-3 grid-flow-col gap-4 px-[30px] py-[50px]">
          <div className="row-span-3 ...">
            <img
              src="/images/girlmodel.jpg"
              alt="product"
              loading="lazy"
              className="h-full w-full object-cover animate-pulse"
            />
          </div>
          <div className="col-span-2 ...">
            <img
              src="/images/model.jpg"
              alt="product"
              loading="lazy"
              className="h-full w-full object-cover animate-pulse"
            />
          </div>
          <div className="row-span-2 col-span-2 ...">
            <img
              src="/images/sales.jpg"
              alt="product"
              loading="lazy"
              className="h-full w-full object-cover animate-pulse"
            />
          </div>
        </div>
      </main>

      
      <footer className=" bg-[#ffffff]">
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
