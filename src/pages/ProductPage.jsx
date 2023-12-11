import { useEffect, useState } from "react";
import Navbar from "../components/layouts/Navbar";
//import { getProducts } from "../services/productService";
// import Card from "../components/fragments/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, getProductDetail } from "../store/product/action";
import Banner from "../components/fragments/Banner";
import DetailPage from "./DetailPage";
import ShoppingCart from "../components/fragments/ShoppingCart";
// import CardProduct from "../components/fragments/CardProduct";
import CardProducts from "../components/fragments/CardProducts";
import { addToCart } from "../store/product/cartSlice";
import Footer from "../components/layouts/Footer";
import Loader from "../components/elements/Loader";
//import { Link } from "react-router-dom";
//import Modal from "../components/fragments/Modal";

const ProductPage = () => {
  const { products, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [onCart, setOnCart] = useState(false);

  const openCart = (productItem) => {
    dispatch(getProductDetail(productItem.id));
    dispatch(addToCart(productItem));
    setOnCart(true);
  };

  const closeCart = () => {
    setOnCart(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = (product) => {
    dispatch(getProductDetail(product.id));
    setIsOpen(true);
  };

  // const handleProductClick = (product) => {
  //   setSelectedProduct(product);
  //   dispatch(getProductDetail(product.id));
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setSelectedProduct({});
  //   setShowModal(false);
  // };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await dispatch(getAllProduct());
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <>
      <header>
        <Navbar>
          <Navbar.IconCart />
        </Navbar>
        <div className="px-0">
          <Banner />
        </div>
      </header>

      <main className="bg-slate-100 px-20 py-24">
        <div className="flex flex-wrap justify-center items-center gap-8 py-[50px]">
          {loading ? (
            <Loader />
          ) : (
            products.map((product) => (
              <div key={product.id} className="product-container">
                <CardProducts
                  onClick={() => openModal(product)}
                  addToCart={() => openCart(product)}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  rating={product.rating ? product.rating.rate : 0}
                  count={product.rating ? product.rating.count : 0}
                />
              </div>
            ))
          )}
        </div>
        {openModal && <DetailPage isOpen={isOpen} closeModal={closeModal} />}
        <ShoppingCart onCart={onCart} closeCart={closeCart} />
      </main>

      <footer className=" bg-[#ffffff]">
        <Footer />
      </footer>
    </>
  );
};

export default ProductPage;
