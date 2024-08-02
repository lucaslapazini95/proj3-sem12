import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { IProducts, Icolors } from "../../types/product";
import Description from "../singleProduct/Description";
import RelatedProducts from "../singleProduct/RelatedProducts";
import ArrowRight from "../../assets/arrow-general.svg";
import fullStar from "../../assets/singleProduct/full-star.svg";
import emptyStar from "../../assets/singleProduct/empty-star.svg";
import halfStar from "../../assets/singleProduct/half-star.svg";
import "./ProductLegacy.css";

const InfoProduct: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const { sku } = useParams<{ sku: string }>();
  const [product, setProduct] = useState<IProducts | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (products && sku) {
      const foundProduct = products.find((p) => p.sku === sku);
      if (foundProduct) {
        setProduct(foundProduct);
        setMainImage(foundProduct.images.mainImage);
        setQuantity(1);
      }
    }
  }, [products, sku]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
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
    <>
      <div className="breadcrumb-container">
        <div className="breadcrumb-content">
          <span className="breadcrumb-item">
            Home
            <img src={ArrowRight} alt=">" className="breadcrumb-separator" />
          </span>
          <span className="breadcrumb-item">
            Shop
            <img src={ArrowRight} alt=">" className="breadcrumb-separator" />
          </span>
          <span className="breadcrumb-divider">|</span>
          <span className="breadcrumb-product-title">{product.title}</span>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row justify-center items-center gap-20">
        <div className="w-full md:w-auto flex flex-col gap-4">
          {product.images.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index}`}
              className="w-24 h-24 cursor-pointer object-cover"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
        <div className="w-full md:w-auto">
          <img
            src={mainImage || product.images.mainImage}
            alt={product.title}
            className="w-full"
          />
        </div>
        <div className="w-full md:w-auto">
          <h1 className="text-[2.625rem] font-normal text-black">
            {product.title}
          </h1>
          <span className="text-[1.5rem] text-[#9f9f9f] font-medium mb-4 block">
            R$ {product.salePrice}
          </span>
          <div className="flex mb-4">{renderStars(product.rating)}</div>
          <p className="text-sm font-normal text-black mb-5">
            {product.description.short}
          </p>
          <h2 className="text-sm text-[#9f9f9f] font-normal mb-3">Size</h2>
          <ul className="flex gap-4 mb-4">
            {product.sizes.map((size, index) => (
              <li
                key={index}
                className={`bg-[#F9F1E7] rounded text-sm text-black font-normal w-8 h-8 flex justify-center items-center transition-all cursor-pointer border-black border-2`}
              >
                {size as React.ReactNode}
              </li>
            ))}
          </ul>
          <h2 className="text-sm text-[#9f9f9f] font-normal mb-3">Color</h2>
          <ul className="flex gap-4 mb-8">
            {product.colors.map((color: Icolors) => (
              <li
                key={color.hex}
                className={`w-8 h-8 rounded-full border-black border-2 transition-transform cursor-pointer`}
                style={{ backgroundColor: color.hex }}
              ></li>
            ))}
          </ul>
          <div className="flex gap-4 mb-15">
            <button className="w-[123px] h-16 text-base flex gap-4 justify-center items-center border border-[#9f9f9f] rounded-lg text-black">
              <span
                onClick={handleDecrement}
                className="text-lg mt-2 cursor-pointer transition-all p-1.5 rounded-full hover:bg-[#B88E2F]"
              >
                -
              </span>
              {quantity}
              <span
                onClick={handleIncrement}
                className="text-lg mt-2 cursor-pointer transition-all p-1.5 rounded-full hover:bg-[#B88E2F]"
              >
                +
              </span>
            </button>
            <button className="w-[215px] h-16 rounded-[15px] border border-black text-lg text-black font-normal bg-transparent transition-all cursor-pointer hover:bg-[#B88E2F] hover:text-white hover:border-none">
              Add To Cart
            </button>
          </div>
          <div className="text-lg text-black font-normal mb-3">Stock: 99</div>
          <div className="border-t border-[#9f9f9f] pt-10">
            <p className="text-base text-[#9f9f9f] font-normal">
              SKU: {product.sku}{" "}
            </p>
            <p className="text-base text-[#9f9f9f] font-normal">
              Category: {product.category}
            </p>
          </div>
        </div>
      </div>
      <Description text={product.description.long} />
      <RelatedProducts category={product.category} products={products} />
    </>
  );
};

export default InfoProduct;
