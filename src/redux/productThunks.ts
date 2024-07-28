import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProducts } from "../types/product";
import { setProduct } from "./productSlice";

const ENDPOINT = "http://localhost:3000/products";

export const fetchProductById = createAsyncThunk(
  "product/fetchById",
  async (productId: number, { dispatch }) => {
    try {
      const response = await fetch(`${ENDPOINT}/${productId}`);
      const product: IProducts = await response.json();
      dispatch(setProduct(product));
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  }
);
