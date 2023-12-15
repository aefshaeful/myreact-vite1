import { createSlice } from "@reduxjs/toolkit";

export const totalPriceSlice = createSlice({
    name: "totalPrice",
    initialState: {
        total: 0,
    },
    reducers: {
        addTotalPrice: (state, action) => {
            console.log("Adding to Total Price:", action.payload);
            return {
                total: action.payload
            };
        }
    }
    }
);

export const { addTotalPrice } = totalPriceSlice.actions;
export default totalPriceSlice.reducer;