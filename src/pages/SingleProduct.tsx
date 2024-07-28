import { useParams } from "react-router-dom";
import InfoProduct from "../components/singleProduct/InfoProduct";
import RelatedProducts from "../components/singleProduct/RelatedProducts";
import Description from "../components/singleProduct/Description";

const SingleProduct = () => {
  const { productId } = useParams();

  return (
    <div>
      <InfoProduct productId={productId} />
      <Description />
      <RelatedProducts />
    </div>
  );
};

export default SingleProduct;
