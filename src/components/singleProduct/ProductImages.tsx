import React, { useState } from "react";
import { IProducts } from "../../types/product";

interface ProductImagesProps {
  product: IProducts;
}

const ProductImages: React.FC<ProductImagesProps> = ({ product }) => {
  const [mainImage, setMainImage] = useState<string>(product.images.mainImage);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="order-2 md:order-1 flex flex-col gap-4">
        <img
          src={product.images.mainImage}
          alt="Main Image"
          className={`w-[80px] h-[80px] cursor-pointer object-cover rounded-md border ${
            mainImage === product.images.mainImage
              ? "border-gray-500"
              : "border-gray-300 hover:border-gray-500"
          }`}
          onClick={() => setMainImage(product.images.mainImage)}
        />
        {product.images.gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            className={`w-[80px] h-[80px] cursor-pointer object-cover rounded-md border ${
              mainImage === image
                ? "border-gray-500"
                : "border-gray-300 hover:border-gray-500"
            }`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
      <div className="order-1 md:order-2 w-full md:w-[500px]">
        <img
          src={mainImage}
          alt={product.title}
          className="w-full object-cover rounded-lg border border-gray-300"
        />
      </div>
    </div>
  );
};

export default ProductImages;
