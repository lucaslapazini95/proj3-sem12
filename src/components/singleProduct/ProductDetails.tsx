import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import { IProducts } from "../../types/product";
import fullStar from "../../assets/singleProduct/full-star.svg";
import emptyStar from "../../assets/singleProduct/empty-star.svg";
import halfStar from "../../assets/singleProduct/half-star.svg";

interface ProductDetailsProps {
  product: IProducts;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const handleDecrement = () =>
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: product.id,
        title: product.title,
        salePrice: product.salePrice,
        imageUrl: product.images.mainImage,
        quantity,
      })
    );
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array(fullStars)
          .fill(null)
          .map((_, index) => (
            <img
              key={`full-${index}`}
              src={fullStar}
              alt="Full Star"
              className="w-5 h-5"
            />
          ))}
        {halfStars === 1 && (
          <img src={halfStar} alt="Half Star" className="w-5 h-5" />
        )}
        {Array(emptyStars)
          .fill(null)
          .map((_, index) => (
            <img
              key={`empty-${index}`}
              src={emptyStar}
              alt="Empty Star"
              className="w-5 h-5"
            />
          ))}
      </>
    );
  };

  return (
    <div className="w-full md:w-auto">
      <h1 className="text-[2.625rem] font-normal text-black">
        {product.title}
      </h1>
      <span className="text-[1.5rem] text-[#9f9f9f] font-medium mb-4 block">
        R$ {product.salePrice.toFixed(2)}
      </span>
      <div className="flex mb-4">{renderStars(product.rating)}</div>
      <p className="text-sm font-normal text-black mb-5">
        {product.description.short}
      </p>
      <div className="flex gap-4 mb-15">
        <button
          onClick={handleDecrement}
          className="w-[123px] h-16 text-base flex gap-4 justify-center items-center border border-[#9f9f9f] rounded-lg text-black"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={handleIncrement}
          className="w-[123px] h-16 text-base flex gap-4 justify-center items-center border border-[#9f9f9f] rounded-lg text-black"
        >
          +
        </button>
        <button
          onClick={handleAddToCart}
          className="w-[215px] h-16 rounded-[15px] border border-black text-lg text-black font-normal bg-transparent transition-all cursor-pointer hover:bg-[#B88E2F] hover:text-white hover:border-none"
        >
          Add To Cart
        </button>
      </div>
      <div className="text-lg text-black font-normal mb-3">Stock: 99</div>
      <div className="border-t border-[#9f9f9f] pt-10">
        <p className="text-base text-[#9f9f9f] font-normal">
          SKU: {product.sku}
        </p>
        <p className="text-base text-[#9f9f9f] font-normal">
          Category: {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
