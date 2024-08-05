import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IProducts } from "../../types/product";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const ProductCard: React.FC<{ product: IProducts }> = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleRedirect = () => {
    navigate(`/shop/product/${product.sku}`);
  };

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(
      addItemToCart({
        id: product.id,
        title: product.title,
        salePrice: product.salePrice,
        imageUrl: product.images.mainImage,
        quantity: 1,
      })
    );
  };

  const hasDiscount = product.normalPrice !== product.salePrice;

  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-md transition-transform transform hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleRedirect}
    >
      <img
        className="rounded-xl w-full object-cover object-center"
        src={product.images.mainImage}
        alt={product.title}
      />

      {product.new && (
        <div className="absolute top-4 right-4 w-11 h-11 bg-[#2EC1AC] text-white text-base flex items-center justify-center rounded-full">
          New
        </div>
      )}

      {hasDiscount && (
        <div className="absolute top-4 right-4 w-11 h-11 bg-[#FF4D4D] text-white text-base flex items-center justify-center rounded-full">
          {Math.round(product.discountPercentage * 100)}%
        </div>
      )}

      <div
        className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity ${
          isHovered ? "opacity-100" : "opacity-0"
        } flex flex-col justify-center items-center`}
      >
        <button
          onClick={handleAddToCart}
          className="bg-white text-[#B88E2F] font-semibold py-2 px-4 rounded-lg hover:bg-[#B88E2F] hover:text-white transition-all duration-300"
        >
          Add to Cart
        </button>
        <div className="flex mt-4 space-x-4">
          <button className="text-white hover:text-[#B88E2F] transition-all">
            Share
          </button>
          <button className="text-white hover:text-[#B88E2F] transition-all">
            Compare
          </button>
          <button className="text-white hover:text-[#B88E2F] transition-all">
            Like
          </button>
        </div>
      </div>

      <div className="p-5 bg-[#F4F5F7] rounded-b-xl h-[180px] flex flex-col justify-between">
        <h3
          className="text-xl font-bold text-[#3A3A3A] overflow-hidden leading-tight"
          style={{
            maxHeight: "4.5rem",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
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
