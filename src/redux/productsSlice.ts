import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../types/product";

interface ProductsState {
  products: IProducts[];
  show: number;
  currentPage: number;
}

const initialState: ProductsState = {
  products: [],
  show: 8,
  currentPage: 1,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProducts[]>) => {
      state.products = action.payload;
    },
    setShow: (state, action: PayloadAction<number>) => {
      state.show = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setProducts, setShow, setCurrentPage } = productsSlice.actions;
export default productsSlice.reducer;
