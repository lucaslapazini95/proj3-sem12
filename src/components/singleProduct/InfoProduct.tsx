import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";

const InfoProduct: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const { sku } = useParams<{ sku: string }>();
  const product = products.find((p) => p.sku === sku);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container flex flex-col md:flex-row justify-center items-center gap-20">
      <ProductImages product={product} />
      <ProductDetails product={product} />
    </div>
  );
};

export default InfoProduct;
