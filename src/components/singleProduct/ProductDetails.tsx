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
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0].hex
  );

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
      <div className="flex items-center mb-4">
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
      </div>
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

      {/* Rating */}
      {renderStars(product.rating)}

      <p className="text-sm font-normal text-black mb-5">
        {product.description.short}
      </p>

      {/* Sizes */}
      <div className="mb-4">
        <span className="block text-lg text-black mb-2">Size</span>
        <div className="flex gap-2">
          {product.sizes.map((size, index) => (
            <button
              key={index}
              className={`px-3 py-1 border rounded-md ${
                selectedSize === size
                  ? "bg-[#B88E2F] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="mb-4">
        <span className="block text-lg text-black mb-2">Color</span>
        <div className="flex gap-2">
          {product.colors.map((color, index) => (
            <button
              key={index}
              style={{ backgroundColor: color.hex }}
              className={`w-8 h-8 border rounded-full ${
                selectedColor === color.hex ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setSelectedColor(color.hex)}
            />
          ))}
        </div>
      </div>

      {/* Quantity Selector and Add to Cart Button */}
      <div className="flex gap-4 items-center mb-15">
        <div className="flex items-center">
          <button
            onClick={handleDecrement}
            className="w-[60px] h-[60px] text-2xl flex justify-center items-center border border-[#9f9f9f] rounded-l-lg text-black hover:bg-gray-100 transition"
          >
            -
          </button>
          <span className="w-[60px] h-[60px] flex justify-center items-center border-t border-b border-[#9f9f9f] text-lg">
            {quantity}
          </span>
          <button
            onClick={handleIncrement}
            className="w-[60px] h-[60px] text-2xl flex justify-center items-center border border-[#9f9f9f] rounded-r-lg text-black hover:bg-gray-100 transition"
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-[230px] h-[60px] rounded-[15px] border border-black text-lg text-white font-normal bg-[#B88E2F] transition-all cursor-pointer hover:bg-opacity-90 hover:border-[#B88E2F]"
        >
          Add To Cart
        </button>
      </div>

      {/* Meta Info */}
      <div className="border-t border-[#9f9f9f] pt-10">
        <p className="text-base text-[#9f9f9f] font-normal">
          SKU: {product.sku}
        </p>
        <p className="text-base text-[#9f9f9f] font-normal">
          Category: {product.category}
        </p>
        <p className="text-base text-[#9f9f9f] font-normal">
          Tags: {product.tags.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
