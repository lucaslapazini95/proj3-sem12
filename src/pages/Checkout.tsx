import BillingDetails from "../components/checkout/BillingDetails";
import PaymentMethod from "../components/checkout/PaymentMethod";
import Hero from "../components/hero/Hero";
import Seals from "../components/seals/Seals";

const Checkout = () => {
  return (
    <div>
      <Hero title="Checkout" firstPath="Home" secondPath="Checkout" />
      <div className="flex flex-row justify-center gap-6">
        <BillingDetails />
        <PaymentMethod />
      </div>
      <Seals />
    </div>
  );
};

export default Checkout;
