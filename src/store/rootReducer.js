import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./product/cartSlice";
import productSlice from "./product/productSlice";
import totalPriceSlice from "./product/totalPriceSlice";
import transactionSlice from "./product/transactionSlice";

const rootReducer = combineReducers({
    product: productSlice,
    cart: cartSlice,
    totalPrice: totalPriceSlice,
    transaction: transactionSlice,
});

export default rootReducer;