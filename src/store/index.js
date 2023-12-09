import { configureStore } from "@reduxjs/toolkit";
// import { productSlice } from "./product/productSlice";
import rootReducer from "./rootReducer";

const store = configureStore({
    reducer: rootReducer,
    // reducer: {
    //     //product: productSlice.reducer,
    // },
});


export default store;