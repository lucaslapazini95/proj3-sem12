import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/singleProduct/Breadcrumbs";
import InfoProduct from "../components/singleProduct/InfoProduct";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const SingleProduct: React.FC = () => {
  const { sku } = useParams<{ sku: string }>();
  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => p.sku === sku)
  );

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Breadcrumbs productTitle={product.title} />
      <InfoProduct />
    </div>
  );
};

export default SingleProduct;
