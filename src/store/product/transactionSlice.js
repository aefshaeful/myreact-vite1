import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
    name: "transaction",
    initialState: {
        transaction: {},
        amounts: 0,
    },
    reducers: {
        addTransaction: (state, action) => {
            console.log("Adding to Transaction:", action.payload);
            return {
                ...state,
                transaction: action.payload
                
            };
        },
        addAmount: (state, action) => {
            console.log("Adding to Amount:", action.payload);
            return {
                ...state,
                amounts: action.payload
            };
        }
    }
});

export const { addTransaction, addAmount } = transactionSlice.actions;
export default transactionSlice.reducer;
