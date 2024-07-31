import InfoProduct from "../components/singleProduct/InfoProduct";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <InfoProduct />
    </div>
  );
};

export default SingleProduct;
