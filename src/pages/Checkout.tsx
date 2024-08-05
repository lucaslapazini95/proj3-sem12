import BillingDetails from "../components/checkout/BillingDetails";
import PaymentMethod from "../components/checkout/PaymentMethod";
import Hero from "../components/hero/Hero";
import Seals from "../components/seals/Seals";

const Checkout = () => {
  return (
    <div>
      <Hero title="Checkout" firstPath="Home" secondPath="Checkout" />
      <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 p-8 max-w-screen-xl mx-auto">
        <BillingDetails />
        <PaymentMethod />
      </div>
      <Seals />
    </div>
  );
};

export default Checkout;
