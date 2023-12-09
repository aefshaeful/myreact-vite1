import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },

    reducers: {
        addToCart: (state, action) => {
            console.log('Adding to Cart:', action.payload);
            const checkItem = state.items.find((item) => item.id === action.payload.id);
            if (checkItem) {
                return {
                    ...state,
                    items: state.items.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, qty: 1 }]
                };
            }
        }
    }
});

export const { addToCart} = cartSlice.actions;
export default cartSlice.reducer;