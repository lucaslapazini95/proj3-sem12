import React, { useEffect, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ProductCard from "./ProductCard";
import { setCurrentPage } from "../../redux/productsSlice";

interface UnifiedTestApiProps {
  isPreview?: boolean;
  search?: string;
  filterCategory?: string;
}

const Products: React.FC<UnifiedTestApiProps> = ({
  isPreview = false,
  search,
  filterCategory,
}) => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const show = useSelector((state: RootState) => state.products.show);
  const currentPage = useSelector(
    (state: RootState) => state.products.currentPage
  );
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/shop") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        (!filterCategory || product.category === filterCategory) &&
        (!search || product.title.toLowerCase().includes(search.toLowerCase()))
    );
  }, [products, search, filterCategory]);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice((currentPage - 1) * show, currentPage * show);
  }, [filteredProducts, currentPage, show]);

  const totalPages = Math.ceil(filteredProducts.length / show);

  if (filteredProducts.length === 0) return <p>No products found</p>;

  return (
    <div className="p-4 md:max-w-7xl md:mx-auto mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {isPreview && (
        <div className="text-center mt-16">
          <NavLink
            to="/shop"
            className="bg-white text-[#B88E2F] font-semibold px-12 py-2 rounded border border-[#B88E2F] w-[245px] h-[48px] hover:bg-[#B88E2F] hover:text-white transition-all duration-300"
          >
            Show More
          </NavLink>
        </div>
      )}
      {!isPreview && (
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-2 px-3 py-1 border ${
                currentPage === index + 1
                  ? "bg-[#B88E2F] text-white"
                  : "bg-white text-[#B88E2F]"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
