import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./product/cartSlice";
import productSlice from "./product/productSlice";

const rootReducer = combineReducers({
    product: productSlice,
    cart: cartSlice,
});

export default rootReducer;