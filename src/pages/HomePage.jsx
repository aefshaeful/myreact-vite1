import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import Card from "../components/fragments/Card";
import Header from "../components/layouts/Header";

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
    <div>
      <div className="bg-[#152a46] mt-0">
        <Header />
        <div className="relative isolate px-6 pt-[30px] lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto py-32 sm:py-48 lg:py-[58px] flex justify-center">
            <div className="card card-side bg-base-100 shadow-xl h-[500px] w-[1300px] overflow-hidden">
              <figure
                style={{ height: "100%", width: "100%" }}
                className="relative transform scale-90 transition-transform duration-300 ease-in-out animate-zoom-in"
              >
                <img
                  className="rounded-[10px] h-full w-full object-cover"
                  src="/images/banner.jpg"
                  alt="product"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-[10px]"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center text-white w-full">
                  <h1 className="text-2xl font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl leading-tight">
                    The Best Place to Find the Latest Trending, <br />
                    Stylish and Alluring Products.
                  </h1>
                  <div className="mt-6 lg:mt-10 gap-x-6 flex flex-col items-center justify-center">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </figure>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
      {/* <header className="bg-[#152a46] px-10 p-5 text-white mt-0">
        <Navbar />
      </header> */}

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

      <main className="flex flex-wrap justify-center items-center gap-4 px-[30px] py-[80px]">
        {/* Repeat your CardProduct component as needed */}
        {productList.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            rating={product.rating.rate}
            count={product.rating.count}
          />
        ))}

        {/* "Show More" button */}
        <div className="flex items-center justify-center w-full mt-[30px]">
          <a
            href="#"
            className="rounded-md bg-[#FF6161] px-3.5 py-2.5 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Show More...
          </a>
        </div>
      </main>

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

      <footer className="bg-[#152a46] p-2 text-white text-center">
        <p>&copy; 2023 HTML Javascript dan CSS</p>
      </footer>
    </div>
  );
};

export default HomePage;
