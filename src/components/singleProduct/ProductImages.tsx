import React, { useState } from "react";
import { IProducts } from "../../types/product";

interface ProductImagesProps {
  product: IProducts;
}

const ProductImages: React.FC<ProductImagesProps> = ({ product }) => {
  const [mainImage, setMainImage] = useState<string>(product.images.mainImage);

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full md:w-[500px]">
        <img
          src={mainImage}
          alt={product.title}
          className="w-full object-cover rounded"
        />
      </div>
      <div className="flex gap-2">
        {product.images.gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            className="w-20 h-20 cursor-pointer object-cover rounded"
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
