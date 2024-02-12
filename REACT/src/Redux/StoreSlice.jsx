import { createSlice } from "@reduxjs/toolkit";

const StoreSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      //state is mutating
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
    clearItems: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearItems } = StoreSlice.actions;
export default StoreSlice.reducer;
