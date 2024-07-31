import { useEffect } from "react";
import { IProducts } from "../../types/product";
import ProductCard from "../productCard/ProductCard";
import { useLocation } from "react-router-dom";

type RelatedProductsProps = {
  category: string;
  products?: IProducts[];
};

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  category,
  products = [],
}) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section className="border-t border-gray-300 py-8 bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Related Products
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {products
          .filter((product) => product.category === category)
          .slice(0, 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
