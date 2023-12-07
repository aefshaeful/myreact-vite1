import { useEffect, useState } from "react";
import Navbar from "../components/layouts/Navbar";
//import { getProducts } from "../services/productService";
import Card from "../components/fragments/Card";
import Pagination from "../components/elements/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, getProductDetail } from "../store/product/action";
import Banner from "../components/fragments/Banner";
import DetailPage from "./DetailPage";
import { Link } from "react-router-dom";
//import Modal from "../components/fragments/Modal";

const ProductPage = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    dispatch(getProductDetail(product.id));
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct({});
    setShowModal(false);
  };

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

  // const fetchProducts = async () => {
  //   dispatch(getAllProduct());
  //   const response = await getProducts.get("/products?offset=0&limit=20");
  //   console.log("response", response);
  //   setProducts(response.data);
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, [dispatch]);

  return (
    <div>
      <Navbar />

      <div className="px-[30px] py-[20px] ">
        <Banner />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 py-[50px]">
        {products.map(
          (product) => (
            console.log("Product ID:", product.id),
            (
              <Link
                to={`/details/${product.id}`}
                key={product.id}
                className="product-container"
                onClick={() => handleProductClick(product)}
              >
                <Card
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  rating={product.rating ? product.rating.rate : 0}
                  count={product.rating ? product.rating.count : 0}
                />
              </Link>
            )
          )
        )}
      </div>
      {selectedProduct && (
        <DetailPage onModal={showModal} onClose={handleCloseModal} />
      )}
      {/* {showModal && <Modal show={showModal} handleClose={handleCloseModal} />} */}
      <Pagination />
    </div>
  );
};

export default ProductPage;
