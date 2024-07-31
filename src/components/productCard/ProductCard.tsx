import React from "react";
import { useNavigate } from "react-router-dom";
import { IProducts } from "../../types/product";

const ProductCard: React.FC<{ product: IProducts }> = ({ product }) => {
  const shouldShowDiscount = Math.random() > 0.5;

  const navigation = useNavigate();

  const handleRedirect = () => {
    navigation(`/shop/product/${product.sku}`);
  };

  const hasDiscount = product.normalPrice !== product.salePrice;
  const discountCircle =
    hasDiscount && !product.new && shouldShowDiscount ? (
      <div className="absolute top-4 right-4 w-11 h-11 bg-[#FF4D4D] text-white text-base flex items-center justify-center rounded-full">
        {Math.round(product.discountPercentage * 100)}%
      </div>
    ) : null;

  return (
    <div
      className="relative max-h-[446px] w-[285px] rounded-xl overflow-hidden bg-white shadow-md"
      onClick={handleRedirect}
    >
      <img
        className="rounded-t-xl w-full object-cover object-center"
        src={product.images.mainImage}
        alt={product.title}
      />
      {product.new && (
        <div className="absolute top-4 right-4 w-11 h-11 bg-[#2EC1AC] text-white text-base flex items-center justify-center rounded-full">
          New
        </div>
      )}
      {discountCircle}
      <div className="p-5 bg-[#F4F5F7] rounded-b-xl h-[180px]">
        <h3
          className="text-2xl font-bold text-[#3A3A3A] overflow-hidden"
          style={{
            maxHeight: "4.5rem",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {product.title}
        </h3>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-[#3A3A3A]">
            R$ {product.salePrice.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-lg text-[#B0B0B0] line-through ml-2">
              R$ {product.normalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
