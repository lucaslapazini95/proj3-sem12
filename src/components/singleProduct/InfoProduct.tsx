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
    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 py-16">
      <div className="lg:w-1/2">
        <ProductImages product={product} />
      </div>
      <div className="lg:w-1/2">
        <ProductDetails product={product} />
      </div>
    </div>
  );
};

export default InfoProduct;
