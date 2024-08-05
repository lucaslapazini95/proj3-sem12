import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ProductCard from "../productCard/ProductCard";

interface RelatedProductsProps {
  category: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ category }) => {
  const products = useSelector((state: RootState) => state.products.products);

  const relatedProducts = products
    .filter((product) => product.category === category)
    .slice(0, 4);

  return (
    <section className="py-12 border-t border-gray-300 bg-gray-50">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-2xl font-semibold text-black mb-6">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
