import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import { fetchProductById } from "../../redux/productThunks";

const InfoProduct: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.product.product);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(Number(productId)));
    }
  }, [dispatch, productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center items-start gap-20 container mx-auto">
        <div className="w-full">
          <img
            src={product.images.mainImage}
            alt={product.title}
            className="w-full"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-normal text-black">{product.title}</h1>
          <p className="text-sm font-normal text-black mb-6">
            {product.description.short}
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoProduct;
