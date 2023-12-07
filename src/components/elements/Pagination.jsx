import { useState, useEffect } from "react";
import { getProducts } from "../../services/productService";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limitPerPage = 20; // Ganti dengan jumlah item per halaman yang Anda inginkan

  const fetchProducts = async () => {
    try {
      const response = await getProducts.get(`/products?offset=${0}&limit=${20}`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchProducts((newPage - 1) * limitPerPage);
  };

  useEffect(() => {
    fetchProducts(0);
  }, []);

  return (
    <div>
      {/* Render your product list here */}
      {products.map((product) => (
        // Render each product item
        <div key={product.id}>{product.name}</div>
      ))}

      {/* Render pagination */}
      <div className="flex justify-center mt-4">
        {[...Array(10).keys()].map((page) => (
          <button
            key={page + 1}
            onClick={() => handlePageChange(page + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === page + 1 ? "bg-indigo-600 text-white" : "bg-gray-300 text-gray-700"
            }`}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
