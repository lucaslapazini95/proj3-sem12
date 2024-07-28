import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../types/product";

interface ProductState {
  product: IProducts | null;
}

const initialState: ProductState = {
  product: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<IProducts>) => {
      state.product = action.payload;
    },
    clearProduct: (state) => {
      state.product = null;
    },
  },
});

export const { setProduct, clearProduct } = productSlice.actions;
export default productSlice.reducer;
