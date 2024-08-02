import React from "react";
import ShoppingCart from "../components/shoppingCart/ShoppingCart";
import Seals from "../components/seals/Seals";
import Hero from "../components/hero/Hero";

const Cart: React.FC = () => {
  return (
    <div>
      <Hero title="Cart" firstPath="Home" secondPath="Cart" />
      <ShoppingCart />
      <Seals />
    </div>
  );
};

export default Cart;
