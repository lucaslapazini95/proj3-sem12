import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/productsSlice";
import { IProducts } from "../types/product";

const ENDPOINT = "http://localhost:3000/products";

const fetchProducts = async (): Promise<IProducts[]> => {
  try {
    const response = await fetch(ENDPOINT);
    const products = await response.json();
    localStorage.setItem("products", JSON.stringify(products));
    return products;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw new Error("Erro ao buscar produtos");
  }
};

export const useFetchProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await fetchProducts();
        dispatch(setProducts(products));
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        const storedProducts = localStorage.getItem("products");
        if (storedProducts) {
          dispatch(setProducts(JSON.parse(storedProducts)));
        }
      }
    };

    getProducts();
  }, [dispatch]);
};
