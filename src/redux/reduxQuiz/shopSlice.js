import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        clearItems: (state) => {
            state.items = [];
        },
        clearItem: (state, action) => {
            // cation.payload부터 시작해서 1개만 삭제
            state.items.splice(action.payload, 1);
        }
    }
});

export const { addItem, clearItems, clearItem } = shopSlice.actions;
export default shopSlice.reducer;