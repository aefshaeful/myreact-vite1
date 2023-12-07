import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALL_PRODUCT, GET_PRODUCT_DETAIL } from "../../utils/constant";
import { getProducts } from "../../services/productService";

export const getAllProduct = createAsyncThunk(
    GET_ALL_PRODUCT,
    async () => {
        try {
            const response = await getProducts.get("/products");
            console.log("response", response);
            return response.data;
        } catch (error) {
            return error;
        }
    }
);

export const getProductDetail = createAsyncThunk(
    GET_PRODUCT_DETAIL,
    async (productId) => {
      try {
        const response = await getProducts.get(`/products/${productId}`);
        return response.data;
      } catch (error) {
        return error;
      }
    }
  );