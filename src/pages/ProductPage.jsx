import { useEffect, useState } from "react";
import Navbar from "../components/layouts/Navbar";
//import { getProducts } from "../services/productService";
import Card from "../components/fragments/Card";
import Pagination from "../components/elements/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, getProductDetail } from "../store/product/action";
import Banner from "../components/fragments/Banner";
import DetailPage from "./DetailPage";
import ShoppingCart from "../components/fragments/ShoppingCart";
//import { Link } from "react-router-dom";
//import Modal from "../components/fragments/Modal";

const ProductPage = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [onCart, setOnCart] = useState(false);

  const openCart = () => {
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
    <div>
      <Navbar handleOnCart={openCart} />

      <div className="px-[30px] py-[20px] ">
        <Banner />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 py-[50px]">
        {products.map((product) => (
          <div key={product.id} className="product-container">
            <Card
              onClick={() => openModal(product)}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating ? product.rating.rate : 0}
              count={product.rating ? product.rating.count : 0}
            />
          </div>
        ))}
      </div>
      {openModal && <DetailPage isOpen={isOpen} closeModal={closeModal} />}
      <ShoppingCart onCart={onCart} closeCart={closeCart} />
      <Pagination />
    </div>
  );
};

export default ProductPage;
