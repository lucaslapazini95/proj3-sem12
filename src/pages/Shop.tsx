import Hero from "../components/hero/Hero";
import Products from "../components/productCard/Products";
import Seals from "../components/seals/Seals";

const Shop = () => {
  return (
    <div>
      <Hero title="Shop" firstPath="Home" secondPath="Shop" />
      <Products />
      <Seals />
    </div>
  );
};

export default Shop;
